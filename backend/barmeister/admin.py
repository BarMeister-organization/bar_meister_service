from django.contrib import admin
from .models import (
    Ingredient,
    CocktailRecipe,
    Comment,
    FavouriteCocktails,
    CocktailIngredients,
    Rating,
    Tag,
)


admin.site.register(Ingredient)
admin.site.register(Comment)
admin.site.register(FavouriteCocktails)
admin.site.register(Rating)
admin.site.register(Tag)


class CocktailIngredientsInline(admin.TabularInline):
    model = CocktailIngredients
    extra = 0


@admin.register(CocktailRecipe)
class CocktailRecipeAdmin(admin.ModelAdmin):
    inlines = [CocktailIngredientsInline]
