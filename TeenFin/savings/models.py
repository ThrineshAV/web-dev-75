from django.db import models

class Month(models.Model):
    january = models.IntegerField(default=0)
    february = models.IntegerField(default=0)
    march = models.IntegerField(default=0)
    april = models.IntegerField(default=0)
    may = models.IntegerField(default=0)
    june = models.IntegerField(default=0)
    july = models.IntegerField(default=0)
    august = models.IntegerField(default=0)
    september = models.IntegerField(default=0)
    october = models.IntegerField(default=0)
    november = models.IntegerField(default=0)
    december = models.IntegerField(default=0)

    def __str__(self):
        return "Month Data Record"


# Create your models here.
