class CreateDmRoomMemberships < ActiveRecord::Migration[5.1]
  def change
    create_table :dm_room_memberships do |t|
      t.integer :user_id, null: false
      t.integer :room_id, null: false

      t.timestamps
    end
  end
end
