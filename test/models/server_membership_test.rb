# == Schema Information
#
# Table name: server_memberships
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  server_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class ServerMembershipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
