const { create, Client } = require('@open-wa/wa-automate');

// or
// import { create, Client } from '@open-wa/wa-automate';


function start(client) {
  client.onMessage(async message => {
    if (message.body === 'Hi') {
      await client.sendText(message.from, '👋 Hello!');
    }
  });
}

function sendBulkMessage_Text(client){
    // client.getAllContacts().then((result)=> {
    //     result.forEach( async element => {
    //         await client.sendText(element.id, 'enter your text here');
    //     });
        
    // });
}
function sendBulkMessage_Image(client){
    // client.getAllContacts().then((result)=> {
    //     result.forEach( async element => {
    //         // await client.sendText(element.id, 'enter your text here');
    //         await client.sendImage({to:"ChatId", file: "DataURL | FilePath", filename: "string", caption: "Content"}).then((result,messageId)=>{
    //             console.log(result,messageId);
    //         })
    //     });
        
    // });
}

function gettoKnow(client){
    console.log(Client);
}

create({multiDevice:true}).then(sendBulkMessage_Text,start);

gettoKnow();
