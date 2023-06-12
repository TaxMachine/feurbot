import { Bot } from "mineflayer";

export class Tps {
    time: number;
    calcTps: number[];

    constructor(bot: Bot) {
        this.time = bot.time.age;
        this.calcTps = [];
    }

    async checktps(bot: Bot): Promise<void> {
        this.time = bot.time.age;
        setTimeout(() => {
            const diff = bot.time.age - this.time;
            this.calcTps.push(diff);
            if (this.calcTps.length > 20) {
                this.calcTps.shift();
            }
            this.checktps(bot);
        }, 1000);
    };

    async getTps(): Promise<number> {
        return this.calcTps.filter(tps => tps === 20).length;
    }
}