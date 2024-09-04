import os
import uuid

from django.db import models
from django.utils.text import slugify
from django.conf import settings


class Ingredient(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ["name"]


def photo_cocktail_file_path(instance, filename):
    _, extension = os.path.splitext(filename)
    filename = f"{slugify(instance.name)}-{uuid.uuid4()}{extension}"

    return os.path.join("uploads/cocktails/", filename)


class CocktailRecipe(models.Model):

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
        JUICE = "Juice"

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
    description = models.TextField(blank=True, null=True)
    cocktail_type = models.CharField(max_length=100, choices=TypeChoices.choices)
    ingredients = models.ManyToManyField(Ingredient, through="CocktailIngredients")
    taste = models.CharField(max_length=100, choices=TasteChoices.choices)
    cocktail_base = models.CharField(max_length=100, choices=CocktailBaseChoices)
    group = models.CharField(max_length=100, choices=GroupChoices.choices)
    how_to_make = models.TextField()
    preparation_time = models.IntegerField(help_text="Time in minutes")
    preparation_method = models.CharField(
        max_length=100, choices=PreparationChoices.choices
    )
    difficulty = models.CharField(max_length=100, choices=DifficultyChoices.choices)
    photo = models.ImageField(upload_to=photo_cocktail_file_path)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name


class CocktailIngredients(models.Model):
    class UnitChoices(models.TextChoices):
        G = "gr"
        ML = "ml"
        SLICE = "slice"
        PIECE = "pcs"
        tablespoon = "tablespoon"

    cocktail = models.ForeignKey(
        CocktailRecipe, on_delete=models.CASCADE, related_name="cocktail_ingredients"
    )
    ingredient = models.ForeignKey(
        Ingredient, on_delete=models.CASCADE, related_name="ingredient_in_cocktails"
    )
    unit = models.CharField(max_length=50, choices=UnitChoices.choices)
    quantity = models.DecimalField(max_digits=5, decimal_places=0)

    class Meta:
        unique_together = ["cocktail", "ingredient"]

    def __str__(self):
        return f"{self.ingredient.name} - {self.quantity} {self.unit}"


class Comment(models.Model):
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="comments"
    )
    cocktail = models.ForeignKey(
        CocktailRecipe, on_delete=models.CASCADE, related_name="comments"
    )
    content = models.TextField()
    commented_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-commented_at"]

    def __str__(self):
        return f"{self.author.username} added comment: {self.content} for cocktail {self.cocktail}"


class FavouriteCocktails(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="favourites"
    )
    cocktail = models.ForeignKey(
        CocktailRecipe, on_delete=models.CASCADE, related_name="favourites"
    )
    added_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ["user", "cocktail"]
        ordering = ["-added_at"]

    def __str__(self):
        return f"{self.user.username} added cocktail {self.cocktail} in favourite list"


class Rating(models.Model):
    class StarChoices(models.IntegerChoices):
        ONE = 1
        TWO = 2
        THREE = 3
        FOUR = 4
        FIVE = 5

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="ratings"
    )
    cocktail = models.ForeignKey(
        CocktailRecipe, on_delete=models.CASCADE, related_name="ratings"
    )
    stars = models.PositiveIntegerField(default=0, choices=StarChoices.choices)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ["user", "cocktail"]

    def __str__(self):
        return f"{self.cocktail.name} rating: {self.stars}"
