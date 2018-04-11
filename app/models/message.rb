# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  user_id    :integer          not null
#  room_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ApplicationRecord
  belongs_to :room,
    foreign_key: :room_id,
    class_name: :Room

  # belongs_to :server,
  #   through: :room,
  #   source: :server

  after_create_commit do
  
    ChatMessageCreationEventBroadcastJob.perform_later(self)
  end

end
