interface Bot {
    time: {
        age: string;
    };
    getTps: () => number;
}

const TPS = async (bot: Bot) => {
    let time = parseInt(bot.time.age);
    const calcTps: number[] = [];

    const run = (bot: Bot) => {
        time = parseInt(bot.time.age);
        setTimeout(() => {
            const diff = parseInt(bot.time.age) - time;
            calcTps.push(diff);
            if (calcTps.length > 20) {
                calcTps.shift();
            }
            run(bot);
        }, 1000);
    };

    run(bot);

    bot.getTps = (): number => {
        return calcTps.filter(tps => tps === 20).length;
    }
};

export {
    TPS
};