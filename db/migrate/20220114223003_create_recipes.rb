class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.text :instruction
      t.string :category
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
