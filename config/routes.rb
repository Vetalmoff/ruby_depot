Rails.application.routes.draw do

  get 'admin' => 'admin#index'
  controller :sessions do
    get 'login' => :new
    post 'login' => :create
    delete 'logout' => :destroy
  end

  resources :users
  resources :orders
  resources :carts
  root 'store#index', as: 'store_index'

  resources :products

  resources :line_items do
    put :decrement, as: :decrement
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
