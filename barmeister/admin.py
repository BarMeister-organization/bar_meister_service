from django.contrib import admin
from barmeister.models import Ingredient, CocktailRecipe, Comment, FavouriteCocktails


admin.site.register(Ingredient)
admin.site.register(CocktailRecipe)
admin.site.register(Comment)
admin.site.register(FavouriteCocktails)
