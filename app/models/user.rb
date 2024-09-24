class User < ApplicationRecord
  has_secure_password
  has_many :posts

  validates :email, :username, presence: true, uniqueness: true
end
