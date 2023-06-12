import { post } from 'superagent';
import { Color } from './color';

export class Webhook {
    webhook: string;
    constructor(webhook: string) {
        this.webhook = webhook;
    }

    async join(username: string) {
        await post(this.webhook)
            .send({
                embeds: [
                    {
                        title: `${username} joined the server!`,
                        color: new Color(0, 182, 0).toDecimal()
                    }
                ],
                username: username,
                avatar_url: `https://minotar.net/avatar/${username}`
            })
            .set('Content-Type', 'application/json');
    }

    async leave(username: string) {
        await post(this.webhook)
            .send({
                embeds: [
                    {
                        title: `${username} left the server!`,
                        color: new Color(182, 0, 0).toDecimal()
                    }
                ],
                username: username,
                avatar_url: `https://minotar.net/avatar/${username}`
            })
            .set('Content-Type', 'application/json');
    }

    async chat(username: string, message: string) {
        await post(this.webhook)
            .send({
                content: `**${username}** > ${message}`,
                username: username,
                avatar_url: `https://minotar.net/avatar/${username}`
            })
            .set('Content-Type', 'application/json');
    }
}