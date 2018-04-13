class Api::ServerMembershipsController < ApplicationController
  def create
    p params
    @membership = ServerMembership.new()
    @membership.server_id = params[:server_membership][:server_id]
    @membership.user_id = current_user.id

    if @membership.save
      @server = Server.find(@membership.server_id)
      render "api/server_memberships/show"
    else
      render json: @membership.errors.full_messages, status: 422
    end
  end

  def index
    @user_servers = current_user.servers
    render "api/server_memberships/index"
  end

  def destroy
    @old_membership = current_user.server_memberships.find_by(server_id: params[:server_id])
    @server = Server.find(@old_membership.server_id)

    if @old_membership.destroy
      render "api/server_membership/show"
    else
      render json: @old_membership.errors.full_messages, status: 422
    end
  end

  private
  def membership_params
    params.require(:server_membership).permit(:server_id)
  end
end
