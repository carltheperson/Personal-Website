from . import views

from django.urls import path
from django.views.generic import TemplateView

app_name = 'static_projects'

urlpatterns = [
	path("random-recipes/", TemplateView.as_view(template_name="random recipes/index.html")),
	path("random-recipes/your-recipes/", TemplateView.as_view(template_name="random recipes/your_recipes.html")),
	path("the-pi-guide/", TemplateView.as_view(template_name="the pi guide/index.html")),
	path("planet-generator/", TemplateView.as_view(template_name="planet generator/index.html"))
]