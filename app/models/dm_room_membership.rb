# == Schema Information
#
# Table name: dm_room_memberships
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  room_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class DmRoomMembership < ApplicationRecord
  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :room,
    foreign_key: :room_id,
    class_name: :Room
end
