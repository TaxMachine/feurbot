import { Client } from "discord.js";
import { MineBot } from "./minecraft/utils/types";
import { REST } from "@discordjs/rest";
import { Webhook } from "./minecraft/utils/webhook";

interface ArgTable {
    tps: number;
    players: string[];
    bot: MineBot | null;
    client: Client | null;
    rest: REST | null;
    initBot: () => Promise<void>;
    webhook: Webhook | null;
}

export let argtable: ArgTable = {
    tps: 0,
    players: [],
    bot: null,
    client: null,
    rest: null,
    initBot: async() => {},
    webhook: null
}