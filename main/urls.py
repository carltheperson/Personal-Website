from . import views


from django.urls import path


app_name = 'main'

urlpatterns = [
	path("", views.home),
	path("about-me/", views.about_me),
	path("projects/", views.projects),
	path("contact/", views.contact),
]
