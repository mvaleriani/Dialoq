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

  def update
    @user = User.find(params[:user][:id])

    if @user.id == current_user.id
      if params[:user][:image_url]
        @user.image_url = params[:user][:image_url]
        @user.save
      end
      if params[:user][:online_status]
        p 'lllloooooooooollllll\n\n'
        @user.online_status = params[:user][:online_status]
        @user.save
      end

      render "api/users/show"
    else
      render json: ["You can't patch another user"], status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:id, :server_id, :username, :password, :image_url, :online_status)
  end
end
