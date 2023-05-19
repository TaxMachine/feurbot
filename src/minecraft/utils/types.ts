import { Bot } from 'mineflayer';
import { MineCommand } from '../Command';

export interface MineBot extends Bot {
    commands?: MineCommand[];
}



export class CommandError extends Error {
    message: string;
    constructor(message: string) {
        super(message);
        this.message = message;
    }
}