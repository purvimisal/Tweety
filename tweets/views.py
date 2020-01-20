from django.shortcuts import render, redirect
from django.http import HttpResponse, Http404, JsonResponse, HttpResponseRedirect
import random
from django.utils.http import is_safe_url
from django.conf import settings
from rest_framework.decorators import api_view

ALLOWED_HOSTS = settings.ALLOWED_HOSTS

def home_view(request, *args, **kwargs):
    # username = None
    # if request.user.is_authenticated:
    #     username = request.user.username
    return render(request, "pages/feed.html")


def tweets_list_view(request, *args, **kwargs):
    return render(request, "tweets/list.html")

def tweets_detail_view(request, tweet_id, *args, **kwargs):
    return render(request, "tweets/detail.html", context={"tweet_id": tweet_id})

