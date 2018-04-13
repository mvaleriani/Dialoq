class Api::FriendshipsController < ApplicationController
  def create
    @friendship = Frienship.new()
    @friendship.user_id = current_user.id
    @friendship.friend_id = params[:friendship][:user_id]

    if @friendship.save
      @other_friendship = Frienship.new()
      @other_friendship.user_id = params[:friendship][:user_id]
      @other_friendship.friend_id = current_user.id
      @other_friendship.save
      @friend = User.find(params[:friendship][:user_id])
      render 'api/friendships/show'
    else
      render json: @friendship.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  def index
    @friends = current_user.friends
    render 'api/frienships/index'
  end

  private
  def friendship_params
    params.require(:friendship).permit(:user_id)
  end
end
