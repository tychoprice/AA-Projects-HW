class UsersController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    # if @user.save
      # render :show
    # else
      #redirect_to user_url?
  end

  private

  def user_params
    params.require(:user)
      .permit(:username, :password_digest, :session_token)
  end
end
