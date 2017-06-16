class RemoveHousesHouseIdColumn < ActiveRecord::Migration[5.0]
  def change
    remove_column :houses, :house_id
  end
end
