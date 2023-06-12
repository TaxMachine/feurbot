import { MineBot } from '../utils/types';
import { reconnect } from '../utils/autoreconnect';

export default async (bot: MineBot): Promise<void> => {
    bot.on('kicked', async (reason: string) => {
        console.log(`${bot.entity.username} was kicked from ${process.env.MINECRAFT_SERVER}:${process.env.MINECRAFT_PORT} for ${reason}`)
        setTimeout(async() => await reconnect(), 2000)
    })
}