class Api::IngredientsController < ApplicationController
  before_action :set_ingredient, only: [:show, :update, :destroy]
  before_action :set_recipe
  
  def index
    render json: @recipe.ingredients
  end

  def show
    render json: @ingredient
  end

  def create
    @ingredient = @recipe.ingredients.new(ingredient_params)
    if (@ingredient.save)
      render json: @ingredient
    else
      render json: { errors: @ingredient.errors }, status: 422
    end
  end

  def update
    if (@ingredient.update(ingredient_params))
      render json: @ingredient
    else
      render json: { errors: @ingredient.errors }, status: 422
    end
  end

  def destroy
    render json: @ingredient.destroy
  end

  private

  def set_ingredient
    @ingredient = Ingredient.find(params[:id])
  end

  def set_recipe
    @recipe = Recipe.find(params[:recipe_id])
  end

  def ingredient_params
    params.require(:ingredient).permit(:name, :recipe_id, :shopping_list_id)
  end
end

