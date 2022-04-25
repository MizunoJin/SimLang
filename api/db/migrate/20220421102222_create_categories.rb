# frozen_string_literal: true

class CreateCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :categories do |t|
      t.string :title, limit: 100, null: false, index: true
      t.text :description, limit: 1000, null: false
      t.boolean :is_common, null: false, default: false

      t.timestamps
    end
  end
end
