const botPoll = require('strawpoll-bots').default;
const { join } = require('path');
console.log("Iniciando bot :)");


// Args: (url, optionID, protection, socksFilePath, amount)
botPoll('https://www.strawpoll.me/f3eepj8ro', 500, true, join(__dirname, 'socks.txt'));
