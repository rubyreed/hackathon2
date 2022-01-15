class Api::ShoppingListsController < ApplicationController
    before_action :authenticate_user!
    before_action :set_shopping_list, only: [:show, :update, :destroy]

  def index
      render json: current_user.shopping_lists
  end

  def show
      render json: @shopping_list
  end

  def create
      @shopping_list = current_user.shopping_lists.new(shopping_list_params)
      if(@shopping_list.save)
          render json: @shopping_list 
      else
          render json: {errors: @shopping_list.errors}, status: 422
      end
  end

  def destroy
      render json: @shopping_list.destroy
  end

  private

  def shopping_list_params
      params.require(:shopping_list).permit(:name, :user_id)
  end

  def set_shopping_list
      @shopping_list = Shopping_list.find(params[:id])
  end
  
end