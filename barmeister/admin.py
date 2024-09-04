from django.contrib import admin
from barmeister.models import (
    Ingredient,
    CocktailRecipe,
    Comment,
    FavouriteCocktails,
    CocktailIngredients,
    Rating,
)


admin.site.register(Ingredient)
admin.site.register(Comment)
admin.site.register(FavouriteCocktails)
admin.site.register(Rating)


class CocktailIngredientsInline(admin.TabularInline):
    model = CocktailIngredients
    extra = 0


@admin.register(CocktailRecipe)
class CocktailRecipeAdmin(admin.ModelAdmin):
    inlines = [CocktailIngredientsInline]
