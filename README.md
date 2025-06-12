# PraporBot

PraporBot is a Discord-integrated chatbot that uses OpenAI to simulate the personality of Prapor, a character from Escape from Tarkov. Designed for fans of the game, it engages in Tarkov-related discussions, provides helpful information, and responds with in-character dialogue that reflects Prapor's personality and tone.

## What It Does

- Responds to Escape from Tarkov themed questions and discussions
- Uses OpenAI's GPT model to generate accurate and context-aware responses
- Mimics the voice, slang, and style of Prapor from the game
- Helps users find in-game item info, quests, trader interactions, and lore through natural conversation

## Features

- Easy to set up on any Discord server
- Supports context-aware responses to Tarkov-specific queries
- Can be expanded to support other characters or factions
- Great for community servers and roleplay immersion

## How It Works

PraporBot uses the OpenAI API to generate dynamic responses to messages that mention Escape from Tarkov. A prompt template guides the bot to stay in character as Prapor, making interactions feel like you're talking to the actual trader.

It listens for trigger words or messages and then processes the input through the GPT API before responding in Discord.

## Setup Instructions

1. Clone this repository:
   ```bash
   git clone https://github.com/Teerasak-Mairoddee/PraporBot.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and add the following variables:
   ```
   DISCORD_TOKEN=your_discord_bot_token
   OPENAI_API_KEY=your_openai_key
   ```

4. Run the bot:
   ```bash
   node index.js
   ```

## Use Cases

- Community engagement in Escape from Tarkov Discord servers
- Roleplay interaction with in-game characters
- Quick lookups and help with in-game mechanics through conversation

## Expansion Ideas

- Add other traders like Therapist, Fence, or Mechanic
- Integrate real-time in-game data from Tarkov API sites
- Enable quest tracking or item recommendation features
- Add lore snippets or trivia for added immersion

## Note

This is a fan project. All rights to characters and game content belong to Battlestate Games. This bot is intended for entertainment and educational use only.

## Connect With Me

To learn more or contribute to my projects, visit:  
https://linktr.ee/teerasakmairoddee
