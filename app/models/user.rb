# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  image_url       :string           not null
#  online_status   :string           default("online")
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, uniqueness: true, presence: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 7 }, allow_nil: true

  after_initialize :ensure_session_token
  after_initialize :ensure_image_url

  attr_reader :password

  has_many :server_memberships,
    foreign_key: :user_id,
    class_name: :ServerMembership

  has_many :servers,
    through: :server_memberships,
    source: :server

  has_many :frienships,
    foreign_key: :user_id,
    class_name: :Frienship

  has_many :friends,
    through: :frienships,
    source: :friend

  has_many :dm_room_memberships,
    foreign_key: :user_id,
    class_name: :DmRoomMembership

  has_many :dm_rooms,
    through: :dm_room_memberships,
    source: :room

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def update_online_status(status)
    self.online_status = status
    save
  end

  def reset_session_token!
    generate_unique_session_token
    save
    self.session_token
  end

  private
  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token

    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

  def ensure_image_url
    unless self.image_url
      self.image_url = 'https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/512x512/plain/user.png'
      save!
    end
  end
end
