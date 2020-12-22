Rails.application.routes.draw do

  devise_for :users

  root to: 'pages#app'

  get '/profile', to: 'pages#app'
  get '/matches', to: 'pages#app'

  # API routing
  namespace :api, defaults: { format: :json } do

    resources :likes, only: [:create]
    resources :dislikes, only: [:create]

    resources :users, only: [:index]
    get 'current', to: 'users#current'
  end
end
