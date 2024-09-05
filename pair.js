const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Maher_Zubair,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function SIGMA_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Maher_Zubair = Maher_Zubair({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Maher_Zubair.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Maher_Zubair.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Maher_Zubair.ev.on('creds.update', saveCreds)
            Pair_Code_By_Maher_Zubair.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Maher_Zubair.sendMessage(Pair_Code_By_Maher_Zubair.user.id, { text: "" + b64data });

               let SIGMA_MD_TEXT = `
╔═══════════════════════
𝙒𝙚𝙡𝙘𝙤𝙢𝙚 𝙩𝙤 𝙀𝙨 𝙏𝙚𝙖𝙢𝙨-𝙑2☠️☠️☠️☠️════════════════════╗
✅✅✅✅✅✅✅✅✅✅                                          
𝙀𝙎 𝙏𝙀𝘼𝙈𝙎-𝙑2 𝙋𝘼𝙄𝙍𝙀𝘿 𝙎𝙐𝘾𝘾𝙀𝙎𝙎𝙁𝙐𝙇𝙇𝙔
 ██████████████████████████████████████  ║
║ 𝙍𝙚𝙖𝙙 𝙩𝙝𝙚 𝙢𝙚𝙨𝙨𝙨𝙖𝙜𝙚 𝙗𝙚𝙡𝙤𝙬 🩷👇 █▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ ╔════════════════════════════════╗  ║
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❶ || 𝘾𝙧𝙚𝙖𝙩𝙤𝙧= 👑 𝙀𝙎 𝙏𝙀𝘼𝙈𝙎 𝙏𝙀𝘾𝙃 👑
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❷ || 𝙈𝙮 𝙬𝙝𝙖𝙩𝙨𝙖𝙥𝙥 𝘾𝙝𝙖𝙣𝙣𝙚𝙡👇 
> https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❸ || 𝘾𝙤𝙣𝙩𝙖𝙘𝙩 𝙈𝙚👇 
> https://wa.me/2349037524605
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
*2024-2099 ᴘᴀꜱᴄʜᴀʟ ᴊᴇ*
 ▬▬▬▬▬▬▬▬▬▬▬▬▬▬                        █▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ █▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
║                                             
║  © 𝙏𝙝𝙖𝙣𝙠𝙨 𝙛𝙤𝙧 𝙘𝙝𝙤𝙤𝙨𝙨𝙞𝙣𝙜 𝙀𝙎 𝙏𝙀𝘼𝙈𝙎-𝙑2                 
╚═══════════════════════════════════════════╝
       `
 await Pair_Code_By_Maher_Zubair.sendMessage(Pair_Code_By_Maher_Zubair.user.id,{text:SIGMA_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Maher_Zubair.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    SIGMA_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await SIGMA_MD_PAIR_CODE()
});
module.exports = router
