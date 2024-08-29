from rest_framework import serializers

from barmeister.models import Ingredient, Cocktail


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ["id", "name", "unit"]


class CocktailSerializer(serializers.ModelSerializer):
    ingredients = IngredientSerializer(many=True)

    class Meta:
        model = Cocktail
        fields = [
            "id",
            "name",
            "ingredients",
            "quantity",
            "cocktail_type",
            "taste",
            "cocktail_base",
            "group",
            "how_to_make",
            "description",
            "preparation_time",
            "preparation_method",
            "difficulty",
            "photo",
            "author",
            "created_at",
            "updated_at"
        ]