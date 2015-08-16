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
access_token = os.environ["INSTAGRAM_ACCESS_TOKEN"]


# def print_pics():
api = InstagramAPI(client_id=client_id, access_token=access_token, client_secret=client_secret)


recent_media, next = api.user_recent_media()

for media in recent_media:
	print media