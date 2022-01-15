class ShoppingList < ApplicationRecord
  belongs_to :user
  has_many :ingredients
  has_many :recipes, through: :ingredients

  # SELECT shopping_lists.id AS list_id, shopping_lists.user_id AS list_user_id, recipes.user_id AS recipe_user_id, recipes.id AS recipe_id, ingredients.name AS ingredient, ingredients.recipe_id AS ingredient_recipe from SHOPPING_LISTS
  # INNER JOIN recipes ON shopping_lists.user_id = recipes.user_id
  # INNER JOIN ingredients ON recipes.id = ingredients.recipe_id

def self.ingredients(id)
  select("shopping_lists.id AS list_id, shopping_lists.user_id AS list_user_id, recipes.user_id AS recipe_user_id, recipes.id AS recipe_id, ingredients.name AS ingredient, ingredients.recipe_id AS ingredient_recipe")
  .joins("INNER JOIN users AS u ON showcases.user_id = u.id")
  .joins("INNER JOIN ingredients ON recipes.id = ingredients.recipe_id")
end
