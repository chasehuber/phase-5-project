# Vomit Page

An app made for communicating via user made groups.

# Vomit Page Wireframe

<img src="https://user-images.githubusercontent.com/53712896/228631437-fbb5835c-966b-4162-92d6-1ab5902d624c.png"/>

# Database Models

<img src="https://user-images.githubusercontent.com/53712896/228631011-1d5de54f-2566-4b7e-91fc-ff4c143fb9af.png"/>

* A user has many messages
* A user has many chatrooms through messages
* A chatroom has many messages
* A chatroom has many users through messages
* A message belongs to a user
* A message belongs to a chatroom

# Validations

* User validates
  * presence of email and username
  * presence of password unless user id is present (for profile editing)
  * uniqueness of email and username
  * length of password and username
  * email using VALID_EMAIL_REGEX

* Chatroom validates
  * presence of title and description
  * length of title and description

* Message Validates
  * presence of content
  * length of content

# API Endpoints

<img src="https://user-images.githubusercontent.com/53712896/228631288-03db29d5-ceb3-4af6-a1cf-83c80935d6c5.png"/>

# Stretch Goals
* Multimedia support
* Private messaging
* Randomized chatroom ID's 

# Technologies Used
* Ruby
* Ruby on Rails
* Active Record
* Action Cable
* Websockets
* React
* TailwindCSS
* JavaScript
