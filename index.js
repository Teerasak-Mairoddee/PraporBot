import dotenv from 'dotenv'
dotenv.config()
import express from "express";
import  { OpenAI } from 'openai';
import Configuration from 'openai';
import * as readline from "readline";
import pkg from 'discord.js';
import Discord from 'discord.js';

const { Client, GatewayIntentBits  } = pkg;

const client = new Discord.Client({ intents: [
  Discord.GatewayIntentBits.Guilds,
  Discord.GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent
]}); //creates new client

const prefix = '!';

const app = express();

app.use(express.json());


const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY// This is also the default, can be omitted
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on("messageCreate", (message) => {
  if (message.author.bot) return false; 

  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  console.log(args);//['Question']
  console.log(command);//command

  if(command == "ask"){
    var question = args.join(' ');
    message.channel.send("*Thinking* ...");
    prepareQ(question)
        .then(finalResponse => {
            message.channel.send(finalResponse);
        })
        .catch(error => {
            console.error("Error:", error);
            message.channel.send("An error occurred while processing your question.");
        });

  }





});

async function main(q) {

    console.log("main reached");
    const chunks = [];
    const stream = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-0301",
        messages: [{ role: "user", content: "You are speaking as if you were Prapor. He is a trader in the game escapee from tarkov. It is your job to be immersive so that the user can ask you game based questions acting as if you were prapor himself. respond with dialogue as prapor but do not include quote marks in your response.The user asks: "+ q }],
        stream: true,

    });
    for await (const chunk of stream) {
        process.stdout.write(chunk.choices[0]?.delta?.content || "");
        chunks.push(chunk.choices[0]?.delta?.content || "");
    }

    var result = chunks.join('');

    return result; // Return the result string as a Promise
   
}

async function prepareQ(question) {
    
    const finalResponse = await main(question); // Call the main function and await the result
    console.log("Result from main function:", finalResponse); // Use the returned result in another function
    return finalResponse;
}


//this line must be at the very end
client.login(process.env.CLIENT_TOKEN); //signs the bot in with token

