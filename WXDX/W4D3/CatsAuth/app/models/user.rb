require 'bcrypt'

class User < ActiveRecord::Base
  include BCrypt

  validates :password_digest, presence: true

  validates(
    :password,
    length: {minimum: 6, allow_nil: true }
  )
  validates :session_token, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true

  # def password
  #   @password ||= Password.new(password_hash)
  # end

  def password=(password)
    @password_digest = Password.create(password)
  end

  # def find_by_credentials(username, password)
  # end
  #
  # def reset_session_token!
  # end

    def is_password?(password)
      @password_digest == Password.new(password)
    end
end
