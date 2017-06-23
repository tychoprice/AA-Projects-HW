class SessionsController < ApplicationController
  def create
    @user = User.find_by(username: params[:user][:username])
    if @user.nil?
      render :new
    else
      redirect_to user_url(@user)
    end
  end

  def destroy
  end

  def new
    render :new
  end
end
