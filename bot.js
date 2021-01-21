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
    return 'https://tenor.com/view/obi-wan-i-will-do-what-i-must-starwars-gif-11094969';
  } else if (num == 2) {
    return 'https://tenor.com/view/star-wars-anakin-this-is-where-the-fun-begins-gif-13380207';
  } else if (num == 3) {
    return 'https://tenor.com/view/star-wars-obi-wan-hello-there-hi-there-hello-gif-19252932';
  } else if (num == 4) {
    return 'https://tenor.com/view/ive-got-a-really-good-feeling-about-this-solo-a-star-wars-story-gif-15109499';
  } else if (num == 5) {
    return 'https://tenor.com/view/bad-feeling-han-solo-bad-intuition-gif-13875328';
  } else if (num == 6) {
    return 'https://tenor.com/view/pew-boba-fett-finger-guns-gif-12677445';
  } else if (num == 7) {
    return 'https://tenor.com/view/the-mandalorian-this-is-the-way-the-way-mandalorian-star-wars-gif-18999449';
  }
}


client.on('message', msg => {
    if (msg.content.toLowerCase() === 'hello there') {
      msg.reply('General Kenobi');
    } 
    else if (msg.content === 'show me the one whose safety deemed such destruction') {
      msg.reply('https://tenor.com/view/mandalorian-baby-yoda-hello-gif-19013340');
    }
    else if (msg.content === 'my powers have doubled since the last time we met') {
      msg.reply('Twice the pride double the fall');
    }
    else if (msg.content === 'I have the high ground') {
      msg.reply('you under estimate my power!');
    }
    else if (msg.content === 'senate') {
      msg.reply('Did you ever hear the Tragedy of Darth Plagueis the wise? I thought not. Its not a story the Jedi would tell you. Its a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Its ironic he could save others from death, but not himself.');
    }
    else if (msg.content === 'corndog senate') {
    msg.reply('Did you ever hear the Tragedy of Darth Corndog the wise? I thought not. Its a Corndog legend. Darth Corndog was a Dark Lord of the Corndog, so powerful and so wise he could use the Corndog to influence the Corndog to create Corndog... He had such a knowledge of the Corndog that he could even keep the Corndog he cared about from dying. The dark side of the Corndog is a pathway to many abilities some consider to be unnatural.');
    }
    else if (msg.content === 'clap') {
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
    else if (msg.content.toLowerCase() === 'holocron') {
      msg.reply(randomResponse(Math.floor(Math.random() * 8)));
    }
});
