Rails.application.routes.draw do
  root 'api/v1/homepage#index'

  namespace :api do
    namespace :v1 do
      resources :homepage, except: :show
    end
  end

  get '*path', to: 'homepage#index', via: :all
end
