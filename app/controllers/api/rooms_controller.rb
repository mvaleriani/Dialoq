class Api::RoomsController < ApplicationController
  def create
    user_servers = current_user.servers
    p user_servers
    current_server = user_servers.find(params[:server_id])
    p current_server
    @room = Room.new()
    @room.name = params[:room][:name]
    if params[:room][:chategory_name]
      chategories = Server.find(params[:server_id]).chategories
      chategory = chategories.select {|chat| chat.name == params[:room][:chategory_name]}
      if chategory.length === 1
        @room.chategory_id = chategory[0].id
      else
        newChat = Chategory.new()
        newChat.server_id = params[:server_id]
        newChat.name = params[:room][:chategory_id]
        newChat.save
        @room.chategory_id = newChat.id
      end
    end
    @room.server_id = params[:server_id]

    if (current_server && (@room.save))
      render "api/rooms/show"
    else
      render json: ['what'], status: 422
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
