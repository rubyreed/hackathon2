# frozen_string_literal: true

class User < ActiveRecord::Base
  has_many :recipes, dependent: :destroy
  has_many :shopping_lists, dependent: :destroy
  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User
end
