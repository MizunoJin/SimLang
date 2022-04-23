# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :questions, only: %i[index show]
  get '/translate', to: 'translations#translate'
end
