import { Player } from "mineflayer";
import { MineBot } from "../utils/types";
import { argtable } from "../../constants";

export default async (bot: MineBot): Promise<void> => {
    bot.on('playerLeft', async (player: Player) => {
        if (player.username == bot.username) return;
        console.log(`${player.username} left the game!`)
        argtable.webhook?.leave(player.username);
    })
}