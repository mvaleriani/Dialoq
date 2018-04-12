class Api::RoomsController < ApplicationController
  def create
    @room = Room.new(room_params)
    if @room.save
      render "api/rooms/show"
    else
      render json: @room.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  def index
    @server_rooms = Server.find(params[:server_id]).rooms
    render "api/rooms/index"
  end

  private
  def room_params
    params.require(:room).permit(:user_id, :server_id, :name, :chategory_name)
  end
end
