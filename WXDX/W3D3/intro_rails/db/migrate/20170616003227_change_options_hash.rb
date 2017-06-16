class ChangeOptionsHash < ActiveRecord::Migration[5.0]
  def change
    change_column :people, :name, :string, null: false
    change_column :people, :age, :integer, null: false
    change_column :people, :house_id, :integer, null: false
    change_column :houses, :address, :string, null: false
    change_column :houses, :house_id, :integer, null: false
  end
end
