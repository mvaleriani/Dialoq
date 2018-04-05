Rails.application.routes.draw do

  namespace :api do
    get 'servers/create'
  end

  namespace :api do
    get 'servers/delete'
  end

  namespace :api do
    get 'servers/index'
  end

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"
end
