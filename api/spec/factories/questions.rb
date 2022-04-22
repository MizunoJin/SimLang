# frozen_string_literal: true

FactoryBot.define do
  factory :question do
    title { 'sample question' }
    body { 'What is this question?' }
  end
end
