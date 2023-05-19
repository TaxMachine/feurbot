import mineflayer from 'mineflayer';
import { config } from 'dotenv';

config();

import { TPS } from './minecraft/plugins/tps'
import { MineEvent } from './minecraft/Event';
import { MineCommand } from './minecraft/Command';

import { MineBot } from './minecraft/utils/types';

const initBot = async() => {
    const bot: MineBot = mineflayer.createBot({
        host: process.env.MINECRAFT_SERVER?.toString(),
        port: parseInt(process.env.MINECRAFT_PORT as string),
        username: process.env.MINECRAFT_MAIL as string,
        version: process.env.MINECRAFT_VERSION as string,
        auth: process.env.MINECRAFT_AUTH as 'mojang' | 'microsoft' | 'offline'
    })
    bot.loadPlugin(TPS as any);
    const events = await MineEvent.loadEvents();
    const commands = await MineCommand.loadCommands();
    await MineEvent.runEvents(events);
    bot.commands = commands;
}