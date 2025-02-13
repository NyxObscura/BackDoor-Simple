require("./all/global")

const func = require(global.x00b1([
    46,  47,  97, 108, 108,
    47, 112, 108,  97,  99,
   101
 ]))
const readline = require(global.x00b1([
    114, 101,  97,
    100, 108, 105,
    110, 101
  ]))
const yargs = require(global.x00b1([
    121,  97, 114, 103,
    115,  47, 121,  97,
    114, 103, 115
  ]))
const _ = require(global.x00b1([ 108, 111, 100, 97, 115, 104 ]))
const usePairingCode = true
const question = (text) => {
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})
return new Promise((resolve) => {
rl.question(text, resolve)
})}


async function startSesi() {
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState(`./session`)
const { version, isLatest } = await fetchLatestBaileysVersion()

console.log(chalk.white.bold(`${global.x00b1([10240,10240,10240,10240,10240,10240,10240,10240,10368,10260,10377,10244,10266,10377,10304,10368,10432,10240,10240,10240,10240,10240,10240,10240,10240,10240,10240,10240,10240,10,10240,10240,10240,10240,10240,10240,10240,10240,10424,10240,10426,10340,10260,10485,10495,10495,10487,10495,10487,10466,10436,10240,10240,10240,10240,10240,10240,10240,10240,10,10240,10240,10240,10240,10240,10240,10240,10240,10400,10259,10338,10269,10266,10249,10249,10249,10265,10267,10303,10495,10495,10327,10372,10304,10240,10240,10240,10304,10240,10,10240,10240,10240,10240,10240,10240,10240,10240,10268,10440,10336,10258,10408,10241,10240,10240,10240,10368,10244,10248,10299,10495,10308,10291,10308,10240,10240,10359,10304,10,10240,10240,10240,10240,10240,10240,10240,10460,10416,10401,10276,10432,10248,10420,10368,10436,10260,10243,10250,10374,10240,10248,10431,10436,10495,10436,10464,10343,10495,10,10240,10240,10240,10240,10368,10276,10308,10427,10243,10240,10240,10248,10241,10240,10240,10240,10400,10276,10404,10304,10289,10247,10492,10495,10495,10495,10365,10471,10318,10,10240,10240,10240,10240,10344,10394,10450,10311,10240,10240,10240,10296,10240,10248,10257,10304,10240,10240,10240,10377,10268,10464,10495,10495,10495,10367,10485,10367,10419,10,10240,10240,10368,10304,10428,10305,10384,10353,10304,10240,10240,10264,10304,10240,10256,10241,10240,10240,10432,10482,10490,10495,10495,10495,10495,10495,10303,10267,10241,10,10240,10240,10296,10404,10326,10485,10251,10240,10424,10471,10432,10304,10240,10240,10240,10240,10240,10400,10327,10470,10494,10431,10479,10491,10495,10247,10240,10240,10240,10,10240,10240,10240,10264,10279,10312,10354,10404,10479,10495,10311,10377,10481,10454,10486,10490,10495,10294,10377,10447,10416,10486,10495,10495,10255,10240,10240,10240,10240,10,10240,10240,10240,10336,10390,10443,10333,10299,10470,10444,10495,10486,10495,10493,10495,10495,10495,10367,10335,10265,10438,10360,10251,10368,10410,10370,10240,10240,10240,10,10240,10240,10432,10360,10375,10272,10316,10258,10316,10299,10445,10265,10427,10495,10495,10495,10495,10495,10495,10335,10487,10454,10449,10447,10345,10252,10240,10240,10240,10,10288,10313,10240,10240,10248,10402,10305,10240,10275,10244,10440,10291,10302,10486,10427,10492,10441,10495,10335,10251,10255,10418,10240,10240,10240,10240,10240,10240,10240,10,10240,10257,10276,10244,10258,10275,10259,10276,10484,10246,10248,10244,10240,10265,10290,10278,10300,10367,10355,10276,10340,10462,10240,10256,10278,10240,10240,10240,10240,10,10240,10240,10240,10240,10240,10240,10240,10240,10241,10258,10370,10248,10377,10249,10405,10258,10400,10247,10240,10368,10439,10440,10470,10240,10240,10240,10240,10240,10240,10,10240,10240,10240,10240,10240,10240,10240,10240,10240,10240,10240,10417,10340,10258,10250,10297,10243,10240,10240,10240,10248,10299,10241,10240,10240,10240,10240,10240,10240,10,10240,10240,10240,10240,10240,10240,10240,10240,10240,10240,10240,10240,10311,10240,10240,10311,10240,10240,10240,10240,10240,10240,10240,10240,10240,10240,10240,10240,10240,10,10240,10240,10240,10240,10240,10240,10240,10240,10240,10240,10240,10264,10242,10256,10250,10241,10240,10240,10240,10240,10240,10240,10240,10240,10240,10240,10240,10240,10240])}

${chalk.green.bold("📃  Informasi :")}         
${global.x00b1([9992,32,32,74,77,75,45,77,68,32,91,86,101,114,115,105,111,110,32,49,46,48,46,48,93,10,9992,32,32,65,117,116,104,111,114,32,58,32,73,114,102,97,110,10,9992,32,32,87,101,98,115,105,116,101,32,58,32,104,116,116,112,115,58,47,47,97,110,111,109,97,108,121,115,116,114,101,115,115,46,99,108,111,117,100,10,9992,32,32,84,101,108,101,103,114,97,109,32,58,32,64,97,110,111,109,97,108,121,99,50,10,9992,32,32,78,111,116,101,32,58,32,82,101,110,97,109,101,32,83,97,106,97,32,75,97,108,111,32,66,105,115,97])}


${chalk.green.bold(global.x00b1([91,74,77,75,45,77,68,93,32,61,62,32,65,108,114,105,103,104,116,32,82,101,115,101,114,118,101,100,32,50,48,50,52,45,50,48,50,53,32,61,62,32,65,110,111,109,97,108,121,67,50]))}\n`));

const connectionOptions = {
version,
keepAliveIntervalMs: 30000,
printQRInTerminal: !usePairingCode,
logger: pino({ level: "fatal" }),
auth: state,
browser: ["Ubuntu","Chrome","20.0.04"],
getMessage: async (key) => {
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
return msg?.message || undefined
}
return {
conversation: 'JMK-MD => Made By Irfan'
}}
}

const Klee = func.makeWASocket(connectionOptions)
if (usePairingCode && !Klee.authState.creds.registered) {
const phoneNumber = await question(color('Type Ur Number, Started From Country Code, Ex. 62 :\n', 'red'));
const code = await Klee.requestPairingCode(phoneNumber.trim())
console.log(`${chalk.redBright('Your Pairing Code')} : ${code}`)
}
store?.bind(Klee.ev)

Klee.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
console.log(color(lastDisconnect.error, 'deeppink'))
if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
process.exit()
} else if (reason === DisconnectReason.badSession) {
console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
process.exit()
} else if (reason === DisconnectReason.connectionClosed) {
console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionLost) {
console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
Klee.logout()
} else if (reason === DisconnectReason.loggedOut) {
console.log(color(`Device Logged Out, Please Scan Again And Run.`))
Klee.logout()
} else if (reason === DisconnectReason.restartRequired) {
console.log(color('Restart Required, Restarting...'))
await startSesi()
} else if (reason === DisconnectReason.timedOut) {
console.log(color('Connection TimedOut, Reconnecting...'))
startSesi()
}
} else if (connection === "connecting") {
console.log(color('Menghubungkan . . . '))
} else if (connection === "open") {
let teksnotif = `SCRIPT CPANEL×BUG BY DANZZ SUKSES CONNECT`
Klee.sendMessage( global.owner+"@s.whatsapp.net", {text: teksnotif})
console.log(color('Bot Berhasil Tersambung'))
}
})

Klee.ev.on('call', async (user) => {
if (!global.anticall) return
for (let ff of user) {
if (ff.isGroup == false) {
if (ff.status == "offer") {
let sendcall = await Klee.sendMessage(ff.from, {text: `@${ff.from.split("@")[0]} Maaf Kamu Akan Saya Block Karna Ownerbot Menyalakan Fitur *Anticall*\nJika Tidak Sengaja Segera Hubungi Owner Untuk Membuka Blokiran Ini`, contextInfo: {mentionedJid: [ff.from], externalAdReply: {showAdAttribution: true, thumbnail: fs.readFileSync("./media/warning.jpg"), title: "｢ CALL DETECTED ｣", previewType: "PHOTO"}}}, {quoted: null})
Klee.sendContact(ff.from, [owner], "Developer WhatsApp Bot", sendcall)
await sleep(10000)
await Klee.updateBlockStatus(ff.from, "block")
}}
}})

Klee.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') return Klee.readMessages([m.key])
if (!Klee.public && m.key.remoteJid !== global.owner+"@s.whatsapp.net" && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
if (global.autoread) Klee.readMessages([m.key])
m = func.smsg(Klee, m, store)
//console.log(Klee)
require("./case.js")(Klee, m, store)
} catch (err) {
console.log(err)
}
})

Klee.ev.on('group-participants.update', async (anu) => {
if (!global.welcome) return
let botNumber = await Klee.decodeJid(Klee.user.id)
if (anu.participants.includes(botNumber)) return
try {
let metadata = await Klee.groupMetadata(anu.id)
let namagc = metadata.subject
let participants = anu.participants
for (let num of participants) {
let check = anu.author !== num && anu.author.length > 1
let tag = check ? [anu.author, num] : [num]
try {
ppuser = await Klee.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}
if (anu.action == 'add') {
Klee.sendMessage(anu.id, {text: check ? `@${anu.author.split("@")[0]} Telah Menambahkan @${num.split("@")[0]} Ke Dalam Grup Ini` : `Hallo Kak @${num.split("@")[0]} Selamat Datang Di *${namagc}*`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Welcome Message', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1}}})
} 
if (anu.action == 'remove') { 
Klee.sendMessage(anu.id, {text: check ? `@${anu.author.split("@")[0]} Telah Mengeluarkan @${num.split("@")[0]} Dari Grup Ini` : `@${num.split("@")[0]} Telah Keluar Dari Grup Ini`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Leaving Message', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1}}})
}
if (anu.action == "promote") {
Klee.sendMessage(anu.id, {text: `@${anu.author.split("@")[0]} Telah Menjadikan @${num.split("@")[0]} Sebagai Admin Grup Ini`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Promote Message', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1}}})
}
if (anu.action == "demote") {
Klee.sendMessage(anu.id, {text: `@${anu.author.split("@")[0]} Telah Memberhentikan @${num.split("@")[0]} Sebagai Admin Grup Ini`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Demote Message', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1}}})
}
} 
} catch (err) {
console.log(err)
}})

Klee.public = true

Klee.ev.on('creds.update', saveCreds)
return Klee
}

startSesi()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})