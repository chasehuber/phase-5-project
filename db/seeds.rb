require "securerandom"
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding database... 🚀"

user1 = User.create(username: "freeman123", password: "password", email: "gfreeman@blackmesa.gov", bio: "..." )
user2 = User.create(username: "breen_machine", password: "password", email: "wbreen@blackmesa.gov", bio: "Welcome, welcome to City 17")
user3 = User.create(username: "eli_vance", password: "password", email: "evance@blackmesa.gov", bio: "Damn him and his unforseen consequences!")
user4 = User.create(username: "barneythebeast", password: "password", email: "bcalhoun@blackmesa.gov", bio: "Catch me after work, I'll buy you a beer")

chatroom1 = Chatroom.create(title: "black mesa chat", description: "discussions about unforseen consequences", creator_id: 2, conn_id: SecureRandom.alphanumeric)
chatroom2 = Chatroom.create(title: "gman fan club", description: "who knows about this man", creator_id: 3, conn_id: SecureRandom.alphanumeric)
chatroom3 = Chatroom.create(title: "vortiguant hangout", description: "vortiwhat?", creator_id: 1, conn_id: SecureRandom.alphanumeric)

puts "Seeding completed! 🗿"