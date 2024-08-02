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
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1016707563594715267/1147212625688678440/ezgif.com-gif-maker_1.gif?ex=66adb7c4&is=66ac6644&hm=77dece20a20ba7ceff7ab5144fd4ffac37e9c1dbbbca9c9fe5e7df4208ab4796&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Yamete Kudasai') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1016707563594715267/1146910829447491584/ezgif.com-crop.gif?ex=66ad4772&is=66abf5f2&hm=d55e1d02862f136f2ee88f01ff6610dce99efdccc2908fd2b5d5209e812aaae5&') //You can put links in tenor or discord and etc.
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
