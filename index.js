const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('')
    .setType('STREAMING')
    .setURL('https://www.twitch.tv/hutcalm') //Must be a youtube video link 
    .setState('Fate')
    .setName('Yamete Kudasai')
    .setDetails(`Me`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1016707563594715267/1146895195808481363/saber.gif') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Yamete Kudasai') //Text when you hover the Large image
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1016707563594715267/1146910829447491584/ezgif.com-crop.gif') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('oi') //Text when you hover the Small image
    .addButton('Discord', 'https://www.youtube.com/@snsenpai')
    .addButton('Youtube', 'https://www.youtube.com/@snsenpai');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = ` [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
