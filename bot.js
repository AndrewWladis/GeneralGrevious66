const Discord = require('discord.js');
const client = new Discord.Client();
const DIG = require("discord-image-generation");
const cors = require('cors')({ origin: true});
var starwars = require('starwars');
const cheerio = require('cheerio');
const getUrls = require('get-urls');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

client.login(process.env.BOT_TOKEN);

client.on('ready', readyDiscord)

function readyDiscord() {
  console.log('im working')
}

function randomResponse(num) {
  let exampleEmbed = new Discord.MessageAttachment(`starwarsmemes/${num}.jpeg`);
  return exampleEmbed;
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
      msg.reply(randomResponse(Math.floor(Math.random() * 124)));
    }
});
