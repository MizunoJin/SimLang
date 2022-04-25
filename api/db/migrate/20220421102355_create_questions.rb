# frozen_string_literal: true

class CreateQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :questions do |t|
      t.string :title, limit: 100, null: false, index: true
      t.text :body, limit: 1000, null: false
      t.references :category, foreign_key: true

      t.timestamps
    end
  end
end
