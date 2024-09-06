from rest_framework.decorators import action
from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ReadOnlyModelViewSet

from .models import (
    CocktailRecipe,
    Ingredient,
    Comment,
    FavouriteCocktails,
    Rating,
)
from .permissions import IsOwnerOrReadOnlyAuthor
from .serializers import (
    CocktailSerializer,
    IngredientSerializer,
    CocktailImageSerializer,
    CocktailListSerializer,
    CommentSerializer,
    CommentListSerializer,
    FavouriteCocktailsListSerializer,
    RatingSerializer,
)


class CocktailRecipeViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnlyAuthor]
    queryset = (
        CocktailRecipe.objects.all()
        .select_related("author")
        .prefetch_related("cocktail_ingredients__ingredient", "comments__author")
    )

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    @action(
        methods=["POST"],
        detail=True,
        permission_classes=[IsAuthenticated, IsOwnerOrReadOnlyAuthor],
        url_path="upload-image",
    )
    def upload_image(self, request, pk=None):
        cocktail_recipe = self.get_object()
        serializer = self.get_serializer(cocktail_recipe, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(
        methods=["POST", "GET"],
        detail=True,
        permission_classes=[IsAuthenticated],
        url_path="add_to_favourites",
    )
    def add_to_favourites(self, request, pk=None):
        cocktail = self.get_object()
        user = request.user

        if cocktail.author == user:
            return Response(
                {"error": "You cannot add your own cocktail to favourites."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if FavouriteCocktails.objects.filter(user=user, cocktail=cocktail).exists():
            return Response({"You have already added this cocktail in favourites"})

        favourite_cocktail = FavouriteCocktails.objects.create(
            user=user, cocktail=cocktail
        )
        serializer = FavouriteCocktailsListSerializer(favourite_cocktail)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @action(
        methods=["POST", "GET"],
        detail=True,
        permission_classes=[IsAuthenticated],
        url_path="remove_from_favourites",
    )
    def remove_from_favourites(self, request, pk=None):
        cocktail = self.get_object()
        user = request.user
        favourite_cocktail = FavouriteCocktails.objects.filter(
            user=user, cocktail=cocktail
        )

        if cocktail.author == user:
            return Response(
                {"error": "You cannot remove your own cocktail from favourites."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if favourite_cocktail.exists():
            favourite_cocktail.delete()
            return Response({"You remove this cocktail from favourites"})
        return Response({"You haven't added this cocktail in favourites"})

    @action(
        methods=["POST", "GET"],
        detail=True,
        permission_classes=[IsAuthenticated],
        url_path="rate",
    )
    def rate(self, request, pk=None):
        cocktail = self.get_object()
        user = request.user

        if cocktail.author == user:
            return Response(
                {"error": "You cannot rate your own cocktail."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if Rating.objects.filter(user=user, cocktail=cocktail).exists():
            return Response(
                {"error": "You have already rated this cocktail."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        serializer = RatingSerializer(
            data=request.data, context={"user": user, "cocktail": cocktail}
        )

        if serializer.is_valid():
            serializer.save(user=user, cocktail=cocktail)
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get_serializer_class(self):
        if self.action == "upload_image":
            return CocktailImageSerializer
        if self.action == "list":
            return CocktailListSerializer
        if self.action == "rate":
            return RatingSerializer
        return CocktailSerializer


class IngredientsViewSet(viewsets.ModelViewSet):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all().select_related("author", "cocktail")
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnlyAuthor]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    def get_serializer_class(self):
        if self.action in ("list", "retrieve"):
            return CommentListSerializer
        return CommentSerializer


class FavouriteCocktailsViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = FavouriteCocktailsListSerializer

    def get_queryset(self):
        user = self.request.user
        return FavouriteCocktails.objects.filter(user=user)

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        if not queryset.exists():
            return Response(
                {"error": "You have no favourite cocktails."},
                status=status.HTTP_404_NOT_FOUND,
            )
        return super().list(request, *args, **kwargs)


class MyCocktailsViewSet(ReadOnlyModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = CocktailListSerializer

    def get_queryset(self):
        author = self.request.user
        return CocktailRecipe.objects.filter(author=author)

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        if not queryset.exists():
            return Response(
                {"error": "You haven't added your own cocktails yet."},
                status=status.HTTP_404_NOT_FOUND,
            )
        return super().list(request, *args, **kwargs)
