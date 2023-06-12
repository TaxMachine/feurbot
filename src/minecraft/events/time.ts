import { argtable } from "../../constants"
import { Tps } from "../utils/tps"
import { MineBot } from "../utils/types"

export default async (bot: MineBot): Promise<void> => {
    bot.on('time', async () => {
        let tps = new Tps(bot)
        argtable.tps = await tps.getTps()
    })
}