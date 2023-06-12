import { MineCommand } from "../Command"
import { MineBot } from "../utils/types"
import { argtable } from "../../constants"

export class TPS extends MineCommand {
    constructor() {
        super('tps', 'Displays the current TPS')
    }

    async run(bot: MineBot, args: string[]): Promise<void> {
        bot.chat('TPS: ' + argtable.tps)
    }
}