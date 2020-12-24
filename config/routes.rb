Rails.application.routes.draw do

  devise_for :users

  root to: 'pages#app'

  get '/profile', to: 'pages#app'
  get '/profile/:id', to: 'pages#app'
  get '/match-list', to: 'pages#app'
  get '/matches/:id', to: 'pages#app'
  get '/chat', to: 'pages#app'

  # API routing
  namespace :api, defaults: { format: :json } do

    resources :likes, only: :create

    resources :dislikes, only: :create

    resources :matches, only: [:create, :show]

    resources :users, only: :index
    get 'current', to: 'users#current'
  end
end
