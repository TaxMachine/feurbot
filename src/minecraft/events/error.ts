import { reconnect } from '../utils/autoreconnect';
import { MineBot } from '../utils/types';
export default async (bot: MineBot): Promise<void> => {
    bot.on('error', async (err: Error) => {
        console.log(err)
        setTimeout(async() => await reconnect(), 2000)
    })
}