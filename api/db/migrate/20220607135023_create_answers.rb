class CreateAnswers < ActiveRecord::Migration[6.0]
  def change
    create_table :answers do |t|
      t.text :japanese_text, null: false
      t.text :foreign_text, null: false
      t.text :translation, null: false
      t.references :questions, foreign_key: true

      t.timestamps
    end
  end
end
