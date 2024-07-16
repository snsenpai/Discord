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
    .setApplicationId('1146570151253266432')
    .setType('STREAMING')
    .setURL('https://www.twitch.tv/hutcalm') //Must be a youtube video link 
    .setState('Fate')
    .setName('Yamete ')
    .setDetails(`Me`)
    .setStartTimestamp()
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1016707563594715267/1146895195808481363/saber.gif?ex=6696cf62&is=66957de2&hm=65ecd589a73f85f36020f016baadd72bb0211ce33d75f64c4cc30ecab3fe66b1&=') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Yamete Kudasai') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1016707563594715267/1146910829447491584/ezgif.com-crop.gif?ex=6696ddf2&is=66958c72&hm=b552e57cddeecdcad4a2fff09aec93f9cc12482dbefb80a6cad9a06668a1894b&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('oi') //Text when you hover the Small image
    .addButton('Discord', 'https://www.youtube.com/@snsenpai')
    .addButton('Youtube', 'https://www.youtube.com/@snsenpai');

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `Hentai`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
