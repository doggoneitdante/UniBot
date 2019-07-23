// Load up the discord.js library
const Discord = require("discord.js");

// Meet the client
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

var rightNow = new Date();
switch (rightNow.getDay()) {
	case 0:
		var today = "Sun " + rightNow.getMonth() + "/" + rightNow.getDate() + "/" + rightNow.getYear();
		break;
	case 1:
		var today = "Mon " + rightNow.getMonth() + "/" + rightNow.getDate() + "/" + rightNow.getYear();
		break;
	case 2:
		var today = "Tue " + rightNow.getMonth() + "/" + rightNow.getDate() + "/" + rightNow.getYear();
		break;
	case 3:
		var today = "Wed " + rightNow.getMonth() + "/" + rightNow.getDate() + "/" + rightNow.getYear();
		break;
	case 4:
		var today = "Thur " + rightNow.getMonth() + "/" + rightNow.getDate() + "/" + rightNow.getYear();
		break;
	case 5:
		var today = "Fri " + rightNow.getMonth() + "/" + rightNow.getDate() + "/" + rightNow.getYear();
		break;
	case 6: 
		var today = "Sat " + rightNow.getMonth() + "/" + rightNow.getDate() + "/" + rightNow.getYear();
		break;
}
var time = rightNow.getHours() + ":" + rightNow.getMinutes();

client.on("ready", () => {
    // This event will run if the bot starts, and logs in, successfully.
    console.log(`UniBot is up with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
    // Example of changing the bot's playing game to something useful. `client.user` is what the
    // docs refer to as the "ClientUser".
    client.user.setActivity(`UTSA's ${client.guilds.size} servers`);
    client.user.setUsername("UniBot");
});

//client.on("message", function(message) {
	//Startup message.
	//guildObj.defaultChannel.send("What's up, bitches.");
//});

// Auto-apply the role of "tester" to newcomers (FOR BOT-HOME SERVER)
client.on('guildMemberAdd', (guildMember) => {
   guildMember.addRole(guildMember.guild.roles.find(role => role.name === "tester"));
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});
// set message listener 
client.on('message', message => {
    switch(message.content.toUpperCase()) {
        case '?RESET':
            // Check permissions
			      if(!message.member.roles.some(r=>["Admin", "Mod", "robot master"].includes(r.name)) )
			      return message.reply("Sorry, you don't have permissions to use this!");
            // Refresh bot if user requesting has required privileges
            resetBot(message.channel);
            break;
    }
});

client.on('message', message => {
    switch(message.content.toUpperCase()) {
        case '?KILL':
            // Check permissions
			      if(!message.member.roles.some(r=>["Admin", "Mod"].includes(r.name)) )
			      return message.reply("Sorry, you don't have permissions to use this!");
            // Kill bot if user requesting has required privileges
            killBot(message.channel);
            break;
    }
});

// Turn bot off (destroy), then turn it back on
function resetBot(channel) {
    // Send channel a message that you're refreshing the bot 
    channel.send('Refreshing...')
    .then(msg => client.destroy())
    .then(() => client.login(config.token))
    // Send message saying that the refresh was successful
	  .then(msg => channel.send('Reboot complete.'));
}

function killBot(channel) {
    // send channel a message that you're killing bot [optional]
    channel.send('Goodbye.')
    .then(msg => client.destroy());
}

client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // Ignore other bots straight up
  if(message.author.bot) return;
  
  // Ignore any message that doesn't start with the prefix in the config file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Separate our "command" name, and our "arguments" for the command. 
  // e.g., if we have the message "+say Is this the real life?" 
  // , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  // Shift to lowercase for simplicity
  const command = args.shift().toLowerCase();
  
  // A few simple commands
  
  if(command === "rrcafe") {
	  message.reply(``);
  }
  
  // Tell the user the hours of Chick-Fil-A on Main Campus, 
  // TODO: compare time and tell the user that its closed or open
    if(command === "chick") {
        var openMonTue = '07:30:00';
        var closedMonTue = '17:00:00';
        var openDateMonTue = new Date(rightNow.getTime());
        openDateMonTue.setHours(openMonTue.split(":")[0]);
        openDateMonTue.setMinutes(openMonTue.split(":")[1]);
        openDateMonTue.setSeconds(openMonTue.split(":")[2]);

        var closedDateMonTue = new Date(rightNow.getTime());
        closedDateMonTue.setHours(closedMonTue.split(":")[0]);
        closedDateMonTue.setMinutes(closedMonTue.split(":")[1]);
        closedDateMonTue.setSeconds(closedMonTue.split(":")[2]);

        var valid = openDateMonTue < rightNow && closedDateMonTue > rightNow;

        // Monday - Tuesday 7:30 - 17:00
        if (valid) {
            message.reply(`\nChick-Fil-A is currently **OPEN.**\n**Here are the hours for Chick-Fil-A on Main Campus (JPL Food Court):**\nMon - Tue\t7:30 - 17:00\nWed - Thu\t7:30-15:00\nFri\t\t\t7:30 - 14:00\nSat - Sun\t\tClosed\n\n\nCurrent Semester: **Summer '19**\nCurrent time: ${rightNow}`);
        }
        else {
            message.reply(`\nChick-Fil-A is currently **CLOSED.**\n**Here are the hours for Chick-Fil-A on Main Campus (JPL Food Court):**\nMon - Tue\t7:30 - 17:00\nWed - Thu\t7:30-15:00\nFri\t\t\t7:30 - 14:00\nSat - Sun\t\tClosed\n\n\nCurrent Semester: **Summer '19**\nCurrent time: ${rightNow}`);
        }
	  if(rightNow.getDay() === 0 || rightNow.getDay() === 6) {
	      message.reply(`\nChick-Fil-A is currently **CLOSED.**\n**Here are the hours for Chick-Fil-A on Main Campus (JPL Food Court):**\nMon - Tue\t7:30 - 17:00\nWed - Thu\t7:30-15:00\nFri\t\t\t7:30 - 14:00\nSat - Sun\t\tClosed\n\n\nCurrent Semester: **Summer '19**\nCurrent time: ${rightNow}`);
      }
  }
  
  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  


  if (command === "&help") {
	// let member = message.mentions.members.first();
		message.reply(`\n**Here are the current commands:`)
  }

});

client.login(config.token);
