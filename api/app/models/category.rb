# frozen_string_literal: true

class Category < ApplicationRecord
  validates :title, presence: true, length: { maximum: 100 }
  validates :description, presence: true, length: { maximum: 1000 }

  has_many :questions
end
