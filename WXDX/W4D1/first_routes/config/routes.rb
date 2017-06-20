Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :users
  get 'users' => 'users#index'
  post 'users' => 'users#create'
  get 'users/new' => 'users#new'
  get 'users/:id/edit' => 'users#edit'
  get 'users/:id' => 'users#show'
  patch 'users/:id' => 'users#update'
  put 'users/:id' => 'users#update'
  delete 'users/:id' => 'users#destroy'
end
