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
    
    
    morning(true);
    
  }, millisTill2);
}

morning(false);

// Message choices

client.on('message', msg => {
  // If the message is "ping"
  if (msg.content.includes('test')) {
    // Send "pong" to the same channel
    msg.channel.send('done!');
  }
});