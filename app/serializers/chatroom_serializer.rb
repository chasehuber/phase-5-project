class ChatroomSerializer < ActiveModel::Serializer
  attributes :id, :title, :creator_id, :description, :conn_id
end
