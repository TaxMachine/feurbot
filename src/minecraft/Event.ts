import fs from 'fs';

export class MineEvent {
    name: string;
    func: Promise<void>;
    constructor(name: string, func: Promise<void>) {
        this.name = name;
        this.func = func;
    }

    async run() {
        await this.func;
    }

    static async loadEvents() {
        const events: MineEvent[] = [];
        const files = fs.readdirSync('./events');
        for (const file of files) {
            const event = await import(`./events/${file}`);
            events.push(new MineEvent(file.split('.')[0] as string, event.default));
        }
        return events;
    }

    static async runEvents(events: MineEvent[]) {
        for (const event of events) {
            await event.run();
        }
    }

    static async run() {
        const events = await MineEvent.loadEvents();
        await MineEvent.runEvents(events);
    }
}