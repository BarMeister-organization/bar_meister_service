from datetime import datetime

from rest_framework.decorators import action
from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from barmeister.models import CocktailRecipe, Ingredient
from barmeister.permissions import IsOwnerOrReadOnly, IsOwnerOrReadOnlyAuthor
from barmeister.serializers import (
    CocktailSerializer,
    IngredientSerializer,
    CocktailImageSerializer,
    CocktailListSerialize,
)


class CocktailRecipeViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnlyAuthor]
    queryset = (
        CocktailRecipe.objects.all()
        .select_related("author")
        .prefetch_related("ingredients")
    )

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    @action(
        methods=["POST"],
        detail=True,
        permission_classes=[IsAuthenticated],
        url_path="upload-image",
    )
    def upload_image(self, request, pk=None):
        cocktail_recipe = self.get_object()
        serializer = self.get_serializer(cocktail_recipe, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get_serializer_class(self):
        if self.action == "upload_image":
            return CocktailImageSerializer
        if self.action == "list":
            return CocktailListSerialize
        return CocktailSerializer


class IngredientsViewSet(viewsets.ModelViewSet):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer
