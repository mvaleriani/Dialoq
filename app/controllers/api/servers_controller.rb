class Api::ServersController < ApplicationController
  def create
    @server = Server.new(server_params)

    if @server.save!
      render "api/servers/show"
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def delete
  end

  def index
  end

  private
  def server_params
    params.require(:server).permit(:serverId, :name, :adminId, :iconUrl, :dmStatus)
  end
end
