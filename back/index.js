const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

// Discord.js Import
const { Client, GatewayIntentBits, User } = require('discord.js')
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.MessageContent,
    ]
})

// Discord.js Events

client.on("ready", () => {
    console.log("Ready!")
});

client.on("messageCreate", (messages) => {
    if (messages.content.startsWith("!data")) {
        console.log("Execute Data");
        if (messages.content.includes("deleteChannel")) {
            messages.channel.delete();
        }
        if (messages.content.includes("deleteMessage")) {
            const number_of_message = messages.content.split(" ")[2];
            messages.channel.bulkDelete(number_of_message + 1);
        }
        if (messages.content.includes("addChannel")) {
        }
    }
});

client.login("MTAyOTE3MTQwMjYyMTg2NjAyNQ.Gn3vHa.DksK43P9hFwG0vStHJT75lJUYGgz6kn-OtP-Eg");

// Express.js Events
app.get("/api", (req, res) => {
    res.json({ message2: "Hello World!", message: "Hello from server!" });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
