# == Schema Information
#
# Table name: rooms
#
#  id           :integer          not null, primary key
#  name         :string           not null
#  chategory_id :integer
#  server_id    :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Room < ApplicationRecord
  belongs_to :server,
    foreign_key: :server_id,
    class_name: :Server

  belongs_to :chategory,
    foreign_key: :chategory_id,
    class_name: :Chategory,
    optional: true

end
