import { readdirSync } from 'fs';

export const events = readdirSync(`${__dirname}/events/`).filter(file => file.endsWith('.ts'));