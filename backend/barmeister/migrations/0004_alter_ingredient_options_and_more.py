# Generated by Django 5.1 on 2024-09-06 12:48

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("barmeister", "0003_rating"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="ingredient",
            options={"ordering": ["name"]},
        ),
        migrations.AlterUniqueTogether(
            name="rating",
            unique_together={("user", "cocktail")},
        ),
        migrations.AlterField(
            model_name="rating",
            name="stars",
            field=models.PositiveIntegerField(
                choices=[
                    (1, "One"),
                    (2, "Two"),
                    (3, "Three"),
                    (4, "Four"),
                    (5, "Five"),
                ],
                default=0,
            ),
        ),
    ]
