from django.shortcuts import render

from django.http import HttpResponse

# Create your views here.

def random_recipes(request):
	return HttpResponse("it's working")