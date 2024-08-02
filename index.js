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
    .setName('Yamete Kudasai')
    .setDetails(`Me`)
    .setStartTimestamp()
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1016707563594715267/1268817882570162269/tumblr_ngsnsj6cFe1s53g98o1_1280.gif?ex=66adce3c&is=66ac7cbc&hm=44538c5b7db68e478360f4a188a30689d118feed64e5f9f0b6599cc1ce2cfd28&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Yamete Kudasai') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1016707563594715267/1268817570254028841/animesher.com_girl-black-gumi-980940.gif?ex=66adcdf2&is=66ac7c72&hm=736028ab09419d527e22e1e9c12f6a770bd0bf01e5be09f3e16e7ffb8ea58477&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('oi') //Text when you hover the Small image
    .addButton('Discord', 'https://www.youtube.com/@snsenpai')
    .addButton('Youtube', 'https://www.youtube.com/@snsenpai');

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `Me`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
