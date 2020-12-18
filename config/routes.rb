Rails.application.routes.draw do

  devise_for :users

  root to: 'pages#app'

  get '/profile', to: 'pages#app'

  # API routing
  namespace :api, defaults: { format: :json } do

    resources :messages
    resources :user_matches
    resources :matches
    resources :likes, only: [:create]

    resources :users, only: [:index]
    get 'current', to: 'users#current'
  end
end
