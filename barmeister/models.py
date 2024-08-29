import os
import uuid

from django.db import models
from django.utils.text import slugify
from django.conf import settings


class Ingredient(models.Model):

    class UnitChoices(models.TextChoices):
        G = "grams"
        ML = "milliliters"
        SLICE = "slice"
        PIECE = "piece"

    name = models.CharField(max_length=100, unique=True)
    unit = models.CharField(max_length=50, choices=UnitChoices.choices)

    def __str__(self):
        return self.name


def photo_cocktail_file_path(instance, filename):
    _, extension = os.path.splitext(filename)
    filename = f"{slugify(instance.name)}-{uuid.uuid4()}{extension}"

    return os.path.join("uploads/cocktails/", filename)


class Cocktail(models.Model):

    class TypeChoices(models.TextChoices):
        LOW_ALCOHOLIC = "Low-Alcoholic"
        NON_ALCOHOLIC = "Non-Alcoholic"
        STRONG = "Strong"

    class DifficultyChoices(models.TextChoices):
        EASY = "Easy"
        MEDIUM = "Medium"
        HARD = "Hard"

    class TasteChoices(models.TextChoices):
        SWEET = "Sweet"
        SOUR = "Sour"
        BITTER = "Bitter"
        SALTY = "Salty"
        CREAMY = "Creamy"

    class CocktailBaseChoices(models.TextChoices):
        VODKA = "Vodka"
        BRANDY = "Brandy"
        WHISKEY = "Whiskey"
        GIN = "Gin"
        TEQUILA = "Tequila"
        RUM = "Rum"
        WINE = "Wine"
        SPARKLING_WINE = "Sparkling Wine"

    class PreparationChoices(models.TextChoices):
        BUILD = "Build"
        SHAKE = "Shake"
        STIR = "Stir"
        BLEND = "Blend"
        LAYER = "Layer"
        HEAT = "Heat"

    class GroupChoices(models.TextChoices):
        LONG_DRINK = "Long Drink"
        SHORT_DRINK = "Short Drink"
        SHOT = "Shot"
        SOUR = "Sour"
        CLASSIC = "Classic"
        HOT = "Hot"

    name = models.CharField(max_length=100, unique=True)
    description = models.TextField()
    cocktail_type = models.CharField(max_length=100, choices=TypeChoices.choices)
    ingredients = models.ManyToManyField(Ingredient)
    quantity = models.PositiveIntegerField()
    taste = models.CharField(max_length=100, choices=TasteChoices.choices)
    cocktail_base = models.CharField(max_length=100, choices=CocktailBaseChoices)
    group = models.CharField(max_length=100, choices=GroupChoices.choices)
    how_to_make = models.TextField()
    preparation_time = models.IntegerField(help_text="Time in minutes")
    preparation_method = models.CharField(max_length=100, choices=PreparationChoices.choices)
    difficulty = models.CharField(max_length=100, choices=DifficultyChoices.choices)
    photo = models.ImageField(upload_to=photo_cocktail_file_path)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(blank=True, null=True)
