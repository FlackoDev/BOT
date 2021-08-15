//(Production) npm run start
//(Development) npm run dev

const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = "..";

require("dotenv").config();

/* ################################# */
let isPlaying = false
let isLoop = false

bot.on('ready', () => {
    bot.user.setActivity('Le Fiche Bianche', { type: 'WATCHING' })
    console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift();
    let user = message.member

    switch(command.toLowerCase()) {
        case 'vaffanchiulo' : {
            await callSong(user, command, message, "SONG.mp3")
            break;
        }
        case "fifa_17" : {
            await callSong(user, command, message, "FIFA_17.mp3")
            break;
        }
        case 'cinese' : {
            await callSong(user, command, message,  "ANDREA.mp3")
            break;
        }        
        case 'catafratto' : {
            message.channel.send("<@" + message.author.id + ">, COME ANDREA", {
                files: [{
                    attachment: __dirname + '/IMAGE/' + 'ANDREA.png',
                    name: 'ANDREA.png'
                }]
            })
            break;
        }
        
        case 'pizza' : {
            await callSong(user, command, message, "Pizza.mp3")
            break;
        }

        case 'andrea' : {
            await callSong(user, command, message, "BIANCO.mp3")
            break;
        }

        // Music things
        case "stop" : {
            if(user.voice.channel) {
                message.channel.send("SONG È STUPIDIE")
                let connection = await user.voice.channel.join()
                if(connection) {
                    console.log("Stopped a song (%s)", command)
                    connection.disconnect()
                }
            } else {
                message.channel.send("Devi essere in una chat vocale!")
            }
            break;
        }

        case "loop" : {
            if(user.voice.channel) {
                if(isLoop) {
                    isLoop = false
                    message.channel.send("Loop disattivato!")
                } else {
                    isLoop = true
                    message.channel.send("Loop attivato!")
                }
            } else {
                message.channel.send("Devi essere in una chat vocale!")
            }
            break;
        }

    }
});

/* ################################# */

async function callSong(user, command, message, songName) {
    if(user.voice.channel) {
        message.channel.send("SONG È STUPIDIE")
        let connection = await user.voice.channel.join()
        let disp = connection.play(__dirname + "/MUSIC/" + command)

        disp.on("start", () => {
            console.log("Start a song (%s)", command)
            isPlaying = true
        })
        disp.on("speaking", (speaking) => {
            if (!speaking) {
                if(isLoop) {
                    console.log('Looping song %s', songName)
                    connection.play(__dirname + "/MUSIC/" + songName)
                } else {
                    console.log("End a song (%s)", command)
                    isPlaying = false
                    connection.disconnect()
                }
            }
        });
    } else {
        message.channel.send("Devi essere in una chat vocale!")
    }
}

/*
    --FILE
    message.channel.send({
        files: [{
            attachment: __dirname + '',
            name: ''
        }]
    })

    --LINK
    message.channel.send({
        files: ['']
    })
*/

/* ################################# */

bot.login(process.env.TOKEN);
