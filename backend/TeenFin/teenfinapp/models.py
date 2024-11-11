# app_name/models.py

from django.db import models

class Parent(models.Model):
    name = models.CharField(max_length=100)
    address = models.TextField()
    upi_id = models.CharField(max_length=100)
    aadhaar_number = models.CharField(max_length=12)

    def __str__(self):
        return self.name

class Teenager(models.Model):
    name = models.CharField(max_length=100)
    address = models.TextField()
    upi_id = models.CharField(max_length=100)
    aadhaar_number = models.CharField(max_length=12)
    parent = models.ForeignKey(Parent, related_name='teenagers', on_delete=models.CASCADE)

    def __str__(self):
        return self.name