const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.on('ready', readyDiscord)

function readyDiscord() {
    console.log('im working')
}

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'hello there') {
      msg.reply('General Kenobi');
    }
});

client.on('message', msg => {
    if (msg.content === 'show me the one whose safety deemed such destruction') {
      msg.reply('https://tenor.com/view/mandalorian-baby-yoda-hello-gif-19013340');
    }
});


client.on('message', msg => {
    if (msg.content === 'my powers have doubled since the last time we met') {
      msg.reply('Twice the pride double the fall');
    }
});  

client.on('message', msg => {
    if (msg.content === 'I have the high ground') {
      msg.reply('you under estimate my power!');
    }
});

client.on('message', msg => {
    if (msg.content === 'senate') {
      msg.reply('Did you ever hear the Tragedy of Darth Plagueis the wise? I thought not. Its not a story the Jedi would tell you. Its a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Its ironic he could save others from death, but not himself.');
    }
});

client.on('message', msg => {
  if (msg.content === 'corndog senate') {
    msg.reply('Did you ever hear the Tragedy of Darth Corndog the wise? I thought not. Its a Corndog legend. Darth Corndog was a Dark Lord of the Corndog, so powerful and so wise he could use the Corndog to influence the Corndog to create Corndog... He had such a knowledge of the Corndog that he could even keep the Corndog he cared about from dying. The dark side of the Corndog is a pathway to many abilities some consider to be unnatural.');
  }
});

client.on('message', msg => {
    if (msg.content === 'clap') {
      msg.reply('So this is how liberty dies. With thunderous applause');
    }
});

client.on('message', msg => {
    if (msg.content === 'The senate will decide your fate' || msg.content === 'the senate will decide your fate') {
      msg.reply('I am the senate');
    }
});

client.on('message', msg => {
    if (msg.content === 'Not yet' || msg.content === 'not yet') {
      msg.reply("It's treason then");
    }
});




