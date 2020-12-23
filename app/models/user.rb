class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :given_likes, class_name: 'Like', foreign_key: 'user_id', dependent: :destroy
  has_many :received_likes, class_name: 'Like', foreign_key: 'receiver_id', dependent: :destroy

  has_many :given_dislikes, class_name: 'Dislike', foreign_key: 'user_id', dependent: :destroy
  has_many :received_dislikes, class_name: 'Dislike', foreign_key: 'receiver_id', dependent: :destroy

  has_many :user_matches, dependent: :destroy
  has_many :matches, through: :user_matches
  has_many :messages, dependent: :destroy

  has_one_attached :photo

  geocoded_by :location
  after_validation :geocode, if: :will_save_change_to_location?

  acts_as_token_authenticatable

  validates :email, :first_name, :gender, :age, :description, :location, presence: true
end
