Rails.application.routes.draw do
  
  devise_for :users, controllers: { registrations: 'registrations',
                                    confirmations: 'confirmations',
                                    sessions: 'sessions',
                                    passwords: 'passwords',
                                    unlocks: 'unlocks' }

  root 'frontpages#home'

  namespace :frontpages, path: '' do
    # get 'contact', as: 'contact'
  end

  get 'contact', to: 'frontpages#contact'
  # post 'contact', to: 'frontpages#send_contact_mail'  

  namespace :dashboard do
    resources :posts
  end

  resource :dashboard do
    get '', to: 'dashboard#index'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
