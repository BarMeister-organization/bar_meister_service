# Generated by Django 5.1 on 2024-09-03 12:51

import barmeister.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="CocktailIngredients",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "unit",
                    models.CharField(
                        choices=[
                            ("gr", "G"),
                            ("ml", "Ml"),
                            ("slice", "Slice"),
                            ("pcs", "Piece"),
                            ("tablespoon", "Tablespoon"),
                        ],
                        max_length=50,
                    ),
                ),
                ("quantity", models.DecimalField(decimal_places=0, max_digits=5)),
            ],
        ),
        migrations.CreateModel(
            name="CocktailRecipe",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=100, unique=True)),
                ("description", models.TextField(blank=True, null=True)),
                (
                    "cocktail_type",
                    models.CharField(
                        choices=[
                            ("Low-Alcoholic", "Low Alcoholic"),
                            ("Non-Alcoholic", "Non Alcoholic"),
                            ("Strong", "Strong"),
                        ],
                        max_length=100,
                    ),
                ),
                (
                    "taste",
                    models.CharField(
                        choices=[
                            ("Sweet", "Sweet"),
                            ("Sour", "Sour"),
                            ("Bitter", "Bitter"),
                            ("Salty", "Salty"),
                            ("Creamy", "Creamy"),
                        ],
                        max_length=100,
                    ),
                ),
                (
                    "cocktail_base",
                    models.CharField(
                        choices=[
                            ("Vodka", "Vodka"),
                            ("Brandy", "Brandy"),
                            ("Whiskey", "Whiskey"),
                            ("Gin", "Gin"),
                            ("Tequila", "Tequila"),
                            ("Rum", "Rum"),
                            ("Wine", "Wine"),
                            ("Sparkling Wine", "Sparkling Wine"),
                            ("Juice", "Juice"),
                        ],
                        max_length=100,
                    ),
                ),
                (
                    "group",
                    models.CharField(
                        choices=[
                            ("Long Drink", "Long Drink"),
                            ("Short Drink", "Short Drink"),
                            ("Shot", "Shot"),
                            ("Sour", "Sour"),
                            ("Classic", "Classic"),
                            ("Hot", "Hot"),
                        ],
                        max_length=100,
                    ),
                ),
                ("how_to_make", models.TextField()),
                ("preparation_time", models.IntegerField(help_text="Time in minutes")),
                (
                    "preparation_method",
                    models.CharField(
                        choices=[
                            ("Build", "Build"),
                            ("Shake", "Shake"),
                            ("Stir", "Stir"),
                            ("Blend", "Blend"),
                            ("Layer", "Layer"),
                            ("Heat", "Heat"),
                        ],
                        max_length=100,
                    ),
                ),
                (
                    "difficulty",
                    models.CharField(
                        choices=[
                            ("Easy", "Easy"),
                            ("Medium", "Medium"),
                            ("Hard", "Hard"),
                        ],
                        max_length=100,
                    ),
                ),
                (
                    "photo",
                    models.ImageField(
                        upload_to=barmeister.models.photo_cocktail_file_path
                    ),
                ),
                ("created_at", models.DateTimeField(auto_now_add=True)),
            ],
            options={
                "ordering": ["name"],
            },
        ),
        migrations.CreateModel(
            name="Comment",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("content", models.TextField()),
                ("commented_at", models.DateTimeField(auto_now_add=True)),
            ],
            options={
                "ordering": ["-commented_at"],
            },
        ),
        migrations.CreateModel(
            name="FavouriteCocktails",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("added_at", models.DateTimeField(auto_now_add=True)),
            ],
            options={
                "ordering": ["-added_at"],
            },
        ),
        migrations.CreateModel(
            name="Ingredient",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=100, unique=True)),
            ],
        ),
    ]