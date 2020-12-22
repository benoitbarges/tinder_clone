class Match < ApplicationRecord
  has_many :user_matches, dependent: :destroy
  has_many :users, through: :user_matches
  has_many :messages, dependent: :destroy
end
