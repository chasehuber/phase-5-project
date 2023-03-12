class MessageSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :content
end
