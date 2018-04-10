require 'test_helper'

class Api::ServerMembershipsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_server_memberships_create_url
    assert_response :success
  end

  test "should get index" do
    get api_server_memberships_index_url
    assert_response :success
  end

  test "should get destroy" do
    get api_server_memberships_destroy_url
    assert_response :success
  end

end
