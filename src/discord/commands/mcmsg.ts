import { MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { Command } from '../Command';

export default {
    data: new SlashCommandBuilder()
        .setName('mcmsg')
        .setDescription('Send a private message to a player in Minecraft from discord')
        .addStringOption(option => 
            option.setName('player')
                .setDescription('The player to send the message to')
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('message')
                .setDescription('The message to send')
                .setRequired(true)
        ),
    async execute(interaction: any) {
        const player = interaction.options.getString('player');
        const message = interaction.options.getString('message');
        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Message Sent')
            .setDescription(`Message sent to ${player}`)
            .addFields(
                { name: 'Player', value: player },
                { name: 'Message', value: message },
            )
            .setTimestamp()
        await interaction.reply({ embeds: [embed] });
    }
} as Command;