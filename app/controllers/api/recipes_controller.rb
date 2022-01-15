class Api::RecipesController < ApplicationController
  # before_action :authenticate_user!
  before_action :set_recipe, only: [:show, :update, :destroy]

    def index
        render json: Recipe.all
    end

    def show
        render json: @recipe
    end

    def create
        @recipe = Recipe.new(recipe_params)
        if(@recipe.save)
            render json: @recipe 
        else
            render json: {errors: @recipe.errors}, status: 422
        end
    end

    def destroy
        render json: @recipe.destroy
    end

    private

    def recipe_params
        params.require(:recipe).permit(:category, :name, :instruction, :image, :user_id)
    end

    def set_recipe
        @recipe = Recipe.find(params[:id])
    end

end
