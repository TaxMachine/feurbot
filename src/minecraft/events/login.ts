import { MineBot } from '../utils/types';
export default async (bot: MineBot): Promise<void> => {
    bot.on('login', async () => {
        console.log(`${bot.entity.username} logged in ${process.env.MINECRAFT_SERVER}:${process.env.MINECRAFT_PORT}`)
    })
}