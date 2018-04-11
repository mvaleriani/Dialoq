Rails.application.routes.draw do


  mount ActionCable.server => '/cable'

  namespace :api, defaults: {format: :json} do
    resources :friendships, only: [:create, :destroy, :index]

    resources :server_memberships, only: [:create, :destroy, :index]

    resources :users, only: [:create]

    resources :dm_rooms, only: [:create, :destroy, :index]

    resource :session, only: [:create, :destroy]

    resources :rooms, only: [:show] do
      resources :messages, only: [:show, :index]
    end

    resources :servers, only: [:create, :destroy] do
      resources :users, only: [:index]
      resources :rooms, only: [:create, :destroy, :index]
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"
end
