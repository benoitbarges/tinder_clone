Rails.application.routes.draw do
  resources :messages
  resources :user_matches
  resources :matches
  resources :likes


  devise_for :users

  root to: 'pages#home'

  # API routing
  namespace :api, defaults: { format: :json } do
    resources :users
    get 'current', to: 'users#current'
  end
end
