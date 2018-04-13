class Api::SearchesController < ApplicationController


  def index
    @found_servers = Server.all.select{|server| server.name.index(params[:search][:search_str]) == 0}
    @found_users = User.all.select{|user| user.username.index(params[:search][:search_str]) == 0}

    @search_results = @found_users[0..4] + @found_servers[0..4]
    render 'api/searches/index'
  end

  private
  def search_params
    params.require(:search).permit(:search_str)
  end
end
