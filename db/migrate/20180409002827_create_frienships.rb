class CreateFrienships < ActiveRecord::Migration[5.1]
  def change
    create_table :frienships do |t|
      t.integer :user_id, null: false
      t.integer :friend_id, null: false

      t.timestamps
    end
  end
end
