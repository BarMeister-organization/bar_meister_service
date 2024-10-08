# Generated by Django 5.1 on 2024-09-17 06:41

import barmeister.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("barmeister", "0005_tag_cocktailrecipe_tags"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="tag",
            options={"ordering": ["name"]},
        ),
        migrations.AlterField(
            model_name="cocktailrecipe",
            name="tags",
            field=models.ManyToManyField(blank=True, to="barmeister.tag"),
        ),
        migrations.AlterField(
            model_name="tag",
            name="photo",
            field=models.FileField(
                blank=True,
                null=True,
                upload_to=barmeister.models.tag_ingredient_file_path,
            ),
        ),
    ]
