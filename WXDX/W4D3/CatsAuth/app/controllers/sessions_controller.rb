class SessionsController < ApplicationController
  def new
    render :session_form?
  end

  def create(username, password)
    if username == @user.username && @user.is_password?
      #reset_session_token?
    else
      # redirect_to ..?
    end
  end
end
