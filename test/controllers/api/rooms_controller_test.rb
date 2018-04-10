require 'test_helper'

class Api::RoomsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_rooms_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_rooms_destroy_url
    assert_response :success
  end

end
