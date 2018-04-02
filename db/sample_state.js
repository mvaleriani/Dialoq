     {
       entities: {
          messages: {
            1: {
               id: 1,
               body: "Well hey there Michael",
               author_id: 17,
               room_id: 2,
               timestamp: "08/17/2017",
            },
            2: {
               id: 2,
               body: "Planning some insidious spamming?",
               author_id: 47,
               room_id: 2,
               timestamp: "05/17/2018",
            },
            3: {
               id: 3,
               body: "i thought you knew the discord",
               author_id: 930,
               room_id: 1,
               timestamp: "06/04/2017",
            }
          },
          users: {
            17: {
               id: 17,
               username: "jerry seinfeld",
               image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Jerry_Seinfeld.jpg/250px-Jerry_Seinfeld.jpg"
               online_status: "online",
            },
            47: {
               id: 47,
               username: "fox mccloud",
               image_url: "https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/import/2013/images/2013/09/redfoxyawn.jpg?itok=yRkSVe8T",
               online_status: "online",
            },
            930: {
               id: 930,
               username: "hall and oates",
               image_url: "http://goldenageofmusicvideo.com/wp-content/uploads/2014/04/Hall_Oates-1980s1.jpg",
               online_status: "online",
            },
          }
          servers: {
            1: {
               id: 1,
               name: "melee it on me",
               icon_url: "https://pm1.narvii.com/6024/b77e1f97d296ac3d77191f04a0ae927bc3a5d096_hq.jpg",
               member_ids: [18, 47, 930, 433],
               dm_status: false,
            }
            2: {
               id: 2,
               name: "Bay Area Starcraft",
               icon_url: "https://pbs.twimg.com/profile_images/1147514150/logo_400x400.jpg",
               member_ids: [18, 77, 190, 133],
               dm_status: false,
            }
          }
          chategories: {
            1: {
               id: 1,
               name: "general",
               server_id: 1,
            },
            2: {
               id: 2,
               name: "Text Rooms",
               server_id: 2,
            }
          }
          rooms: {
            1: {
               id: 1,
               name: "welcome room",
               chategory_id: 1,
               server_id: 1,
            }
            2: {
               id: 2,
               name: "melee discussion",
               chategory_id: 2,
               server_id: 2,
            }
          }
       },
       ui: {
          loading: true/false,
          UserIndexColumn: true/false,
          ChatHeader: "dms"/"dm"/"server",
       },
       errors: {
          login: ["Incorrect username/password combination"],
          search: ["No results found"],
          messageForm: ["Message exceeds 2000 character limit"],
       },
       session: {
          id: 18,
          username: "michaelmichaelmotorcycle",
          serverList: [1, 2],
          friend_ids: [17, 42, 60],
          image_url: "https://78.media.tumblr.com/d0fc1717c1987a20a33df7a56550c8ad/tumblr_nulba8D6oD1ufeyv7o1_1280.png",
          online_status: "online"
       }
     }
