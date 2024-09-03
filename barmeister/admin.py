from django.contrib import admin
from barmeister.models import (
    Ingredient,
    CocktailRecipe,
    Comment,
    FavouriteCocktails,
    CocktailIngredients,
)


admin.site.register(Ingredient)
admin.site.register(Comment)
admin.site.register(FavouriteCocktails)


class CocktailIngredientsInline(admin.TabularInline):
    model = CocktailIngredients
    extra = 1  # Додаткові пусті поля для створення нових записів


@admin.register(CocktailRecipe)
class CocktailRecipeAdmin(admin.ModelAdmin):
    inlines = [CocktailIngredientsInline]
