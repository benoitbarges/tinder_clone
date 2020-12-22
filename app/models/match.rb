class Match < ApplicationRecord
  has_many :user_matches, dependent: :destroy
  has_many :users, through: :user_matches
  has_many :messages, dependent: :destroy

  def match_with
    user_matches.map(&:user)
  end
end
