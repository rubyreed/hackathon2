class ChangeColumnNull < ActiveRecord::Migration[6.1]
  def change
    change_column_null :ingredients, :shopping_list_id, true
  end
end
