import { SlashCommandBuilder } from '@discordjs/builders';
export interface Command {
    data: Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">;
    execute: (interaction: any) => Promise<void>;
}