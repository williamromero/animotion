require 'test_helper'

class FrontpagesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get frontpages_home_url
    assert_response :success
  end

  test "should get contact" do
    get frontpages_contact_url
    assert_response :success
  end

end
