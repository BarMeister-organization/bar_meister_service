from rest_framework import serializers

from barmeister.models import Ingredient, CocktailRecipe, Comment


class IngredientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ingredient
        fields = ["id", "name", "unit", "quantity"]


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
    ingredients = serializers.SlugRelatedField(
        many=True,
        slug_field="name",
        queryset=Ingredient.objects.all(),
    )
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


class CocktailImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CocktailRecipe
        fields = ["id", "photo"]


class CocktailListSerialize(CocktailSerializer):
    class Meta:
        model = CocktailRecipe
        fields = ["id", "name", "photo"]
