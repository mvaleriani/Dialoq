class MakeUsernamesUnique < ActiveRecord::Migration[5.1]
  def change
    drop_table :users
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :image_url, null: false
      t.string :online_status, default: 'online'

      t.timestamps
    end
  end
end
