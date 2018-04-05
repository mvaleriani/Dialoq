require 'test_helper'

class Api::ServersControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_servers_create_url
    assert_response :success
  end

  test "should get delete" do
    get api_servers_delete_url
    assert_response :success
  end

  test "should get index" do
    get api_servers_index_url
    assert_response :success
  end

end
