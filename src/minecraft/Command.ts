import fs from 'fs';
import { CommandError } from './utils/types';
import { MineBot } from './utils/types';
import { Help } from './commands/help';
import { TPS } from './commands/tps';

export abstract class MineCommand {
    name: string;
    description: string;
    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }

    abstract run(bot: MineBot, args: string[]): Promise<void>;

    static async loadCommands() {
        const commands: MineCommand[] = [];
        
        commands.push(new Help());
        commands.push(new TPS());
            
        return commands;
    }

    static async runCommand(commands: MineCommand[], bot: MineBot, name: string, args: string[] = []) {
        const command = commands.find(cmd => cmd.name === name);
        if (command) {
            await command.run(bot, args);
        } else throw new CommandError('Command not found');
    }
}