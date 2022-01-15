Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do

    resources :users, only: [:show, :update, :destroy]
    post "/users/image/:id", to: "users#image"

    get "/recipes", to: "recipes#index"
    get "/recipes/:id", to: "recipes#show"
    post "/recipes", to: "recipes#create"
    delete "/recipes/:id", to: "recipes#delete"
    resources :shopping_lists 

    resources :users, only: [:show, :update, :destroy]
    post "/users/image/:id", to: "users#image"


    get "/recipes", to: "recipes#index"
    get "/recipes/:id", to: "recipes#show"
    post "/recipes", to: "recipes#create"
    delete "/recipes/:id", to: "recipes#delete"
    resources :shopping_lists 

    resources :recipes, only: [:index, :show, :create, :destroy] do
      resources :ingredients
    end
    resources :shopping_lists

  end
end