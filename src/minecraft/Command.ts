import fs from 'fs';
import { CommandError } from './utils/types';
import { MineBot } from './utils/types';

export abstract class MineCommand {
    name: string;
    func: ((bot: MineBot, args: string[]) => Promise<void>);
    constructor(name: string, func: (bot: MineBot, args: string[]) => Promise<void>) {
        this.name = name;
        this.func = func;
    }

    abstract run(bot: MineBot, args: string[]): Promise<void>;

    static async loadCommands() {
        const commands: MineCommand[] = [];
        
        const files = fs.readdirSync('./commands');
        for (const file of files) {
            const cmdClass = (await import(`./commands/${file}`)).default;
            const cmd = new cmdClass(); 
            commands.push(cmd);
        }
            
        return commands;
    }

    static async runCommand(commands: MineCommand[], bot: MineBot, name: string, args: string[] = []) {
        const command = commands.find(cmd => cmd.name === name);
        if (command) {
            await command.run(bot, args);
        } else throw new CommandError('Command not found');
    }
}