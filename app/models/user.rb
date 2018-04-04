# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string
#  email           :string
#  password_digest :string
#  session_token   :string
#  image_url       :string
#  online_status   :string           default("online")
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :password_digest, presence: true
  validates :password, length: { minimum: 7 }, allow_nil: true

  after_initialize :ensure_session_token
  after_initialize :ensure_image_url

  attr_reader :password

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
    save!
  end

  def reset_session_token!
    generate_unique_session_token
    save!
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
      self.image_url = 'defaultDoggo.png'
      save!
    end
  end
end
