import { MineBot } from "../utils/types"
import { MineCommand } from "../Command"


export default async (bot: MineBot): Promise<void> => {
    bot.on('chat', async (username: string, message: string) => {
        if (message == '' || username === bot.username) return
        const args = message.split(' ')
        const command = args.shift()?.toLowerCase()
        if (command) {
            await MineCommand.runCommand(bot.commands as MineCommand[], bot, command, args)
        }
    })
}