Rails.application.routes.draw do
  root 'homepage#index'

  namespace :api do
    namespace :v1 do
      resources :posts, except: :show
    end
  end

  get '*path', to: 'homepage#index', via: :all
end
