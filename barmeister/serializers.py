from rest_framework import serializers

from barmeister.models import Ingredient, CocktailRecipe


class IngredientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ingredient
        fields = ["id", "name", "unit", "quantity"]


class CocktailSerializer(serializers.ModelSerializer):
    ingredients = serializers.SlugRelatedField(
        many=True,
        slug_field="name",
        queryset=Ingredient.objects.all(),
    )
    created_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
    updated_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
    author = serializers.CharField(source="author.username", read_only=True)

    class Meta:
        model = CocktailRecipe
        fields = [
            "id",
            "name",
            "ingredients",
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
            "updated_at",
        ]


class CocktailImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CocktailRecipe
        fields = ["id", "photo"]


class CocktailListSerialize(CocktailSerializer):
    class Meta:
        model = CocktailRecipe
        fields = ["id", "name", "photo"]
