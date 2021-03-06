class RemoveEmailFromUsers < ActiveRecord::Migration[5.1]
  def change
    drop_table :users
    create_table :users do |t|
      t.string :username, NULL: false
      t.string :email, NULL: false, unique: true
      t.string :password_digest, NULL: false
      t.string :session_token, NULL: false
      t.string :image_url, NULL: false
      t.string :online_status, default: 'online'

      t.timestamps
    end
  end
end
