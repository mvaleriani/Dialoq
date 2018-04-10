class Api::ServersController < ApplicationController
  def create
    @server = Server.new(server_params)
    @server.admin_id = current_user.id
    
    if @server.save!
      #create ServerMembership with current_user.id and @server.id
      @membership = ServerMembership.new()
      @membership.user_id = current_user.id
      @membership.server_id = @server.id
      @membership.save
      render "api/servers/show"
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def delete

  end

  # def index
  # end

  private
  def server_params
    params.require(:server).permit(:server_id, :name, :admin_id, :icon_url, :dm_status)
  end
end
