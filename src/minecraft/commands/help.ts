import { MineCommand } from "../Command";
import { MineBot } from "../utils/types";

export class Help extends MineCommand {
    constructor() {
        super('help', 'Displays help for a command')
    }

    async run(bot: MineBot, args: string[]): Promise<void> {
        if (args.length > 0) {
            const command = bot.commands?.find(cmd => cmd.name === args[0])
            if (command) bot.chat('Help for ' + command.name + ': ' + command.description)
            else bot.chat('Command not found')
        } else bot.chat('Commands: ' + bot.commands?.map(cmd => cmd.name).join(', '))
    }
}