class CreateChatroom < ActiveRecord::Migration[7.0]
  def change
    create_table :chatrooms do |t|
      t.string :title
      t.string :description
      t.integer :creator_id
      t.string :conn_id

      t.timestamps
    end
  end
end
