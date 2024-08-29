from rest_framework import viewsets
from barmeister.models import CocktailRecipe, Ingredient
from barmeister.serializers import CocktailSerializer, IngredientSerializer


class CocktailRecipeViewSet(viewsets.ModelViewSet):
    queryset = CocktailRecipe.objects.all()
    serializer_class = CocktailSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class IngredientsViewSet(viewsets.ModelViewSet):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer
