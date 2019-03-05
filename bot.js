const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const { Client, Util } = require('discord.js');  
const getYoutubeID = require('get-youtube-id'); 
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const request = require('request');
const queue = new Map(); 
const client = new Discord.Client(); 
const db = require('quick.db');
const giphy = require('giphy-api')();    
const googl = require('goo.gl'); 
const translate = require('google-translate-api');   
const fs = require("fs"); 
var data = JSON.parse(fs.readFileSync('data.json','utf8'))
const moment = require("moment");
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const zalgo = require('zalgolize');   
const sql = require("sqlite");
 const dateFormat = require('dateformat'); 
 const pretty = require('pretty-ms') 
,ti={}  
,spee={};
 const prefix = "-";

client.on('ready', () => {
  client.user.setGame(`-العاب`,"http://twitch.tv/el3alwawi")
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});



client.on('guildCreate', guild => {
client.channels.get("552229012680998932").send(`✅ **${client.user.tag} دخل سيرفر جديد
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
}); //Codes
client.on('guildDelete', guild => {
  client.channels.get("552229012680998932").send(`❎ **${client.user.tag} طلع من سيرفر
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});//Codes





// كود انفايت البوت
client.on('message', message => {
  if (true) {
if (message.content === '-invite bot') {
      message.author.send('  **هذا هو رابط البوت وتستطيع اضافته الى سيرفرك بنجاع** |	  https://discordapp.com/api/oauth2/authorize?client_id=533328778055647235&permissions=8&scope=bot  ').catch(e => console.log(e.stack));
    }
   }
  }); 
client.on('message', message => {
     if (message.content === "-invite bot") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField("** Done | تــــم **" , "**تم ارسال رابط انفايت البوت في الخاص**")
  message.channel.sendEmbed(embed);
    }
});

// كود هلب
client.on("message", message => {
 if (message.content === "-العاب") {
  const embed = new Discord.RichEmbed()  
      .setColor("#8325c0") 
	  .setThumbnail(message.author.avatarURL) 
      .setDescription(`═════ஜ۩۞۩ஜ════════════ஜ۩۞۩ஜ═════
	  
**:joystick: استمتع بالالعاب الموجودة بالبوت :joystick:**
**
:game_die: -فري فاير 
أسئلة منوعة عن فري فاير وهي للمعلومات فقط
:game_die: -صراحة
لعبة الصراحة الجميلة باسئلة منوعة
:game_die: -تحدي
أنصحك اذا انت مش قد التحدي لاتشارك فيها ابدا ☺
:game_die: -سامحني
ياترى بعد التحدي راح يسامحك البوت هههه جرب حظك
:game_die: -فكك
كلمات يكتبها البوت وانت تفككها بس انتبه على الحروف جيدا
:game_die: -اسرع
لعبة اسرع واحد يكتب الكلمة او الجملة الي يكتبها البوت
:game_die: -لغز
لعبة ألغاز جميلة ولازم تجاوب على اللغز قبل الوقت
:game_die: -سؤال
أسئلة عن لعبة فري فاير وهي بالوقت بسرررعة اجب
:game_die: -لو خيروك
لعبة لو خيروك بس خيارين واختار واحد فيهم
:game_die: -rps
لعبة حجر ورقة مقص وتلعبها ضد البوت
:game_die: -رقم
اكتب الأمر وبعده الرقم والبوت يختار رقم عشوائي
:new: :game_die: -حظ
لعبة حظ عشوائية اذا جبت 3 نفس الشكل انت الفائز


يرسلك رابط البوت في الخاص
-invite bot
في حالة لم يشتغل معك امر ارسل رسالة لادمن البوت وقلو انو الكود لم يشتغل معك
-admin ( اكتب الرسالة هنا )
مع تحيات : DEX Gamer

**═════ஜ۩۞۩ஜ════════════ஜ۩۞۩ஜ═════
`)
.setTitle('**إضغط هنا لإضافة البوت الى سيرفرك .!**')
.setURL("https://discordapp.com/api/oauth2/authorize?client_id=533328778055647235&permissions=8&scope=bot");
   message.channel.sendEmbed(embed)
    
   }
});





















client.login(process.env.BOT_TOKEN);
