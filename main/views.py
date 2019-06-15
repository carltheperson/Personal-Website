from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render_to_response

def home(request):
	return render_to_response("home.html")

def about_me(request):
	return render_to_response("about_me.html")

def projects(request):
	return render_to_response("projects.html")

def contact(request):
	return render_to_response("contact.html")
