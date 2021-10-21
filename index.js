//(Production) npm run start
//(Development) npm run dev

const Discord = require("discord.js");
const bot = new Discord.Client();
const mm = require('music-metadata');

const prefix = "-";

require("dotenv").config();

/* ################################# */
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
            await callSong(user, command, message, "SONG.mp3", true)
            break;
        }
        case "fifa17" : {
            await callSong(user, command, message, "FIFA_17.mp3", true)
            break;
        }
        case 'cinese' : {
            await callSong(user, command, message,  "ANDREA.mp3", true)
            break;
        }    
        case 'fame' : {
            await callSong(user, command, message,  "fame.mp3", true)
            break;
        }  
        case 'raulo' : {
            await callSong(user, command, message,  "raulo.mp3", true)
            break;
        } 
        case 'nonna_macu' : {
            message.channel.send("<@" + message.author.id + ">, ECCOTI LA NONNA DI MACUGLIA", {
                files: [{
                    attachment: __dirname + '/IMAGE/' + 'nonna.gif',
                    name: 'nonna.gif'
                }]
            })
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
        case "feng":{
            message.channel.send("<@" + message.author.id + ">, TI PRESENTO QUEL NABBO DI FENG", {
                files: [{
                    attachment: __dirname + '/IMAGE/' + 'feng.png',
                    name: 'feng.png'
                }]
            })
            break;
        }
        case 'pizza' : {
            await callSong(user, command, message, "Pizza.mp3", true)
            break;
        }
        case 'andrea' : {
            await callSong(user, command, message, "Bianco.mp3", true)
            break;
        }
        case 'jackie' : {
            message.channel.send("<@" + message.author.id + ">, ECCOTI IL PAPÀ DI JACKIE", {
                files: [{
                    attachment: __dirname + '/IMAGE/' + 'jackie.gif',
                    name: 'jackie.gif'
                }]
            })
            break;
        }
        case 'willi' : {
            message.channel.send("<@" + message.author.id + ">, BECCATI UN **WILLI**", {
                files: [{
                    attachment: __dirname + '/IMAGE/' + 'Willi.gif',
                    name: 'Willi.gif'
                }]
            }).then(async () => {
                await callSong(user, command, message, "Willi.mp3", true)
            })
            break;
        }
        case "miky" : {
            message.channel.send("MIKY SI FA ").then((sent) => {
                setTimeout(() => {
                  sent.delete();
                }, 1000 * 5);
            }).then(async () => {
                await callSong(user, command, message, "Sega_Tramurt.mp3", false)
            })
            break;
        }

        case "vola" : {
            message.channel.send("<@" + message.author.id + ">, ECCO COME VOLARE", {
                files: [{
                    attachment: __dirname + '/VIDEO/' + 'negro_vola.mp4',
                    name: 'negro_vola.mp4'
                }]
            })
            break;
        }
        case 'fifa20' : {
            await callSong(user, command, message, "FIFA20.mp3", true)
            break;
        }
        case "giusè" : {
            await callSong(user, command, message, "Giuse.mp3", true)
            break;
        }
        
        case "mussolini" : {
            await callSong(user, command, message, "bello.mp3", true)
            break;
        }
        
        case "mark's_pizzeria" : {
            message.channel.send("<@" + message.author.id + ">, ECCOTI LA MIGLIORE PIZZERIA ", {
                files: [{
                    attachment: __dirname + '/VIDEO/' + 'mark.mp4',
                    name: 'mark.mp4'
                }]
            })
            break;
        }
        case "er(mano)" : {
            message.channel.send("<@" + message.author.id + ">, ECCOTI IL CUOCERE", {
                files: [{
                    attachment: __dirname + '/IMAGE/' + 'er(mano).png',
                    name: 'er(manno).png'
                }]
            })
            break;
        }
        case "skopando" : {
            await callSong(user, command, message, "skopo.mp3", true)
            break;
        }
        
        case "neopatentato" : {
            await callSong(user, command, message, "neopatentato.mp3", true)
            break;
        }
        case "giovedì" : {
            await callSong(user, command, message, "for_gucci_boy.mp3", true)
            break;
        }
        case "ivano" : {
            await callSong(user, command, message, "ivano.mp3", true)
            break;
        }
        case "catzo" : {
            await callSong(user, command, message, "Il_Collegio_Tremon.mp3", true)
            break;
        }
        case "arrapay" : {
            await callSong(user, command, message, "BABY_EARRAPE_Tremon.mp3", true)
            break;
        }
        case "maxplanck" : {
            await callSong(user, command, message, "speciaERR.mp3", true)
            break;
        }
        /* ################################# */
        // Usefull things
        /* ################################# */

        case "aiudame" : {
            const embed = new Discord.MessageEmbed({
                "title": "Aiudame",
                "description" : "Ecct i comandi GUCCI \nPrefix comandi -> ' **" + prefix + "** '\n\n\n **Lista Comandi**",
                "color": 53380,
                "fields": [
                    {
                    "name": "vaffanchiulo",
                    "value": "‎",
                    "inline": true
                    },
                    {
                    "name": "fifa17",
                    "value": "‎",
                    "inline": true
                    },
                    {
                    "name": "cinese",
                    "value": "‎",
                    "inline": true
                    },
                    {
                    "name": "fame",
                    "value": "‎",
                    "inline": true
                    },
                    {
                    "name": "raulo",
                    "value": "‎",
                    "inline": true
                    },
                    {
                    "name": "nonna_macu",
                    "value": "‎",
                    "inline": true
                    },
                    {
                    "name": "catafratto",
                    "value": "‎",
                    "inline": true
                    },
                    {
                    "name": "feng",
                    "value": "‎",
                    "inline": true
                    },
                    {
                    "name": "pizza",
                    "value": "‎",
                    "inline": true
                    },
                    {
                    "name": "andrea",
                    "value": "‎",
                    "inline": true
                    },
                    {
                    "name": "jackie",
                    "value": "‎",
                    "inline": true
                    },
                    {
                    "name": "willi",
                    "value": "‎",
                    "inline": true
                    },
                    {
                    "name": "miky",
                    "value": "‎",
                    "inline": true
                    },
                    {
                    "name": "vola",
                    "value": "‎",
                    "inline": true
                    },
                    {
                    "name": "fifa20",
                    "value": "‎",
                    "inline": true
                    },
                    {
                    "name": "giusè",
                    "value": "‎",
                    "inline": true
                    },
                    {
                    "name": "mussolini",
                    "value": "‎",
                    "inline": true
                    },
                    {
                    "name": "mark's_pizzeria",
                    "value": "‎",
                    "inline": true
                    },
                    {
                    "name": "er(mano)",
                    "value": "‎",
                    "inline": true
                    },
                    {
                    "name": "skopando",
                    "value": "‎",
                    "inline": true
                    },
                    {
                    "name": "neopatentato",
                    "value": "‎",
                    "inline": true
                    },
                    {
                    "name": "ivano",
                    "value": "‎",
                    "inline": true
                    },
                    {
                    "name": "catzo",
                    "value": "‎",
                    "inline": true
                    },
                    {
                    "name": "giovedì",
                    "value": "‎",
                    "inline": true
                    },
                    {
                    "name": "arrapay",
                    "value": "‎",
                    "inline": true
                    },
                    {
                    "name": "maxplanck",
                    "value": "‎",
                    "inline": true
                    },
                    {
                    "name": "aiudame",
                    "value": "‎",
                    "inline": true
                    }
                ]
            });
            
            message.channel.send(embed)
            break;
        }

        /* ################################# */
        // Music things
        /* ################################# */

        case "stop" : {
            if(user.voice.channel) {
                message.channel.send("SONG È STUPIDIE")
                let connection = await user.voice.channel.join()
                if(connection) {
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
                    message.channel.send("Loop disattivato!").then((sent) => {
                        setTimeout(() => {
                          sent.delete();
                        }, 1000 * 2);
                    });
                    console.log("Loop disactivated")
                } else {
                    isLoop = true
                    message.channel.send("Loop Attivato!").then((sent) => {
                        setTimeout(() => {
                          sent.delete();
                        }, 1000 * 2);
                    });
                    console.log("Loop activated")
                }
            } else {
                message.channel.send("Devi essere in una chat vocale!")
            }
            break;
        }
    }
});

/* ################################# */

async function callSong(user, command, message, songName, sendSongText) {
    if(user.voice.channel) {
        if(sendSongText) {
            message.channel.send("SONG È STUPIDIE").then((sent) => {
                setTimeout(() => {
                  sent.delete();
                }, 1000 * 2);
            });
        }

        let connection = await user.voice.channel.join()
        let disp = connection.play(__dirname + "/MUSIC/" + songName)

        let metadata = await mm.parseFile(__dirname + "/MUSIC/" + songName)
        let duration = metadata.format.duration * 1000

        disp.on("start", () => {
            console.log("Start a song (%s)", command)
            isPlaying = true
        })

        let intr = setInterval(function() {
            if(isLoop) {
                connection.play(__dirname + "/MUSIC/" + songName)
                console.log("Looping a song (%s)", command)
            } else {
                clearInterval(intr)
                connection.disconnect()
                console.log("End a song (%s)", command)
            }
        }, duration + 1000)
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
