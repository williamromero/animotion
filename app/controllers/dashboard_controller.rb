class DashboardController < ApplicationController
  # attr_accessor :profile
  before_action :authenticate_user!

  def index
    # @posts = Post.all
    # @categories = Category.all
    # @leads = Lead.all
    # @users = current_user
    # @profiles = current_user.profile
    # @profile_id = current_user.profile.id
  end

end
