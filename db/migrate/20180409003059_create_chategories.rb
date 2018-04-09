class CreateChategories < ActiveRecord::Migration[5.1]
  def change
    create_table :chategories do |t|
      t.string :name, null: false
      t.integer :server_id, null: false

      t.timestamps
    end
  end
end
