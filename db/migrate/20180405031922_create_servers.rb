class CreateServers < ActiveRecord::Migration[5.1]
  def change
    create_table :servers do |t|
      t.string :name, null: false
      t.integer :admin_id
      t.string :icon_url, default:'char'
      t.boolean :dm_status, default:false

      t.timestamps
    end
  end
end
