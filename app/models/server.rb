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
  
end
