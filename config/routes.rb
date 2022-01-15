Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
<<<<<<< HEAD
=======

>>>>>>> facd55694fe46dd5e1d6eb075352ac511eeee6fd

    resources :users, only: [:show, :update, :destroy]
    post "/users/image/:id", to: "users#image"

    get "/recipes", to: "recipes#index"
    get "/recipes/:id", to: "recipes#show"
    post "/recipes", to: "recipes#create"
    delete "/recipes/:id", to: "recipes#delete"
    resources :shopping_lists 

    resources :users, only: [:show, :update, :destroy]
    post "/users/image/:id", to: "users#image"
    resources :recipes, only: [:index, :show, :create, :destroy] do
      resources :ingredients
    end
    resources :shopping_lists
<<<<<<< HEAD
=======

>>>>>>> facd55694fe46dd5e1d6eb075352ac511eeee6fd
  end
end