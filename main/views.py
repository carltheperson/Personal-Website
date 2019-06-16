from django.shortcuts import render
from django.shortcuts import render_to_response
from .models import Project

import os


def home(request):
	return render_to_response("home.html")

def about_me(request):
	return render_to_response("about_me.html")

def projects(request):
	projects = list(Project.objects.all())
	projects.reverse()

	return render_to_response("projects.html", {"projects": projects})

def contact(request):
	return render_to_response("contact.html")
