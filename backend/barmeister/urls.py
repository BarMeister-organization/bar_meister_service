from django.urls import path, include
from rest_framework import routers

from .views import (
    CocktailRecipeViewSet,
    IngredientsViewSet,
    CommentViewSet,
    FavouriteCocktailsViewSet,
    MyCocktailsViewSet,
)

router = routers.DefaultRouter()

router.register("cocktails", CocktailRecipeViewSet, basename="cocktails")
router.register("ingredients", IngredientsViewSet, basename="ingredients")
router.register("comments", CommentViewSet, basename="comments")
router.register("favourites", FavouriteCocktailsViewSet, basename="favourites")
router.register("my_cocktails", MyCocktailsViewSet, basename="my_cocktails")

urlpatterns = [
    path("", include(router.urls)),
]


app_name = "barmeister"
