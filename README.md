# Dialoq
[Live Demo](http://dialoq.io/#/)

Dialoq is a dynamic chat-based application, inspired by Slack and Discord. Ruby on Rails is used as its backend MVC, with Postgresql for database management/querying. I used React/Redux components for the frontend. The site also utilizes [lottie-web](https://github.com/airbnb/lottie-web) for fluid, visually-appealing UI animations.

I built and designed the project over a 10-day period.

## Features
* Encrypted login (frontend to backend) using BCrypt with protected routes
* Users can create Servers for any topic
* Users can create sub-chatrooms within a Server
* Live messaging with websockets 
* Search functionality (to join servers, add friends, create private rooms etc.)

![Dialoq Splash Page](https://raw.githubusercontent.com/mvaleriani/Dialoq/4349c21da8f42d4d65af5e0068ac8e04532fdb7c/Splash.gif)
![Main Page](https://raw.githubusercontent.com/mvaleriani/Dialoq/master/app/assets/Mainpage.gif)

# Live Chat
The websocket for this project was implemented through Rails Action Cable. Channels are dynamically created via  a key composed of the server and room database ids. Hash values for each may replace this in later builds. On server/room click, Redux updates the channel key and replaces the old socket.

     componentWillReceiveProps(newProps){
        if (newProps.match.params.roomId !== this.props.match.params.roomId) {
          this.props.fetchRoomMessages(newProps.match.params.roomId)
        }
      }

      componentDidUpdate(prevProps){
        if (prevProps.match.params.roomId !== this.props.match.params.roomId) {
          this.createSocket();
        }
        let index = document.getElementById('message-index');
        index.scrollTo({top: index.scrollHeight, behavior:'auto'})

      }

      createSocket(){
        let channelKey = this.props.match.params.serverId + '_' + this.props.match.params.roomId;
        this.cable = ActionCable.createConsumer('ws://'+window.location.host+'/cable');
        this.chats = this.cable.subscriptions.create({
          channel: 'ChatChannel',
          server_room: channelKey
        }, {
          connected: () => {},
          received: (data) => {
            this.props.receiveMessage(data);
          }
        });
      }

![Live Chat](https://raw.githubusercontent.com/mvaleriani/Dialoq/master/app/assets/chat.gif)

### Account Settings
Users also have access to an animated menu where they can change their online status and profile icon. Pop-up animation was done with CSS transitions and React Collapse. Rails updates settings on the backend before sending them back to be rendered by React.

![Account Menu](https://raw.githubusercontent.com/mvaleriani/Dialoq/master/app/assets/menu.gif)

React Collapse was also used for the search animation

![Search](https://raw.githubusercontent.com/mvaleriani/Dialoq/master/app/assets/search.gif)
