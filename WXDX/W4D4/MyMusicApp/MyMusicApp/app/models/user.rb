class User < ActiveRecord::Base
  validates :email, :session_token, uniquenes: true

  validates(
    :email,
    :password_digest,
    :session_token,
    presence: true
  )

  def generate_session_token
  end

  def reset_session_token!
  end

  def ensure_session_token
  end

  def password=(password)
  end

  def find_by_credentials(email, password)
  end
end
