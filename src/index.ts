import mineflayer from 'mineflayer';
import { config } from 'dotenv';
import { Client, Intents, Collection } from 'discord.js';

config();

import { MineEvent } from './minecraft/Event';
import { MineCommand } from './minecraft/Command';
import { argtable } from './constants';

import { REST } from '@discordjs/rest';
import { Webhook } from './minecraft/utils/webhook';

argtable.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS, 
        Intents.FLAGS.GUILD_MEMBERS, 
        Intents.FLAGS.GUILD_BANS, 
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, 
        Intents.FLAGS.GUILD_INTEGRATIONS, 
        Intents.FLAGS.GUILD_WEBHOOKS, 
        Intents.FLAGS.GUILD_INVITES, 
        Intents.FLAGS.GUILD_VOICE_STATES, 
        Intents.FLAGS.GUILD_PRESENCES, 
        Intents.FLAGS.GUILD_MESSAGES, 
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS, 
        Intents.FLAGS.GUILD_MESSAGE_TYPING, 
        Intents.FLAGS.DIRECT_MESSAGES, 
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, 
        Intents.FLAGS.DIRECT_MESSAGE_TYPING, 
        Intents.FLAGS.GUILD_SCHEDULED_EVENTS
    ]
});

argtable.rest = new REST({ version: '9' }).setToken(process.env.DISCORD_TOKEN as string);
argtable.webhook = new Webhook(process.env.DISCORD_WEBHOOK as string);
argtable.initBot = async() => {
    argtable.bot = mineflayer.createBot({
        host: process.env.MINECRAFT_SERVER?.toString(),
        port: parseInt(process.env.MINECRAFT_PORT as string),
        username: process.env.MINECRAFT_MAIL as string,
        version: process.env.MINECRAFT_VERSION as string,
        auth: process.env.MINECRAFT_AUTH as 'mojang' | 'microsoft' | 'offline'
    })
    const events = await MineEvent.loadEvents();
    const commands = await MineCommand.loadCommands();
    await MineEvent.runEvents(events);
    argtable.bot.commands = commands;
}

argtable.client.login(process.env.DISCORD_TOKEN as string);
setTimeout(async() => await argtable.initBot(), 2000)