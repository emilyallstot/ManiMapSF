import os
import yelp
from instagram.client import InstagramAPI
import csv
import phonenumbers
import time
from flask import Flask, render_template, jsonify, redirect, flash, session
import jinja2
import datetime

app = Flask(__name__)
app.secret_key = "yoursecretkeyhere"


yelp_api = yelp.Api(
    consumer_key=os.environ['YELP_CONSUMER_KEY'],
    consumer_secret=os.environ['YELP_CONSUMER_SECRET'],
    access_token_key=os.environ['YELP_ACCESS_TOKEN'],
    access_token_secret=os.environ['YELP_ACCESS_TOKEN_SECRET'])

client_secret = os.environ["INSTAGRAM_CLIENT_SECRET"]
client_id = os.environ["INSTAGRAM_CLIENT_ID"]


def address_formatted(raw_address):
    address_string = ""
    for line in raw_address:
        address_string = address_string + line + ' '
    return address_string


def phone_formatted(raw_phone):
    phone_string = ""
    if raw_phone:
        phone_string = phonenumbers.parse(raw_phone, "US")
        phone_string = phonenumbers.format_number(phone_string, phonenumbers.PhoneNumberFormat.NATIONAL)
    return phone_string


def yelp_to_salon_list_SF(search_term):
    """Use this to get info about all businesses for a search term"""
    search_results = yelp_api.Search(term=search_term, location="San Francisco, CA", radius_filter=6000, categories="beautysvc,othersalons")
    total_results = search_results.total

    offset = total_results % 20 - 1

    yelp_ids_dict = {}

    while offset < total_results:
        search_results_expanded = yelp_api.Search(term=search_term, offset=offset, location="San Francisco, CA", radius_filter=6000, categories="beautysvc,othersalons")
        for business in search_results_expanded.businesses:
            if business.name not in yelp_ids_dict:
                yelp_ids_dict[business.name] = { \
                'yelp_id': business.id, \
                'bus_lat': business.location.coordinate[u'latitude'], \
                'bus_long': business.location.coordinate[u'longitude'], \
                'address': address_formatted(business.location.address), \
                'phone': phone_formatted(business.phone)}
                # print yelp_ids_dict[business.name]['phone']
        offset = offset + 20

    return yelp_ids_dict


def read_csv():
    """Reads manually curated .csv file of nail salons in San Francisco
    and returns dictionary with key = yelp id, values for day of the week"""
    yelp_ids_hours_file = open('insta9')
    yelp_ids_hours = csv.reader(yelp_ids_hours_file)

    yelp_ids = {}

    for row in yelp_ids_hours:
        infos = row[0].split('|')
        yelp_ids[infos[0]] = { \
        'Monday': infos[1], \
        'Tuesday': infos[2], \
        'Wednesday': infos[3], \
        'Thursday': infos[4], \
        'Friday': infos[5], \
        'Saturday': infos[6], \
        'Sunday': infos[7] }

        # print infos[0], yelp_ids[infos[0]]['Monday']

    return yelp_ids

def read_csv_insta(yelp_id):
    """Reads manually curated .csv file of nail salons in San Francisco
    and returns dictionary with key = yelp id of given nail salon, value = instagram location ID"""
    yelp_ids_hours_file = open('insta9')
    yelp_ids_hours = csv.reader(yelp_ids_hours_file)

    instalocations = {}

    for row in yelp_ids_hours:
        infos = row[0].split('|')
        # print infos[0], infos[8]
        if infos[8] != "NONE" and infos[0] == yelp_id:
            print infos[0]
            instalocations[infos[0]] = infos[8]

    return instalocations


def yelp_id_search(yelp_id):
    """Takes a yelp id and returns a dictionary with its 
    name, latitude, longitude, addres, and phone"""

    business_info = {}

    business = yelp_api.GetBusiness(yelp_id)
    business_info[business.id] = { \
    'yelp_id': business.id.encode('ascii','ignore'), \
    'business_name': business.name.encode('ascii','ignore'), \
    'bus_lat': business.location.coordinate[u'latitude'], \
    'bus_long': business.location.coordinate[u'longitude'], \
    'address': address_formatted(business.location.address), \
    'phone': phone_formatted(business.phone)}

    # print business_info
    return business_info


@app.route('/')
def map():
    """Show map of businesses."""


    return render_template("map.html")


@app.route('/business_list.json')
def business_list():
    """JSON information about businessess.
    had to remove: la-crEme-spa-san-francisco-2, remEde-spa-san-francisco-2
    """
    now_datetime = datetime.datetime.now()

    today = now_datetime.strftime('%A')

    businesses = read_csv()
    businesses_for_map = {}

    for key, values in businesses.items():
        # time.sleep(.1)
        # print key
        business_infos = yelp_id_search(key)
        if business_infos:
            businesses_for_map.update(business_infos)
            todays_hours = {'todaysHours': values[today]}
            business_infos[key].update(todays_hours)
            print business_infos


    # print businesses_for_map
    return jsonify(businesses_for_map)


# @app.route('/business_info.json')
# def business_map():
#     """JSON information about a business
#     """
#     now_datetime = datetime.datetime.now()

#     today = now_datetime.strftime('%A')

#     yelp_id = 
#     businesses_for_map = {}

#     #get business name from page
#     #get business info
#     # turn into dictionary for map

#     for key, values in businesses.items():
#         # time.sleep(.1)
#         # print key
#         business_infos = yelp_id_search(key)
#         if business_infos:
#             businesses_for_map.update(business_infos)
#             todays_hours = {'todaysHours': values[today]}
#             business_infos[key].update(todays_hours)
#             print business_infos


#     # print businesses_for_map
#     return jsonify(businesses_for_map)


@app.route("/salons")
def list_salons():
    """Return page showing all the nail salons"""

    salons = read_csv().keys()
    salons_dict = {}

    for salon in salons:
        salons_dict[salon] = yelp_api.GetBusiness(salon).name
    
    return render_template("salons_list.html", salons=salons_dict)


def print_pics_dict1(yelp_id):
 
    api = InstagramAPI(client_id=client_id, client_secret=client_secret)

    recent_photos = {}
    instapics = []
    instalinks = []
    instalocations = read_csv_insta(yelp_id)

    # print instalocations.values()


    for location_id in instalocations.values():
        recent_media, next = api.location_recent_media(location_id=location_id)

        for media in recent_media:
            # print media.location.name
            # if recent_photos[media.location.name]
            # recent_photos[media.location.name] = {'instalocation': infos[8]}
            # print media.link
            if len(instapics) < 5:
                pic = media.images[u'standard_resolution'].url.encode('ascii', 'ignore')
                link = media.link
                instapics.append([pic, link])
                # print media.images[u'standard_resolution'].url.encode('ascii', 'ignore')
                place_name = media.location.name.encode('ascii', 'ignore')
                recent_photos[location_id] = { place_name: instapics }
        instapics = []
        instalinks = []

    # print recent_photos.keys()
    return recent_photos


@app.route("/salons/<string:yelp_id>")
def show_salon(yelp_id):
    """Return page showing the details of a given salon"""
    
    business = yelp_api.GetBusiness(yelp_id)
    business_name = business.name.encode('ascii','ignore')
    address = address_formatted(business.location.address)
    phone = phone_formatted(business.phone)

    openhours = read_csv()[yelp_id]
    print openhours

    recent_photos_dict1 = print_pics_dict1(yelp_id)
    # print 'bar'*33
    recent_photos1 = recent_photos_dict1.values()[0]
    # print recent_photos1

    insta_location_id1 = recent_photos_dict1.keys()[0]
    # print insta_location_id1



    return render_template("salon_info.html", business_name=business_name, \
        address=address, phone=phone, openhours=openhours, recent_photos=recent_photos1, \
        yelp_id=yelp_id, insta_location_id=insta_location_id1)


def healthynails():
    """Reading a Using SF Healthy Nail Salon List copied froms
    http://www.sfenvironment.org/healthy-nail-salon-program
    (Live map: http://www.sfenvironment.org/article/business/healthy-nail-salons)"""

    healthynails_file = open('healthynails.csv')
    healthynails_businesses = csv.reader(healthynails_file)


    for row in healthynails_businesses:
        business_name = row[0]
        search_results = yelp_api.Search(term=business_name, limit=1, location="San Francisco, CA", categories="beautysvc,othersalons")
        

        # for business in search_results.businesses:
            # print business.id



if __name__ == "__main__":
    app.config['DEBUG'] = True
    # connect_to_db(app)
    healthynails()
    app.run()