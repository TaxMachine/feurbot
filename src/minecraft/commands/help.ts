import { MineCommand } from "../Command";
import { MineBot } from "../utils/types";

export abstract class Help extends MineCommand {
    constructor() {
        super('help', async (bot: MineBot, args: string[]) => {
            console.log(bot.commands)
            bot.chat('Commands: ' + bot.commands?.map(cmd => cmd.name).join(', '))
        })
    }
}