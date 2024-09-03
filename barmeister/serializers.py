from rest_framework import serializers

from barmeister.models import (
    Ingredient,
    CocktailRecipe,
    Comment,
    FavouriteCocktails,
    CocktailIngredients,
)


class IngredientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ingredient
        fields = ["id", "name"]


class CocktailIngredientSerializer(serializers.ModelSerializer):
    ingredient_name = serializers.CharField(source="ingredient.name", read_only=True)

    class Meta:
        model = CocktailIngredients
        fields = ["ingredient_name", "unit", "quantity"]


class CommentSerializer(serializers.ModelSerializer):
    commented_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S", read_only=True)
    author = serializers.CharField(read_only=True)

    class Meta:
        model = Comment
        fields = ["id", "author", "cocktail", "content", "commented_at"]


class CommentListSerializer(CommentSerializer):
    author = serializers.CharField(source="author.username", read_only=True)
    cocktail = serializers.CharField(source="cocktail.name", read_only=True)


class CocktailSerializer(serializers.ModelSerializer):
    ingredients = CocktailIngredientSerializer(source="cocktail_ingredients", many=True)
    created_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S", read_only=True)
    author = serializers.CharField(source="author.username", read_only=True)
    comments = CommentListSerializer(many=True, read_only=True)

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
            "comments",
        ]

    def create(self, validated_data):
        ingredients_data = validated_data.pop("ingredients")
        cocktail = CocktailRecipe.objects.create(**validated_data)

        for ingredient_data in ingredients_data:
            ingredient_name = ingredient_data["ingredient"]["name"]

            ingredient, created = Ingredient.objects.get_or_create(name=ingredient_name)

            CocktailIngredients.objects.create(
                cocktail=cocktail,
                ingredient=ingredient,
                unit=ingredient_data["unit"],
                quantity=ingredient_data["quantity"],
            )
        return cocktail


class CocktailImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CocktailRecipe
        fields = ["id", "photo"]


class CocktailListSerialize(CocktailSerializer):
    class Meta:
        model = CocktailRecipe
        fields = ["id", "name", "photo"]


class FavouriteCocktailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavouriteCocktails
        fields = ["id", "user", "cocktail", "added_at"]
