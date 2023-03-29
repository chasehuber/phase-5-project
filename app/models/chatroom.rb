class Chatroom < ApplicationRecord
  has_many :messages, dependent: :destroy
  has_many :users, through: :messages

  validates :title, presence: true, length: { in: 1..50 }
  validates :description, presence: true, length: { in: 1..500 }
end
