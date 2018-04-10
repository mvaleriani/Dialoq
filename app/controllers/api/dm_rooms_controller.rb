class Api::DmRoomsController < ApplicationController
  def index
    @dm_rooms = current_user.dm_rooms
    render 'api/dm_rooms/index'
  end

  def create
    
  end

  def destroy
  end
end
