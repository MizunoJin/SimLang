class CreateQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :questions do |t|
      t.string :title, limit: 100, null: false, index: true
      t.text :body, null: false

      t.timestamps
    end
  end
end
