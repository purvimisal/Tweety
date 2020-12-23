
# Tweety 
#### A web application for micro blogging using Django REST framework, PostgreSQL and React deployed on Heroku and AWS S3.

## Features 
* User Registration
* User Login and Logout
* User Profile with bio
* User Feed curated according to the users followed by them
* Tweet creation with text or image
* Liking a tweet
* Unliking a tweet
* Deleting self tweet
* Retweeting a tweet- with or without comment
* Following a user
* Unfollowing a user 

## Requirements 
* Django 2.0+
* Python 3.6+
* ReactJS
* Bootstrap
* boto3
* djangorestframework   

*(All other requirements listed in [requirements.txt](https://github.com/purvimisal/Tweety/blob/master/src/requirements.txt))*

## Overview  
Tweety is a full stack application which can be used for micro blogging (like Twitter). I use Django REST framework for the backend APIs and ReactJS for the frontend of the application. The inbuilt databased of Python, SQLite is used as the database in development mode. This project uses Django's in-built authentication and security features for user authentication and authorization. Below is the tech stack and system design overview of the application:


### Tech Stack 
![Tech stack](https://github.com/purvimisal/Tweety/blob/master/img/techstack.png)

### System Design Overview 
![System design](https://github.com/purvimisal/Tweety/blob/master/img/sys-design.png)  

>ReactJS renders the UI by fetching the statis HTML files from AWS S3 bucket. On any User event, the API calls are made to the DJango Rest framework backend deployed on heroku. Information is fetched and stored in PostGres from heroku datastores. 


## Architecture - Model View Template 
*(Architecture of django application)*
![MVT](https://github.com/purvimisal/Tweety/blob/master/img/django-app.png)

#### The models from different apps and their relationships are shown in the diagram below:
Custom apps created: 
1. tweets
1. profiles
1. accounts

![Models](https://github.com/purvimisal/Tweety/blob/master/img/models.png)

The different URLs supported and their respective views in the app are as follows: 
![urls](https://github.com/purvimisal/Tweety/blob/master/img/urls.png)
