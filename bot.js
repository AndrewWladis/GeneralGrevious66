const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv = require('dotenv');
dotenv.config();

client.login(process.env.BOT_TOKEN);

client.on('ready', readyDiscord)

function readyDiscord() {
  console.log('im working')
}

function randomResponse(num) {
  if (num == 0) {
    return 'https://tenor.com/view/intelligent-qui-gon-jin-jar-jar-binks-speak-smart-gif-17180390';
  } else if (num == 1) {
    return 'starwarsmemes/0.jpeg';
  } else if (num == 2) {
    return 'https://tenor.com/view/obi-wan-i-will-do-what-i-must-starwars-gif-11094969';
  } else if (num == 3) {
    return 'starwarsmemes/1.jpeg';
  } else if (num == 4) {
    return 'https://tenor.com/view/star-wars-anakin-this-is-where-the-fun-begins-gif-13380207';
  } else if (num == 5) {
    return 'starwarsmemes/2.jpeg';
  } else if (num == 6) {
    return 'https://tenor.com/view/star-wars-obi-wan-hello-there-hi-there-hello-gif-19252932';
  } else if (num == 7) {
    return 'https://tenor.com/view/ive-got-a-really-good-feeling-about-this-solo-a-star-wars-story-gif-15109499';
  } else if (num == 8) {
    return 'starwarsmemes/3`.jpeg';
  } else if (num == 9) {
    return 'https://tenor.com/view/bad-feeling-han-solo-bad-intuition-gif-13875328';
  } else if (num == 10) {
    return 'https://tenor.com/view/pew-boba-fett-finger-guns-gif-12677445';
  } else if (num == 11) {
    return 'starwarsmemes/4.jpeg';
  } else if (num == 12) {
    return 'https://tenor.com/view/the-mandalorian-this-is-the-way-the-way-mandalorian-star-wars-gif-18999449';
  } else if (num == 13) {
    return 'starwarsmemes/5.jpeg';
  } else if (num == 14) {
    return 'starwarsmemes/6.jpeg';
  } else if (num == 15) {
    return 'starwarsmemes/7.jpeg';
  } else if (num == 16) {
    return 'starwarsmemes/8.jpeg';
  } else if (num == 17) {
    return 'starwarsmemes/9.jpeg';
  } else if (num == 18) {
    return 'starwarsmemes/10.jpeg';
  } else if (num == 19) {
    return 'starwarsmemes/11.jpeg';
  } else if (num == 20) {
    return 'starwarsmemes/12.jpeg';
  } else if (num == 21) {
    return 'starwarsmemes/13.jpeg';
  } else if (num == 22) {
    return 'starwarsmemes/14.jpeg';
  } else if (num == 23) {
    return 'starwarsmemes/15.jpeg';
  } else if (num == 24) {
    return 'starwarsmemes/16.jpeg';
  } else if (num == 25) {
    return 'starwarsmemes/17.jpeg';
  } else if (num == 26) {
    return 'starwarsmemes/18.jpeg';
  } else if (num == 27) {
    return 'starwarsmemes/19.jpeg';
  } else if (num == 28) {
    return 'starwarsmemes/20.jpeg';
  } else if (num == 29) {
    return 'starwarsmemes/21.jpeg';
  } else if (num == 30) {
    return 'starwarsmemes/22.jpeg';
  } else if (num == 31) {
    return 'starwarsmemes/23.jpeg';
  } else if (num == 32) {
    return 'starwarsmemes/25.jpeg';
  } else if (num == 33) {
    return 'starwarsmemes/24.jpeg';
  } else if (num == 34) {
    return 'starwarsmemes/26.jpeg';
  }
}

client.on('message', msg => {
    if (msg.content === 'darth help') {
      msg.reply('Type darth holocron for a random meme.');
    }
    else if (msg.content.toLowerCase() === 'hello there') {
      msg.reply('General Kenobi');
    } 
    else if (msg.content.toLowerCase() === 'show me the one whose safety deemed such destruction') {
      msg.reply('https://tenor.com/view/mandalorian-baby-yoda-hello-gif-19013340');
    }
    else if (msg.content.toLowerCase() === 'my powers have doubled since the last time we met') {
      msg.reply('Twice the pride double the fall');
    }
    else if (msg.content.toLowerCase() === 'i have the high ground') {
      msg.reply('you under estimate my power!');
    }
    else if (msg.content.toLowerCase() === 'senate') {
      msg.reply('Did you ever hear the Tragedy of Darth Plagueis the wise? I thought not. Its not a story the Jedi would tell you. Its a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Its ironic he could save others from death, but not himself.');
    }
    else if (msg.content.toLowerCase() === 'corndog senate') {
    msg.reply('Did you ever hear the Tragedy of Darth Corndog the wise? I thought not. Its a Corndog legend. Darth Corndog was a Dark Lord of the Corndog, so powerful and so wise he could use the Corndog to influence the Corndog to create Corndog... He had such a knowledge of the Corndog that he could even keep the Corndog he cared about from dying. The dark side of the Corndog is a pathway to many abilities some consider to be unnatural.');
    }
    else if (msg.content.toLowerCase() === 'clap') {
      msg.reply('So this is how liberty dies. With thunderous applause');
    }
    else if (msg.content .toLowerCase() === 'the senate will decide your fate') {
      msg.reply('I am the senate');
    }
    else if (msg.content.toLowerCase() === 'not yet') {
      msg.reply("It's treason then");
    }
    else if (msg.content.toLowerCase() === 'look at how old you have become') {
      msg.reply("Something far worse has happened to you");
    }
    else if (msg.content.toLowerCase() === 'darth holocron') {
      msg.reply(randomResponse(Math.floor(Math.random() * 34)));
    }
});
