class AlterRoomsTable < ActiveRecord::Migration[5.1]
  def change
    drop_table :rooms
    create_table :rooms do |t|
      t.string :name, null: false
      t.integer :chategory_id
      t.integer :server_id

      t.timestamps
    end
  end
end
