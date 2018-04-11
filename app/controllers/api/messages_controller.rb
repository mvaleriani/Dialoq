class Api::MessagesController < ApplicationController
  def show
    @older_messages = Room.find(params[:room_id]).messages[params[:id]..(params[:id]-7)]
    render 'api/messages/show'
  end

  def index
    @recent_messages = Room.find(params[:room_id]).messages
    render 'api/messages/index'
  end

  private
  def user_params
    params.require(:message).permit(:room_id, :id)
  end
end
