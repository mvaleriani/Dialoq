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

require 'test_helper'

class DmRoomMembershipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
