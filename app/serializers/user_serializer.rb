class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :email, :bio
end
