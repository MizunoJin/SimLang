# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users,
             controllers: {
               sessions: 'users/sessions',
               registrations: 'users/registrations'
             }
  get '/member-data', to: 'members#show'
  resources :categories, only: %i[index show]
  resources :questions, only: %i[index show]
  get '/fetch_answer', to: 'answers#fetch_answer'
end
