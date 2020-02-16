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
  
  var messageL = msg.contents.toLowerCase();
  
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
    var t = msg.contents.substring(msg.contents.indexOf('<'), msg.contents.indexOf('>') + 1);
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

    
  
    
  }
  
      //Actually send message
    
    if (send != null)
      {
          msg.channel.send('done!');
      }
});