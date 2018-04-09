# == Schema Information
#
# Table name: chategories
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  server_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Chategory < ApplicationRecord
  belongs_to :server,
    foreign_key: :server_id,
    class_name: :Server

  has_many :rooms,
    foreign_key: :chategory_id,
    class_name: :Room
end
