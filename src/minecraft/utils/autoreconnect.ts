import { argtable } from "../../constants";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function reconnect(): Promise<void> {
    await sleep(2000);
    await argtable.initBot();
}