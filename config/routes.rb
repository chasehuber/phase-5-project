Rails.application.routes.draw do
  mount ActionCable.server => '/cable'

  resources :chatrooms, except: [:edit]
  resources :messages, except: [:index, :edit]
  resources :users

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


  get '/find-user/:username', to: 'users#find_user_by_name'
  get '/me', to: 'users#show_current_user'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/chatrooms/:id/messages', to: 'chatrooms#load_history'
end
