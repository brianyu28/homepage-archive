import os
from flask import Flask, jsonify, send_from_directory

app = Flask(__name__)

@app.route("/<path:path>")
@app.route("/")
def index(path=""):
    return send_from_directory("client/build", "index.html")

@app.route("/resume")
def resume():
    return app.send_static_file("resume.pdf")

@app.route("/testing")
def testing():
    return os.environ.get("TESTING", "None")

