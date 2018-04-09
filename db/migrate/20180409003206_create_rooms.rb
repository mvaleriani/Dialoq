class CreateRooms < ActiveRecord::Migration[5.1]
  def change
    create_table :rooms do |t|
      t.string :name, null: false
      t.integer :chategory_id
      t.integer :server_id, null: false

      t.timestamps
    end
  end
end
