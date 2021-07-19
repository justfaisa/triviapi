"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require('discord.js')
const bot = new Discord.Client()
const trivia = require("triviapi")

bot.on("message", async (message) => {
    if (message.content === ">anime") {
      
        let i = 0

        let trivia = trivia.anime();

        const Embed = new Discord.MessageEmbed()
             .setTitle(trivia.question)
             .setDescription(trivia.options.map(opt=>{
                i++;
                return `${i} - ${opt}\n`
             }))
             .setColor('RANDOM')
             .setFooter(`Category: ${trivia.category} | Difficulty : ${trivia.difficulity}`)
             message.channel.send(Embed)
            try{
                let msgs = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id,{ time: 15000, max: 1, errors: ["time"] })
                 if(parseInt(msgs.first().content)==trivia.correct_options){
                     return message.channel.send('Bingo! You got it correct!')
                 }else{
                    return message.channel.send(`Oh No! Incorrect Answer. Write Answer Was ` + '`' +`${trivia.answer}`+ '`')
                 }
            }catch(e){
                console.log(e)
                return message.channel.send("Time's Up. Try Again")
            }
}});

bot.login("very_secret_token")
