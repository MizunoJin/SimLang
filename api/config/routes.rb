# frozen_string_literal: true

Rails.application.routes.draw do
  resources :categories, only: %i[index show]
  resources :questions, only: %i[index show]
  get '/translate', to: 'translations#translate'
end
