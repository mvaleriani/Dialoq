require 'test_helper'

class Api::DmRoomsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_dm_rooms_index_url
    assert_response :success
  end

  test "should get create" do
    get api_dm_rooms_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_dm_rooms_destroy_url
    assert_response :success
  end

end
