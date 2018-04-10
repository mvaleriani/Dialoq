class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save!
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @server = current_user.servers.find(params[:server_id]) 
    @server_members = @server.members
    render "api/users/index"
  end

  private

  def user_params
    params.require(:user).permit(:server_id, :username, :password, :email, :image_url)
  end
end
