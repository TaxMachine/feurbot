import { Client } from "discord.js";
import { MineBot } from "../../minecraft/utils/types";

export default async function(client: Client, bot: MineBot) {
    client.on("messageCreate", async message => {
        if (message.author.bot) return;
        if (message.channel.id !== process.env.BRIDGE_ID as string) return;

        bot.chat(`[Discord] ${message.author.username} > ${message.content}`)
    })
}