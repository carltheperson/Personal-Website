from django.db import models

# Create your models here.

class Project(models.Model):
	title = models.CharField(max_length=60)
	description = models.CharField(max_length=350)
	image = models.ImageField(upload_to="images/")
	github_link = models.CharField(max_length=60)
	link = models.CharField(max_length=60, blank=True)

	def __str__(self):
		return self.title