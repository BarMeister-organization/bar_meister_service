from rest_framework import serializers
from rest_framework.relations import SlugRelatedField

from .models import (
    Ingredient,
    CocktailRecipe,
    Comment,
    FavouriteCocktails,
    CocktailIngredients,
    Rating,
    Tag,
)


class IngredientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ingredient
        fields = ["id", "name"]


class CocktailIngredientSerializer(serializers.ModelSerializer):
    ingredient_name = serializers.CharField(source="ingredient.name")

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


class TagListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ["id", "photo", "name"]


class CocktailSerializer(serializers.ModelSerializer):
    ingredients = CocktailIngredientSerializer(source="cocktail_ingredients", many=True)
    created_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S", read_only=True)
    author = serializers.CharField(source="author.username", read_only=True)
    comments = CommentListSerializer(many=True, read_only=True)
    average_rating = serializers.SerializerMethodField()
    tags = SlugRelatedField(
        many=True,
        queryset=Tag.objects.all(),
        slug_field="name",
    )

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
            "tags",
            "how_to_make",
            "description",
            "preparation_time",
            "preparation_method",
            "difficulty",
            "photo",
            "average_rating",
            "author",
            "created_at",
            "comments",
        ]

    def get_average_rating(self, obj) -> int:
        ratings = Rating.objects.filter(cocktail=obj)
        if len(ratings) > 0:
            sum_of_stars = sum(rating.stars for rating in ratings)
            return round(sum_of_stars / len(ratings))
        return 0

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


class CocktailListSerializer(CocktailSerializer):
    class Meta:
        model = CocktailRecipe
        fields = ["id", "name", "photo", "cocktail_type"]


class FavouriteCocktailsSerializer(serializers.ModelSerializer):
    added_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S", read_only=True)

    class Meta:
        model = FavouriteCocktails
        fields = ["id", "user", "cocktail", "added_at"]


class FavouriteCocktailsListSerializer(FavouriteCocktailsSerializer):
    cocktail = serializers.CharField(source="cocktail.name", read_only=True)

    class Meta:
        model = FavouriteCocktails
        fields = ["id", "cocktail", "added_at"]


class RatingSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S", read_only=True)
    stars = serializers.ChoiceField(choices=Rating.StarChoices.choices)
    user = serializers.CharField(read_only=True)
    cocktail = serializers.CharField(read_only=True)

    class Meta:
        model = Rating
        fields = ["id", "user", "cocktail", "stars", "created_at"]
