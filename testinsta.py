from instagram.client import InstagramAPI
import os
import yelp
import csv
import phonenumbers
import time
from flask import Flask, render_template, jsonify, redirect, flash, session
import jinja2
import datetime

client_secret = os.environ["INSTAGRAM_CLIENT_SECRET"]
client_id = os.environ["INSTAGRAM_CLIENT_ID"]

app = Flask(__name__)
app.secret_key = "yoursecretkeyhere"


def read_csv_insta():
    """Reads manually curated .csv file of nail salons in San Francisco
    and returns dictionary with key = yelp id, value = instagram location ID"""
    yelp_ids_hours_file = open('insta9')
    yelp_ids_hours = csv.reader(yelp_ids_hours_file)

    instalocations = {}

    for row in yelp_ids_hours:
        infos = row[0].split('|')
        # print infos[0], infos[8]
        if infos[8] != "NONE":
        	instalocations[infos[0]] = infos[8]

    return instalocations

# http://jelled.com/instagram/lookup-user-id#
api = InstagramAPI(client_id=client_id, client_secret=client_secret)


# instasalons = read_csv_insta()
# for key, value in instasalons.items()

# popular_media = api.media_popular(count=20)
# for media in popular_media:
#     print media.images['standard_resolution'].url

@app.route("/")
def print_pics():


	

	recent_photos = {}
	instapics = []
	instalocations = read_csv_insta()

	# print instalocations.values()

	for location_id in instalocations.values():
		recent_media, next = api.location_recent_media(location_id=location_id)

		for media in recent_media:
			# print media.location.name
			# if recent_photos[media.location.name]
			# recent_photos[media.location.name] = {'instalocation': infos[8]}
			if len(instapics) < 5:
				instapics.append(media.images[u'standard_resolution'].url.encode('ascii', 'ignore'))
				# print media.images[u'standard_resolution'].url.encode('ascii', 'ignore')
				place_name = media.location.name.encode('ascii', 'ignore')
				recent_photos[place_name] = instapics
		instapics = []


	return render_template("insta_pics.html", recent_photos=recent_photos)

if __name__ == "__main__":
    app.config['DEBUG'] = True
    # connect_to_db(app)
    app.run()
