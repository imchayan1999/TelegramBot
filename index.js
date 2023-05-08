const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
const axios = require('axios');
require('dotenv').config();
const bot = new Telegraf(process.env.BOT_TOKEN);

try {
bot.start((ctx) => ctx.reply('Welcome Welcome Welcome. Swaagat hai aapka'));

bot.hears('hi', (ctx)=> ctx.reply('Heyyllooo'));

bot.on(message('sticker'), (ctx) => ctx.reply('🤗'));

bot.command('githubRandom', async (ctx) => {
    const response = await axios.get('https://raw.githubusercontent.com/imchayan1999/DS-ALGO/main/Array/kthLargestElementUsingMaxHeap.cpp');
    ctx.reply(response.data);
});

bot.on(message('text'), (ctx) => {
    console.log(ctx.update.message);
    if(ctx.update.message.text == 'Let us get some coffee') {
        ctx.reply('Sure. But you will have to pay. Okay?');
    }
    else {
        ctx.reply('I do not understand, human')
    }
});

bot.launch();

} catch {
    console.log("unexpected command");
}