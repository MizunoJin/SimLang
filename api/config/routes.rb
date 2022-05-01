# frozen_string_literal: true

Rails.application.routes.draw do
  resources :categories, only: %i[index show]
  resources :questions, only: %i[index show]
  get '/fetch_answer', to: 'answers#fetch_answer'
end
