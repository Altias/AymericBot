// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

var fs = require('fs');
var rawUsers;
var users

function updateUsers()
{
    rawUsers = fs.readFileSync('/app/usrs.json');
    users = JSON.parse(rawUsers);
}

updateUsers();

for (var i in users)
{
  console.log(users[i]);
}

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(listener.address.port);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 250000);

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login("NTE4OTY3NzY5NTg1NDE4MjUw.D2yc_Q.P4nXaukQSe5QaYeqqcd-SkJoS9o");

// Function time!
function findUser(userID)
{
  for (var i in users)
  {
      if (userID == users[i].id)
      {
        console.log("User found at " + i);
        return(i);
      }
    
  }
  
  return(-1);
}

function morning(hasToday)
{
  
  var now = new Date();
  var hr = Math.floor(Math.random()*2) + 11;
  var min = Math.floor(Math.random()*60);
  console.log(now);
  console.log("Morning greeting at " + hr+":"+min+" UTC");
var millisTill2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hr, min, 0, 0) - now;
if (millisTill2 < 0 || hasToday == true) {
     millisTill2 += 86400000;
}

  
  //console.log("Called!");
  setTimeout(function(){
    
    const channel = client.channels.get("477532221964812339");
    channel.send("Good morning my friends!");
    morning(true);
    
  }, millisTill2);
}

morning(false);

// Message Recieved

client.on('message', msg => {
  
  var messageL = msg.content.toLowerCase();
  
   function checkDM()
  {
    var dmChan = msg.channel.type;
  
    if (dmChan == 'dm')
    {
      return(true);
    }
    
    else
      {
        return(false);
      }
    
  }
  
  var dm = checkDM();
  
    function giveNick()
  {
    //Lea feel free to add to these if you snoop here again, I had to rush them at the end of lunch
    var i1 = ['The', 'Blue', 'Red', 'Yellow', 'Green', 'Purple', 'Dark', 'Light', 'Dragon', 'Dragoon', 'Good', 'Bad', 'Powerful', 'Mighty', 'Ishgardian', 'Doman', 'Garlean', 'Gridanian', "Lominsian", 'Magical', 'Angry', 'Helpful', 'Destructive', 'Passive', 'Aggressive', 'Jumpy', 'Sleepy', 'Electric', 'Flaming', 'Frozen', 'Saintly', 'White', 'Black', 'Eternal', 'Fallen', 'Risen', 'Beautiful', 'Majestic', 'Legendary', 'Dreadful', 'Cowardly', 'Determined', 'Terrifying', 'Bold', 'Great', 'Trustworthy', 'Deceptive', 'Redeemed', 'Deadly', 'Allagan', 'Sharlayan', 'Flying', 'Falling', 'Sinking', 'Screaming', 'Dead','Glowing', 'Shiny', 'Burning','Dancing','Singing','Fighting','Secret','Depressed', 'Eternal', 'Azure', 'True', 'Honest', 'Dishonest', 'Chaotic', 'Soothing','Shadow','Loyal','Lone'];
    var n1 = ['Mage', 'Champion', 'Warrior', 'Ninja', 'Summoner', 'Scholar', 'Hero', 'Protector', 'Legend', 'Paladin', 'Knight', 'Astrologian', 'Machinist', 'Savior', 'Healer', 'Tank', 'Dragon', 'Rage', 'Joy', 'God', 'Eikon', 'Primal', 'Heretic', 'Nerd', 'Monster', 'Spell', 'Horse', "Chocobo", 'Moogle', 'Demon', 'Angel', 'Ifrit', 'Titan', 'Garuda','Bahamut','Nidhogg','Thordan', 'Susano', 'Shinryu', 'Ravana', 'Dreadwyrm', 'Leviathan', 'Ascian', 'Ramuh', 'Shiva', 'Weapon', 'Bismarck', 'Bard', 'Monk', 'Samurai', 'Eyes', 'Wolf', 'Cat', 'Lion', 'Beast', 'Child', "Miqo'te", 'Hyur','Elezen','Elf','Roedagyn','Au Ra','Lalafell', 'Highlander', 'Midlander', 'Seeker', 'Keeper','Dawn','Dusk', 'Commander', 'Lord', 'General', 'Sentry', 'Sniper', 'Archer', 'Killer', 'Ward','Halone','Menphina','Thaliak','Nymeia','Llymlaen','Oschon','Byregot','Rhalgr','Azeyma',"Nald'thal",'Nophica','Althyk','Gunbreaker','Dancer','Ascian','Lightwarden','Sin Eater'];
    var p1 = ['of', 'from', 'in'];
    var l1 = ['the Abyss', 'the Shadows', 'Ishgard', 'Doma', 'Ala Mhigo', "Ul'dah", 'Gridania', 'Limsa Lominsa', 'the Light', 'the Night', 'the Sun', 'the Moon', 'the Stars', 'the Sea', 'Life', 'Death', 'the Wild', 'the Inferno', 'the Vortex', 'the Crags', 'the Whorl', 'Eorzea', 'the Silver Fuller', 'the Dragonsong', 'Dravania', 'the World', 'Hydaelyn', 'Afar', 'the Far East', 'the Near East', 'the North', 'the South', 'the West', 'the East', 'Allag', 'Dalamud', 'Sharlayan', 'the Battlefield', 'the War', 'the Truth', 'Lies', 'the Forest', 'the Desert', 'the Swamp', 'the Sky', 'the Lake','the Fields','Everything', 'Eternity', 'House Fortemps', 'House Durendaire', 'House Haillenarte', 'House Dzemael', 'The Resistance','The Source','The First','The Crystarium','Eulmore','Il Mheg','Norvrandt','Lakeland','Kholusia','Amh Araeng',"The Rak'tika Greatwood",'The Tempest'];
    
    var form = Math.floor(Math.random() * 2);
    
    if (form == 0)
    {
       return(i1[Math.floor(Math.random() * i1.length)] + " " + n1[Math.floor(Math.random() * n1.length)]);
    }
    
    else
    {
      return(n1[Math.floor(Math.random() * n1.length)] + " " + p1[Math.floor(Math.random() * p1.length)] + " " + l1[Math.floor(Math.random() * l1.length)]);
    }
  }
  
    function getTagID()
  {
    var t = msg.content.substring(msg.content.indexOf('<'), msg.content.indexOf('>') + 1);
    console.log("User Tag: " + t);
    
    var id;
    
    if (t.includes('!'))
    {
      id = t.substring(3, t.length - 1);
      
    }
    
    else
    {
      id = t.substring(2, t.length - 1);
      
    }
    console.log("User ID: " + id);
    
    return(id);
  }
  
  
  //First we choose the message
  
  var send = null;
  
  if (messageL.includes("can we get an f ") || messageL.includes("can we get a f"))
  {
     send = "F";
  }
  
  else if (msg.content.includes('test') || (dm == true && msg.author.id != client.user.id)) 
  {
    
    var userID = msg.author.id;
    var found = false;
    var n = 0;
       
    n = findUser(userID);
       
       if (n == -1)
       {
         var newUsr = {id:userID, rep: 50, nick: null};
         users.push(newUsr);
         console.log("User added locally. System to be updated");
         n = findUser(userID);
         for (var i in users)
         {
           console.log("ID: " + users[i].id + " Rep: " + users[i].rep);
           
         }
        // var newJ = JSON.stringify(users);
         
         
         
       }
       
       var name;
       if (users[n].nick != null)
       {
         name = users[n].nick;
       }
       
       else
       {
         name = "<@"+userID+">";
       }
    
        function addRep()
         {
            console.log("Adding rep to user with " + users[n].rep);
            if (users[n].rep < 100)
            {
               users[n].rep = users[n].rep + 5;
               
            }
           
           console.log("Rep now " + users[n].rep);
         }
  
         function remRep()
         {
            if (users[n].rep > 0)
            {
              users[n].rep = users[n].rep - 5;
            }
         }

          if (messageL.includes("compliment"))
           {
              var toSend2 = Math.floor(Math.random() * 3);

              if (messageL.includes(" me"))
             {
               if (users[n].rep > 25)
               {
                if (toSend2 ==0)
                {
                   send = 'You look lovely today ' + name;
                }   

                else if (toSend2 == 1)
                {
                  send = 'I am so proud of you ' + name;
                }

               else
               {
                  send = 'You look lovely today ' + name;
               }
              }
               
              else
              {
               send = 'Ah, ' + name + '... you are certainly... intriguing';
              }

            }

             else if (messageL.includes("<@") && messageL.includes(">"))
             {
                
               // var tag = messageL.substring(messageL.indexOf("<") + 2, messageL.indexOf(">"));
                var tag = getTagID();
                var g = findUser(tag);
                
                if (g == -1)
                {
                  send = "I am afraid we are not aquainted, but I am sure they are lovely. Tell them to introduce themself sometime";
                }
               
                else
                {
                  if (users[g].nick == null)
                  {
                    tag = "<@"+tag+">";
                  }
                  
                  else
                  {
                    tag = users[g].nick;
                  }

                   if (toSend2 ==0)
                   {
                      send = 'You look lovely today ' + tag;
                   }   
          
                   else if (toSend2 == 1)
                   {
                     send = 'I am so proud of you ' + tag;
                   } 
          
                  else
                  {
                     send = 'You look lovely today ' + tag;
                  } 
                }
             }
           }
    
           else if (messageL.includes('call me') || messageL.includes('my name is'))
           {
             var call;
             var skip = 0;
             
             if (messageL.includes('call me'))
             {
                call = 'call me ';
                skip = 8;
             }
             else
             {
               call = 'my name is ';
               skip = 11;
             }
             
             var newNick = msg.content.substring(messageL.indexOf(call) + skip);
             
             users[n].nick = newNick;
             
             
             send = "I shall call you '" + users[n].nick + "' from now on";
             
           }
    
          else if (((messageL.includes("give") || messageL.includes("need") || (messageL.includes("can") && messageL.includes("have"))) && messageL.includes("nickname")))
           {
               var nick = giveNick();
       
              if (messageL.includes(" me"))
              {
        
                 send = name + " your name is " + nick;
              }
       
              else if (messageL.includes("<@"))
              {
                 var u;
                 var u1 = getTagID();
                 var x = findUser(u1);
                
                 if (x == -1)
                 {
                   u = messageL.substring(messageL.indexOf("<"), messageL.indexOf(">") + 1);
                 }
                
                else if (users[x].nick == null)
                {
                  u = messageL.substring(messageL.indexOf("<"), messageL.indexOf(">") + 1);
                }
                
                else
                {
                  u = users[x].nick;
                }
          
                 send = u + " your name is ";
              }
       
              else
              {
                send = "To whom should I give a nickname?";
              }
           }
    
         else if (messageL.includes("hello") || messageL.includes("hi ") || messageL.includes("good morning") || (messageL.includes("hey") && messageL.charAt(messageL.indexOf("hey") - 1) != 't') || messageL.includes("hiya") || messageL.includes("hewwo"))
           {
              if (users[n].rep > 75)
              {
                 send = "Greetings my dearest, " + name;
              }
       
       
              else if (users[n].rep > 50)
              {
                 send = "Hello " + name + ", I am glad to see you";
              }
             
              else if (users[n].rep > 25)
              {
                 send = "Greetings " + name +", are you well?";
              }
             
              else
              {
                send = "Hello " + name +". If there is something you need I'm afraid I am quite busy at this time.";
              }
             
             addRep();
           }
    
           else if (messageL.includes("goodnight") || messageL.includes("goodbye") || messageL.includes("bye")|| messageL.includes("farewell"))
           {  
             if (users[n].rep > 75)
             {
               send = "Farewell " + name + "! I hope to see you again soon";
             }
             
             else if (users[n].rep > 25)
             {
                send = "Farewell " + name;
             }
             
             else
             {
                send = "Farewell " + name +". Do not bother checking in, I shall be fine";
             }
             
             addRep();
             
           }
    
          else if (messageL.includes("thank you")||messageL.includes("thanks") || messageL.includes("thank u"))
           {
             send = "You are welcome";
             addRep();
           }
    
           else if (messageL.includes("greet") && messageL.includes("<@"))
           {
              var tag = getTagID();
             
              var u = findUser(tag);
             
              if (u == -1)
              {
                send = "Greetings <@" + tag +">";
              }
             
              else
              {
                  if (users[u].rep > 25)
                  {
                      send = "Greetings " + users[u].nick;
                  }
                
                  else
                  {
                    send = "Must I? Speaking with " + users[u].nick + " can be... difficult at times";
                  }
              }
           }
    
          else if (messageL.includes("how are you") || messageL.includes("what's up") || messageL.includes("whats up") || messageL.includes("you ok") || messageL.includes("you alright"))
           {
              var o = Math.floor(Math.random() * 3);
       
              if (o == 0)
              {
                send = "I am well, thank you";
              }
       
              else if (o == 1)
              {
                 send = "I have been better I suppose";
              }
       
              else
              {
                send = "I think I've had one too many drinks";
              }
             
             addRep();
           }
    
          else if (messageL.includes("want") && messageL.includes("drink"))
           {
             if (users[n].rep > 75)
             {
               send = "Ah, of course! Do not worry yourself with payment, I shall cover it";
             }
             
             else if (users[n].rep > 25)
             {
               send = "Certainly";
             }
             
             else
             {
               send = "Mayhap another day. I have much to do.";
             }
           }
    
          else if((messageL.includes("what") && messageL.includes("wrong")))
           {
               if(users[n].rep > 25)
               {
                 send = "Pray, do not concern yourself with my well being " + name;
               }
             
               else
               {
                 send = "It is not your concern";
               }
             
             addRep();
           }
    
          else if (messageL.includes("good luck") || messageL.includes("keep trying") || messageL.includes("you can do it"))
           {
             if (users[n].rep > 25)
             {
               send = "I shall do my best";
             }
             
             else
             {
               send = "An odd thing for someone like you to say";
             }
           }
    
          else if (messageL.includes("how do you feel about") || messageL.includes("what do you think of"))
           {
               if (messageL.includes(" me"))
               { 
                 
                 if (users[n].id == 385943980053102592)
                 {
                    send = "Ah, " + name + "! You are my creator, that would make it very hard to dislike you";
                 }
          

                 else
                 {
 
                   

                    if (users[n].rep > 75)
                    {
                       send = name + ", I truely consider you one of my dearest companions";
           
                    }

                    else if (users[n].rep > 50)
                    { 
                       send = name +"! You are a very kindhearted individual and my trusted friend";
                    }
                   
                    else if (users[n].rep > 25)
                    {
                       send = "You are incredibly talented, " + name + ", I respect you greatly";
                    }

                    else
                    {
                       send = name + "... You are very... how shall I put this... interesting";
                    }
                 }
           }
               

                else if (messageL.includes("<@"))
                {
                  var cID = getTagID();
                 // console.log("Tagged ID: " + cID);

                  if (cID == 385943980053102592)
                  {
                    send = "Ah, <@" + cID+ ">! How could I dislike my creator?";
                  }

                  else
                  {
                     var c = findUser(cID);
                     var call;
                    
                    if (c != -1)
                    {
                      if (users[c].nick != null)
                      {
                        call = users[c].nick;
                      }
                      
                      else
                      {
                        call = "<@" + users[c].id + ">";
                      }
                    }
                    
                    if (c == -1)
                    {
                      send = "I am afraid I'm not familiar with whom you speak of. Ask them to introduce themself sometime.";
                    }

                    else if (users[c].rep > 75)
                    {
                       send = call + " is truely one of my dearest companions.";

                    }

                    else if (users[c].rep > 50)
                    {
                       send = call + "! Truely, a very kind individual and my trusted friend";
                    }
                    
                    else if (users[c].rep > 25)
                    {
                       send = call + "is incredibly talented, I respect them greatly";
                    }

                    else
                    {
                       send = call + "... They are... interesting... sometimes";
                    }
                  }
               }

               else
               {
                  send = "You have not tagged anyone for me to give an opinion on";
               }
          }
    
           else if (messageL.includes('sorry') || messageL.includes('apologies'))
           {
             if (users[n].rep > 75)
             {
               send = "Do not worry, it would be very difficult for you to offend me";
             }
             
             else if (users[n].rep > 25)
             {
                 send = "Do not worry, I have taken no offense";
             }
             
             else
             {
               send = "I suppose I can forgive this";
             }
             
             addRep();
           }
    
          else if (messageL.includes("where") && (messageL.includes("is") || messageL.includes("are") || messageL.includes("were")))
           {
             var locations = ["Ishgard", "Dravania","Thanalan","Ul'Dah","The Waking Sands","The Black Shroud","Gridania","La Noscea","Limsa Lominsa","Hingashi","Kugane","Doma","The Doman Enclave","Gyr Abania","Ala Mhigo","Garlemald","Your kitchen","Eorzea","The Far East","The Near East","Toto Rak","Zenith","The Aery","The Rising Stones","Mor Dhona", "Home","Nowhere important","Behind you","Sharlayan","Fortemps Manor", "The Vault"];
             if (users[n].rep < 26)
             {
               send = "I do not need to answer your every call " + name;
             }
             
             else
             {
              send = locations[Math.floor(Math.random()*locations.length)];
             }
             
           }
    
          else if (messageL.includes('stop'))
           {
          
            send = "Ah, my apologies";
             
             
             remRep();
           }
    
          else if (messageL.includes("i hate you") || messageL.includes("fuck you") || messageL.includes("bad aymeric") || messageL.includes("you suck"))
           {
             if (users[n].rep > 25)
             {
              send = "My apologies if I have given offense";
             }
             
             else
             {
               send = "Ah, well it seems no matter what I do you will find reason to throw insults my way. To speak plain, I do not care anymore";
             }
              remRep();
           }
    
           else if (messageL.includes("i love you") || messageL.includes("i love u"))
           {
              if (users[n].rep > 75)
              {
                send = "And I you, you're too kind";
              }
              else if (users[n].rep > 25)
              {
                 send = "Ah, thank you, you're too kind";
              }
             
              else
              {
                send = "Is that really the truth after all you have done?";
              }
           }
    
          else if (messageL.includes("good job") || messageL.includes("great job") || (messageL.includes("you") && (messageL.includes("great") || messageL.includes("good") || messageL.includes("perfect"))))
           {
             if (users[n].rep > 25)
             {
               send = "My thanks, I simply do my best";
               addRep();
             }
             
             else
             {
               send = "If only I could believe your honeyed words... What is it you hope to gain?";
             }
           }
    
               else if (messageL.includes("why"))
           {
             var w = Math.floor(Math.random() * 3);
      
             if (w == 0)
             {
               bot.sendMessage({to:channelID, message: "I honestly do not know"});
             }
       
             else if (w == 1)
             {
               bot.sendMessage({to:channelID, message: "It had to be done"});
             }
      
             else
             {
               //var u = genUser();
               // Will set up manually with our IDs for now after getting nowhere. Intend to return to this, for now dont call genUser()
              
               var u = users[Math.floor(Math.random() * users.length)];
               if (u.nick == null)
               {
                    bot.sendMessage({to:channelID, message: "<@" + u.id + "> suggested it to me"});
               }
               
               else
               {
                 bot.sendMessage({to:channelID, message: u.nick + " suggested it to me"});
               }
             }
           }
           
    
  
    
  }
  
      //Actually send message
    
    if (send != null)
      {
          msg.channel.send(send);
      }
});