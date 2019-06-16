from django.contrib import admin
from main.models import Project

class AuthorAdmin(admin.ModelAdmin):
	pass

# Register your models here.

admin.site.register(Project, AuthorAdmin)