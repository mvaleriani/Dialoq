class CreateServerMemberships < ActiveRecord::Migration[5.1]
  def change
    create_table :server_memberships do |t|
      t.integer :user_id, null: false
      t.integer :server_id, null: false

      t.timestamps
    end
  end
end
