# == Schema Information
#
# Table name: servers
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  admin_id   :integer
#  icon_url   :string           default("char")
#  dm_status  :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Server < ApplicationRecord
  validates :name, uniqueness: true, presence: true
  validates :icon_url, presence: true

  has_many :memberships,
    foreign_key: :server_id,
    class_name: :ServerMembership

  has_many :members,
    through: :memberships,
    source: :user

  has_many :chategories,
    foreign_key: :server_id,
    class_name: :Chategory

  has_many :rooms,
    foreign_key: :server_id,
    class_name: :Room


end
