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

client.on('ready', function(){
    var ms = 15000 ;
    var setGame = [`${client.guilds.size} Server`,'-invite bot | for add this bot👾 in your server',`${client.users.size} Members`,'-العاب','By: DEX Gamer | @el3alwawi#5321'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i]);
    }, ms);
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



// البوت
client.on('guildCreate', guild => {
client.channels.get("554110845202989076").send(`═════ஜ۩۞۩ஜ════════════ஜ۩۞۩ஜ═════
📌 **${client.user.tag} دخل سيرفر جديد
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**
═════ஜ۩۞۩ஜ════════════ஜ۩۞۩ஜ═════`)
}); //Codes
client.on('guildDelete', guild => {
  client.channels.get("554110845202989076").send(`═════ஜ۩۞۩ஜ════════════ஜ۩۞۩ஜ═════
❌ **${client.user.tag} خرج من سيرفر
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**
═════ஜ۩۞۩ஜ════════════ஜ۩۞۩ஜ═════`)
});//Codes



// برودكاست
 client.on('message', message => {
	    var prefix = "-";
              if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "رسالة جديدة";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
 reaction1.on("collect", r => {
    message.channel.send(`**☑ | Done ... قد أرسلت رسالتك الى :  __${message.guild.members.size}__ عضو **`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
  
  var bc = new
       Discord.RichEmbed()
       .setColor('000000')
       .setTitle(':small_orange_diamond: **__رسالة جديدة__**  :small_orange_diamond:')
       .addField(':file_cabinet:  **__سيرفر__**', message.guild.name)
       .addField(':passport_control:  **__المرسل__**', message.author.username)
       .addField(':incoming_envelope:  **__الرسالة__**', args)
       .setImage('https://img.roro44.net/imgcache/2013/11/9810.gif')
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**البرودكاست تكنسل ☺**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });     







client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var Dark = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setTitle('``! لقد تلقيت رساله جديدة في الخاص !``')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`From ${message.author.tag} (${message.author.presence.status.toUpperCase()})`)
    client.channels.get("557016378649870346").send({embed:Dark});
    }
});
client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
    .setColor(0x5500ff)
    .setTimestamp()
    .setTitle('**``شكراً لك لإضافة البوت الى سيرفرك``**')
    .setThumbnail(`${message.author.avatarURL}`)
    .setDescription(`**لرؤية قائمة الألعاب الموجودة أكتب : -العاب**`)
        guild.owner.send(embed)
  });





// كود انفايت البوت
client.on('message', message => {
  if (true) {
if (message.content === '-invite bot') {
      message.author.send('  **هذا هو رابط البوت وتقدر تضيفو لسيرفرك بنجاح ** | https://discordapp.com/api/oauth2/authorize?client_id=556972105217081356&permissions=0&scope=bot  ').catch(e => console.log(e.stack));
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
.setURL("https://discordapp.com/api/oauth2/authorize?client_id=556972105217081356&permissions=0&scope=bot");
   message.channel.sendEmbed(embed)
    
   }
});











////////////// العاب البوت //////////////

// لعبة اسئلة فري فاير
const pubg = [
     'free fire | ما هو اقوي سلاح برائيك ؟',
     'free fire | اين تجد سلاح الجروزا ؟ Grozza',
     'free fire | ماذا تفضل اكثر ام فور ام سكار ؟',
     'free fire | ايهما تفضل vss ام Awm',
     'free fire | ماذا تفضل اكثر ؟ سولو ام سكواد ؟',
     'free fire | كم جيم كسبت في العبه ؟',
     'free fire | ما هو اكثر عدد قتلت في مسيرتك بالعبه',
     'free fire | اذا انت المركز ال 2 هل سوف تقوم بتمشي علي رجلك ام ستاخذ سياره تحميك ؟',
     'free fire | اذا وجدت شخصين يتقاتلان , هل سوف تتقاتل معهم ام تنتظر قليلا حتي يقتل احدهما الاخر ؟',
     'free fire | اذا صديقك بالاسكواد يحتاج مساعده هل تساعده ام تتركه ؟',
     'free fire | اذا تم عمل لصديقك كونك اوت وامامك لوت كثير جدا سوف تذهب لتساعده ام تاخذ الوت وتدعه يموت ؟',
     'free fire | ايهما تفضل ؟ الاختباء حتي يتبقي اشخاص قليله ام تذهب لتقتل ولا تختبئ',
     'free fire | اين تفضل ان تهبط من الطائره ؟ الاماكن الهادئيا لوت صغير ام الاماكن المزدحمه بالاعبين لاكن لوت كثير',
     'free fire | كم عدد المرات التي فزت بها لوحدك سولو ؟',
     'free fire | ما هو افضل سلاح تجيد استخدامه ؟',
     'free fire | ما هو اندر سلاح قد تجده برائيك ؟',
     'free fire | ما هو اندر سلاح جديد قد تجده برائيك ؟',
     'free fire | ما هو عدوك في العبه لاق البنق ام لاق الفريمات الاف بي اس ؟',
     'free fire | ايهما تفضل العب ؟ فـ المساء ام الصباح ؟',
     'free fire | هل تحب ان يكون الجيم ملئ بلاعبين ام لاعبين قليلين ؟',
     'free fire | هل الملابس تعبر عن انك محترف ام لا ؟',
     'free fire | كم معك من مال ( كوين ) بلعبه ؟',
     'free fire | ما هو اكثر شئ تكرهه في العبه ؟',
     'free fire | ما هو اكثر شئ تحبه بلعبه ؟',
     'free fire | ماذا تفضل شتو قن ( بندقيه ) ام قناصه ؟',
     'free fire | ماذا تفضل اكثر ؟ درع لفل 3 متضرر ام درع لفل 2 غير متضرر',
     'free fire | تفضل ان تلعب مع صديقك سكواد ام شخص غريب ؟',
     'free fire | هل تظن انك افضل شخص في اصدقائك بهذه اللعبه؟',
     'free fire | قيم نفسك من 10 كـ احتراف لك بالعبه',
     'free fire | هل فزت جيم من قبل بالعبه ؟',
     'free fire | هل وصلت للمركز ال 10 ( توب 10 ) قبل هكذا بلعبه ؟',
     'free fire | هل قمت بلعب مع صديقك من قبل بلعبه ؟',
     'free fire | هل تعلم من اخترع العبه ؟',
     'free fire | لو خيروك لعبه ببجي ام فورت نايت ؟',
     'free fire | هل يوجد شخص من اصدقاءك محترف اكثر منك ام انت اكثر شخص محترف ما بين اصدقاءك ؟',
     'free fire | اذا كنت من فريق مطورين العبه ماذا ستفعل ؟',
     'free fire | قيم من 10 مدي حبك للعبه',
     'free fire | هل تحب ان تتكلم صوت مع اصدقاءك وانت تلعب معاهم ام لا تحب هذا الامر ؟',
 
]
   client.on('message', message => {
       if (message.author.bot) return;
 if (message.content.startsWith('-فري فاير')) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("**اجب على السؤال في لعبة فري فاير**")
  .setColor('#FFA500')
  .setDescription(`${pubg[Math.floor(Math.random() * pubg.length)]}`)
  .setImage("https://i.pinimg.com/originals/a7/cd/00/a7cd009a5c54a8ca43986049d6131d33.png")
  .setTimestamp()
   message.channel.sendEmbed(client);
   message.react("??")
 }
});

// لعبة صراحة
const Sra7a = [
            'صراحه  |  صوتك حلوة؟',
            'صراحه  |  التقيت الناس مع وجوهين؟',
            'صراحه  |  شيء وكنت تحقق اللسان؟',
            'صراحه  |  أنا شخص ضعيف عندما؟',
            'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
            'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
            'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
            'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
            'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
            'صراحه  |  أشجع شيء حلو في حياتك؟',
            'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
            'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
            'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
            'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
            'صراحه  |  نظرة و يفسد الصداقة؟',
            'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
            'صراحه  |  شخص معك بالحلوه والمُره؟',
            'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
            'صراحه  |  وش تتمنى الناس تعرف عليك؟',
            'صراحه  |  ابيع المجرة عشان؟',
            'صراحه  |  أحيانا احس ان الناس ، كمل؟',
            'صراحه  |  مع مين ودك تنام اليوم؟',
            'صراحه  |  صدفة العمر الحلوة هي اني؟',
            'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
            'صراحه  |  صفة تحبها في نفسك؟',
            'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
            'صراحه  |  تصلي صلواتك الخمس كلها؟',
            'صراحه  |  ‏تجامل أحد على راحتك؟',
            'صراحه  |  اشجع شيء سويتة بحياتك؟',
            'صراحه  |  وش ناوي تسوي اليوم؟',
            'صراحه  |  وش شعورك لما تشوف المطر؟',
            'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
            'صراحه  |  ما اكثر شي ندمن عليه؟',
            'صراحه  |  اي الدول تتمنى ان تزورها؟',
            'صراحه  |  متى اخر مره بكيت؟',
            'صراحه  |  تقيم حظك ؟ من عشره؟',
            'صراحه  |  هل تعتقد ان حظك سيئ؟',
            'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
            'صراحه  |  كلمة تود سماعها كل يوم؟',
            'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
            'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
            'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
            'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
            '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
            'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
            '‏صراحه | هل تحب عائلتك ام تكرههم؟',
            '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
            '‏صراحه  |  هل خجلت من نفسك من قبل؟',
            '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
            '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
            '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
             '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
            '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
            '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
            'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
            '‏صراحه  |  ما هو عمرك الحقيقي؟',
            '‏صراحه  |  ما اكثر شي ندمن عليه؟',
            'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
       ]
          client.on('message', message => {
			  	var prefix = "-"
        if (message.content.startsWith(prefix + 'صراحة')) {
            if(!message.channel.guild) return message.reply('** This command only for servers **');
         var client= new Discord.RichEmbed()
         .setTitle(":arrow_down: **جاوب على السؤال بصراحة** :arrow_down:")
         .setColor('RANDOM')
         .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
         .setImage("https://images.emojiterra.com/google/android-nougat/128px/1f914.png")
                         .setTimestamp()
       
          message.channel.sendEmbed(client);
          message.react("??")
        }
       });


// اختر رقم
client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'رقم')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**حط رقم معين يتم السحب منه**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});


// لعبة التحدي
var Za7f = [
  "**صورة وجهك او رجلك او خشمك او يدك**.",
  "**اصدر اي صوت يطلبه منك الاعبين**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
  "**ذي المرة لك لا تعيدها**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**صور اي شيء يطلبه منك الاعبين**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**سو مشهد تمثيلي عن مصرية بتولد**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**ذي المرة لك لا تعيدها**.",
  "**تعطي اي شخص 5 الاف كرديت**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
  "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
  "**اتصل على امك و قول لها انك تحبها :heart:**.",
  "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
  "**قل لواحد ماتعرفه عطني كف**.",
  "**منشن الجميع وقل انا اكرهكم**.",
  "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
  "**روح المطبخ و اكسر صحن او كوب**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**قول لاي بنت موجود في الروم كلمة حلوه**.",
  "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
  "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",
  "**قول قصيدة **.",
  "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**اول واحد تشوفه عطه كف**.",
  "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
  "**تاخذ عقابين**.",
  "**قول اسم امك افتخر بأسم امك**.",
  "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
  "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
  "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
  "**تتصل على الوالده  و تقول لها خطفت شخص**.",
  "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
  "**!!تصل على الوالده  و تقول لها  احب وحده**.",
    "**تتصل على شرطي تقول له عندكم مطافي**.",
    "**خلاص سامحتك**.",
    "** تصيح في الشارع انا  مجنوون**.",
    "** تروح عند شخص تقول له احبك**.",

];
client.on('message', message => {
 if (message.content.startsWith("-تحدي")) {
              if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setThumbnail(message.author.avatarURL) 
 .setTitle(":smiling_imp: **اذا انت قد التحدي لا تنسحب او تتعاقب** :smiling_imp:")
 .addField('**:game_die: اخترنا لك التحدي**' ,`${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
message.channel.sendEmbed(embed);
console.log('[t7ade] Send By: ' + message.author.username)
  }
});

// لعبة اسرع
client.on('message', message => {
    if (message.content == "-اسرع") {
        var x = ["DreamKing",
"DeathGames",
"زيرو كنج",
"أرض الأحلام",
"ألبرازيل",
"العراق",
"ألمملكة ألعربية ألسعودية",
"القسطنطينية",
"النهاية",
"امازون",
"جافاسكربت",
"سهله مو صعبه",
"طبق رطب مرق بقر",
"متجر",
"شجرة الأوغيري",
"عش العصفور",
"هلا بلخميس",
"الحوت الأزرق",
"بلاد الرافدين",
"كانيكي",
"توكا",
"عادل امام",
"عمرو ذياب",
"عمان",
"مسقط",
"بغداد عاصمة العراق",
"Playing Minecraft",
"Music",
"FaceBooK",
"YouTube",
"Infinity",
"احبك دريم",
"Don't Let Me Down",
"Space",
"Instgram",
"Google",
"Viber",
];
        var x2 = ['DreamKing',
        "DeathGames",
        "زيرو كنج",
        "أرض الأحلام",
		"ألبرازيل",
		"العراق",
		"ألمملكة ألعربية ألسعودية",
		"القسطنطينية",
		"النهاية",
		"امازون",
		"جافاسكربت",
		"سهله مو صعبه",
		"طبق رطب مرق بقر",
		"متجر",
		"شجرة الأوغيري",
		"عش العصفور",
		"هلا بلخميس",
		"الحوت الأزرق",
        "بلاد الرافدين",
        "كانيكي",
        "توكا",
        "عادل امام",
        "عمرو ذياب",
        "عمان",
        "مسقط",
        "بغداد عاصمة العراق",
        "Playing Minecraft",
        "Music",
        "FaceBooK",
        "YouTube",
        "Infinity",
        "احبك دريم",
        "Don't Let Me Down",
		"Space",
		"Instgram",
		"Google",
		"Viber",
		
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` اول شخص يكتب :  __**${x[x3]}**__
لديك 15 ثانية للاجابة`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الكلمة في الوقت المناسب  `);
        })
        })
    }
});

// لعبة لغز
client.on('message', puz => {
    if (puz.content == "-لغز") {
        var x = ["ما هي حاسة الشم عند الثعبان ؟",
"ما هو الشي الذي يكسو الناس و هو عار بدون ملابس ؟",
"ما هو الشي الذي لا يجري و لا يمشي ؟",
"ما هو إسم الشهر الميلادي الذي إذا حذفت أوله , تحول إلى إسم فاكهه ؟",
"ما هو الشي الذي لا يدخل الإ إذا ضرب على رأسه ؟",
"ما هو الشيء الذي اسمه على لونه ؟",
"ما هو الشي الذي كلما زاد نقص ؟",
"ما هي التي تحرق نفسها لتفيد غيرها ؟",
"كله ثقوب و مع ذلك يحفظ الماء ؟",
"ما هو الذي لحمه من الداخل و عظمه من الخارج ؟",
"يستطيع ان يخترق الزجاج من دون كسره .. فما هو ؟",
"ما هي الكلمه التي يبطل معناها إذا نطقنا بها ؟",
"ما الذي يكون بين السماء و الارض ؟",
"ما هو الشي الذي تذبحه و تبكي عليه ؟",
"ما هو الشي الذي لا يدخل الإ إذا ضرب على رأسه ؟",
"ما هو الشي الذي يتكلم جميع لغات العالم ؟",
"ما هو الشي الذي كلما أخذت منه كبر ؟",
"ما هو أهون موجود و أعز مفقود ؟",
"ليس لها بدايه و ليس لها نهايه .. فماهي ؟",
"لها رقبه و ليس لها رأس .. فماهي ؟",
"ما هو الذي يهز رأسه و هو يصعد التل ؟",
"مدينه سعوديه إسمها على إسم نبات .. فما هي ؟",
"مدينه سعوديه تقرأ طرديا و عكسيا .. فما هي ؟",
"ما هو الطائر الذي يرى بإذنيه ؟",
"ما هو الشي الذي له أسنان ولا يعض ؟",
"ما هي التي ترى كل شي وليس لها عيون ؟",
"ما هو الشي الذي لا يستفاد منه إلا إذا كسر ؟",
"مصنوع من الحديد والكل بحكمه راضي ؟",
"من هو الذي مات و لم يولد ؟",
"هل الجمل يلد في الشهر التاسع أم العاشر ؟",
"ما هو الشي الذي يذهب ولا يرجع ؟",
"تدور و لا تتعب .. و تأكل و لا تشرب .. فما هي ؟",
"ما هو الشي الذي ليس بإنسان ولا حيوان و لا جماد ؟",
"جسم اسود و قلب ابيض و رأس أخضر .. فما هو ؟",
"ما هو الشي الذي كلما خطا خطوه فقد شيئا من ذيله ؟",
"ما هي التي تمشي بلا رجلين و تبكي بلا عينين ؟",
"حامل و محمول .. نصفه ناشف و نصفه مبلول .. فما هو ؟",
"ما هو اسم الطائر الذي اذا قلبته ترى عجب ؟",
"من هو الذي يغسل وجهه ولا يمشط شعره ؟",
"ما هو الشي الذي يسير أمامك ولا تراه ؟",
"ما هو الشي الذي إذا أصببت عليه الماء .. لا يبتل ؟",
"",
];
        var x2 = ['اللسان',
		"الابره",
        "الماء",
		"تموز",
		"المسمار",
		"البيضة",
		"العمر",
		"الشمعة",
		"الاسفنج",
		"السلحفاة",
		"الضوء",
		"الصمت",
		"حرف الواو",
		"البصل",
		"المسمار",
		"الصدى",
		"الحفرة",
		"الماء",
		"الدائرة",
		"الزجاجة",
		"الحصان",
		"عرعر",
		"العلا",
		"الخفاش",
		"المشط",
		"المرآة",
		"البيض",
		"الميزان",
		"آدم عليه السلام",
		"الجمل لا يلد",
		"الدخان",
		"الطاحونة",
		"نبات",
		"الباذنجان",
		"ابرة الخياطة",
		"السحابة",
		"السفينة",
		"بجع",
		"القط",
		"الهواء",
		"الظل",
		"",

        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        puz.channel.send(`__السؤال هو :__  **${x[x3]}**
		
**لديك 20 ثانية للاجابة**`).then(msg1=> {
            var r = puz.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return puz.channel.send(`:x: **لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح**`)
        })
        
        r.then((collected)=> {
            puz.channel.send(`:white_check_mark: **لقد قام ${collected.first().author} بحل اللغز في الوقت المناسب**`);
        })
        })
    }
});

// لعبة فكك
client.on('message', fkk => {
    if (fkk.content == "-فكك") {
        var x = ["المتاح للجميع لا يتاح لي",
"خعاخع",
"فيلا",
"بريئ",
"الضرورة",
"دنيا",
"صارم",
"مات",
"شعبان شبعان",
"ألعراق",
"سلاحي المسلح",
"أرنب",
"ملاكمة أصابع",
"ديسكورد",
"الحفرة المحفورة",
"كأس مكسور",
"جاسم يبي مساج",
"قيل قتل فيل",
"قلبك انقلب مع قلبي",
"سحور",
"دباب",
"مضرب الحظ",
"خطة الثعلب",
"خطبة رسمية",
"مدرج",
"آيفون",
"باراشوت",
"زلاجات التنين",
"التنين الأزرق أحمر العينين",
"الزون الصغير",
"بكسل يالوصخ",
"جالاكسي",
"ورد",
"For You",
"كتيبة أنذال",
"شكشوكة",
"المغرب العربي الكبير",
"الذهب الأبيض",
"تراب",
"فناء المدرسة",
"الموقع الرسمي",
];
        var x2 = ['ا ل م ت ا ح ل ل ج م ي ع ل ا ي ت ا ح ل ى',
		"خ ع ا خ ع",
        "ف ي ل ا",
		"ب ر ي ئ",
		"ا ل ض ر و ر ة",
		"د ن ي ا",
		"ص ا ر م",
		"م ا ت",
		"ش ع ب ا ن ش ب ع ا ن",
		"أ ل ع ر ا ق",
		"س ل ا ح ي ا ل م س ل ح",
		"أ ر ن ب",
		"م ل ا ك م ة أ ص ا ب ع",
		"د ي س ك و ر د",
		"ا ل ح ف ر ة ا ل م ح ف و ر ة",
		"ك أ س م ك س و ر",
		"ج ا س م ي ب ي م س ا ج",
		"ق ي ل ق ت ل ف ي ل",
		"ق ل ب ك ا ن ق ل ب م ع ق ل ب ي",
		"س ح و ر",
		"د ب ا ب",
		"م ض ر ب ا ل ح ظ",
		"خ ط ة ا ل ث ع ل ب",
		"خ ط ب ة ر س م ي ة",
		"م د ر ج",
		"آ ي ف و ن",
		"ب ا ر ا ش و ت",
		"ز ل ا ج ا ت ا ل ت ن ي ن",
		"ا ل ت ن ي ن ا ل أ ز ر ق أ ح م ر ا ل ع ي ن ي ن",
		"ا ل ز و ن ا ل ص غ ي ر",
		"ب ك س ل ي ا ل و ص خ",
		"ج ا ل ا ك س ي",
		"و ر د",
		"F o r Y o u",
		"ك ت ي ب ة أ ن ذ ا ل",
		"ش ك ش و ك ة",
		"ا ل م غ ر ب ا ل ع ر ب ي ا ل ك ب ي ر",
		"ا ل ذ ه ب ا ل أ ب ي ض",
		"ت ر ا ب",
		"ف ن ا ء ا ل م د ر س ة",
		"ا ل م و ق ع ا ل ر س م ي",
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        fkk.channel.send(`		
		 اول شخص يفكك :  **${x[x3]}** 
		
		**لديك 15 ثانية للاجابة**`).then(msg1=> {
            var r = fkk.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return fkk.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            fkk.channel.send(`@everyone | @here
			:white_check_mark: **لقد قام ${collected.first().author} بتفكيك الكلمة في الوقت المناسب**`);
        })
        })
    }
});

// أسئلة عن فري فاير
client.on('message', message => {
    if (message.content == "-سؤال") {
        var x = ["DreamKing",
"اجب بنعم او لا | سكوب 4 يركب على سلاح MP40 ؟",
"ماهو لون الضوء على الدروب الذي ترميه الطائرة",
"ماهو السلاح الذي نسبة الضرر فيه 1100",
"هل يركب كاتم الصوت على سلاح AK",
"أسرع سيارة هي سيارة ؟",
"سيارة الوحش لونها ..",
"سيارة الجيب يركب كم يركب فيها لاعب",
"أغلب الرقصات تشترى بكم جوهرة",
"الشوت قن الجديد يركب عليه سكوب حراري ؟",
"أين يختبئ المنوب حتى يرفعو الرانك ؟",
"ماهي أخطر منطقة في خريطة برموذا ؟",
"ماهو لون الضوء الذي في الدروب الذي تستدعيه",
"كم لازم يكون مستواك حتى تقدر تدخل تلعب بالرانكد",
"كم أعلى دمج يكون بالسنايبر AWM",
"كم طلقة في سلاح اللانشر الجديد من غير مخزن",
"سلاح P90 كم يرفع طلقة مع مخزن 3",
"اذا نزلت من السيارة وهي تمشي راح تدمج ؟؟ نعم | لا",
"كم ينزل واحد في مود راش آور",
"كم تيم دو يقدر ينزل في الخريطة العادية",
"وش هي خاصية شخصية القرد",
"اذا طحت من فوق أعلى مبنة في الخريطة كم راح يبقالك دم",
];
        var x2 = ['DreamKing',
		"لا",
		"أصفر",
		"AWM",
		"نعم",
		"السيارة الرياضية",
		"أحمر",
		"4",
		"400",
		"لا",
		"فوق فاكتوري",
		"بيك",
		"أزرق",
		"5",
		"1100",
		"5",
		"80",
		"لا",
		"20",
		"25",
		"بوش",
		"10",
		
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`__أجب على السؤال :__ **${x[x3]}**

**لديك 15 ثانية للاجابة**`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: **لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح **
            الإجابة الصحيحة هي : __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`:white_check_mark: لقد أجاب **${collected.first().author}** على سؤال فري فاير`);
        })
        })
    }
})

// لعبة حجر ورقة مقص
client.on('message' , async (message) => {
       if(message.content.startsWith(prefix + "rps")) {
              let args = message.content.split(" ").slice(1);
  var choice = args[0];
  if (choice == "ورقة" || choice == "p") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "ورقة";
    } else if (numb > 50) {
      var choice2 = "حجر";
    } else {
      var choice2 = "مقص";
    }
    if (choice2 == "مقص") {
      var response = "** لقد اخترت **مقص** و :v: ولقد فزت**"
    } else if (choice2 == "ورقة") {
      var response = "** لقد اخترت **ورقه** :hand_splayed: انه تعادل **"
    } else {
      var response = "** لقد اخترت **حجر** :punch:  انت الفائز**"    
    }
    message.channel.send(response);
  } else if (choice == "حجر" || choice == "r") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "ورقة";
    } else if (numb > 50) {
      var choice2 = "حجر";
    } else {
      var choice2 = "مقص";
    }
    if (choice2 == "ورقة") {
      var response = "** لقد اخترت **ورقه** :hand_splayed: ولقد فزت**"
    } else if (choice2 == "حجر") {
      var response = "**لقد اخترت **حجر** :punch: انه تعادل **"
    } else {
      var response = "** لقد اخترت **مقص** :v: انت الفائز**"
    }
    message.channel.send(response);
  } else if (choice == "مقص" || choice == "s") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "ورقة";
    } else if (numb > 50) {
      var choice2 = "حجر";
    } else {
      var choice2 = "مقص";
    }
    if (choice2 == "حجر") {
      var response = "**لقد اخترت **ورقه** :hand_splayed: لقد فزت**"
    } else if (choice2 == "مقص") {
      var response = "**لقد اخترت **مقص** :v: انه تعادل**"
    } else {
      var response = "** لقد اخترت **حجر** :punch: انت الفائز **"
    }
    message.channel.send(response);
  } else {
    message.channel.send(`**يجب عليك استعمال \`${prefix}rps\` <حجر|ورقة|مقص>**`);
  }
}

});
	
// لعبة لو خيروك
var Himo_04 = [
"https://f.top4top.net/p_682it2tg6.png",
"https://e.top4top.net/p_682a1cus5.png",
"https://d.top4top.net/p_682pycol4.png",
"https://c.top4top.net/p_682vqehy3.png",
"https://b.top4top.net/p_682mlf9d2.png",
"https://a.top4top.net/p_6827dule1.png",
"https://b.top4top.net/p_682g1meb10.png",
"https://a.top4top.net/p_682jgp4v9.png",
"https://f.top4top.net/p_682d4joq8.png",
"https://e.top4top.net/p_6828o0e47.png",
"https://d.top4top.net/p_6824x7sy6.png",
"https://c.top4top.net/p_682gzo2l5.png",
"https://b.top4top.net/p_68295qg04.png",
"https://a.top4top.net/p_682zrz6h3.png",
"https://f.top4top.net/p_6828vkzc2.png",
"https://e.top4top.net/p_682i8tb11.png",
"https://f.top4top.net/p_8816hvic1.png",
"https://d.top4top.net/p_882020461.png",
"https://e.top4top.net/p_882s3ftn1.png",
"https://a.top4top.net/p_882eg9c51.png",
"https://c.top4top.net/p_882xkcqd1.png",
"https://f.top4top.net/p_882w7pdi1.png",
"https://a.top4top.net/p_882gcpmo1.png"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'لو خيروك')) {
         var cat = new Discord.RichEmbed()
.setImage(Himo_04[Math.floor(Math.random() * Himo_04.length)])
message.channel.sendEmbed(cat);
    }
});

// لعبة الحظ فواكه
 client.on('message', message => {
if(message.content.startsWith("-حظ")) {
  let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = " : ** لقد فزت   ** ."
  } else {
    we = ": ** لقد خسرت  ** ."
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
})











client.login('ODYwMjU3NjcyMzkzNTIzMjMw.YN4nYw.r_HzRRtQ-WtmfbbHlGhWd0vYH9E');
