from django.urls import path, include
from rest_framework import routers

from barmeister.views import CocktailRecipeViewSet, IngredientsViewSet

router = routers.DefaultRouter()

router.register("cocktails", CocktailRecipeViewSet)
router.register("ingredients", IngredientsViewSet)

urlpatterns = [
    path("", include(router.urls)),
]


app_name = "barmeister"
