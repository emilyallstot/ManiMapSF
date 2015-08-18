from instagram.client import InstagramAPI
import os
import yelp
import csv
import phonenumbers
import time
from flask import Flask, render_template, jsonify, redirect, flash, session
import jinja2
import datetime
import urllib
import sys

app = Flask(__name__)
app.secret_key = "yoursecretkeyhere"

client_secret = os.environ["INSTAGRAM_CLIENT_SECRET"]
client_id = os.environ["INSTAGRAM_CLIENT_ID"]
access_token = os.environ["INSTAGRAM_ACCESS_TOKEN"]

api = InstagramAPI(client_id=client_id, access_token=access_token, client_secret=client_secret)

def seed_background_instapics():
	instapics = []

	# recent_media, next = api.user_recent_media(user_id=)
	recent_media, next = api.user_recent_media()
	while next: # keep paginating to get all the photos
		more_media, next = api.user_recent_media(with_next_url=next)
		recent_media.extend(more_media)

	for media in recent_media:
		pic_url = media.images[u'standard_resolution'].url
		pic_name = str(media).split(': ')[1]
		instapics.append(pic_url)

		pic_name_save = './static/img/instabg/' + pic_name + '.jpg'
		if os.path.isfile(pic_name_save): # save any photos added since last seed
			print "Already have this photo: " + pic_name_save
		else:
			urllib.urlretrieve(pic_url, pic_name_save)

	return instapics


def local_background_instapics():
	instapics = []

	path = './static/img/instabg/'
	pic_directory = os.listdir(path)

	for pic in pic_directory:
   		instapics.append(path + pic)

   	return instapics


@app.route('/')
def seedinstapic():
    """Show most recent @manimapsf instagram photos on a webpage"""
    print 'boo'

    photos = local_background_instapics()

    return render_template("instatest.html", photos=photos)


if __name__ == "__main__":
    app.config['DEBUG'] = True

    app.run()
