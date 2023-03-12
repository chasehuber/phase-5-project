import consumer from "./consumer"

const MessagesChannel = consumer.subscriptions.create({ channel: "ChatChannel" }, {
  connected() {
    console.log("connected to websocket")
  },

  disconnected() {

  },

  received(data) {
    
  }
})

export default MessagesChannel