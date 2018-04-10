class Api::FriendshipsController < ApplicationController
  def create
    @friendship = Frienship.new(friendship_params)
    @friendship.user_id = current_user.id

    if @friendship.save
      @other_friendship = Frienship.new()
      @other_friendship.user_id = params[:friendship][:friend_id]
      @other_friendship.friend_id = current_user.id
      @other_friendship.save
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
    params.require(:friendship).permit(:friend_id)
  end
end
