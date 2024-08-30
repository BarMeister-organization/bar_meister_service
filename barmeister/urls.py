from django.urls import path, include
from rest_framework import routers

from barmeister.views import CocktailRecipeViewSet, IngredientsViewSet, CommentViewSet

router = routers.DefaultRouter()

router.register("cocktails", CocktailRecipeViewSet)
router.register("ingredients", IngredientsViewSet)
router.register("comments", CommentViewSet)

urlpatterns = [
    path("", include(router.urls)),
]


app_name = "barmeister"
