const express = require('express');

const router = express.Router();

const fs = require('fs');

router.get('/',(req,res,next)=> /* USER IS REDIRECTED FROM ACTION PAGE TO HOME-PAGE AGAIN TO SEND MESSAGE */
{
  console.log("On the home page to send message!");
  fs.readFile('chatBox.txt',(err,data)=>  /* IF SUCH FILE EXISTS, READ ITS CONTENTS ELSE THROW ERROR*/
  {
    if(err)
    {
      console.log(err);
      data = "No chats to display";
    }
    console.log(data.toString('utf-8')); /* DATA IS USUALLY IN HEX FORMAT */
    res.send(`${data}<form action="/messages" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST">\
    <input type="text" name ="message" id="message">\
    <button type="submit">send Message</button>\
    <input id="username" hidden name="username"></form>`);
  });
});

router.post('/messages', (req,res,next)=> /* ONCE MESSAGE IS SUBMITTED, USER IS REDIRECTED HERE */
{
  fs.appendFile('chatBox.txt', `${req.body.username}:${req.body.message} `,{flag:'a'} , /* flag parameter to prevent overwritting */
  (err)=>
  {
    if(err)
    {
      console.log(err);
    }
    else
    {
      fs.readFile('chatBox.txt',(err,data)=>
      {
        if(err)
        {
          console.log(err);
          data = "No chats to display";
        }
        console.log(data.toString('utf8'));
        res.send(`${data}<form action="/messages" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST">\
        <input type="text" name ="message" id="message">\
        <button type="submit">send Message</button>\
        <input id="username" hidden name="username"></form>`);
      });
    }
  });
});


// router.post('/',(req,res,next)=>
// {
//   console.log("Yahape aa gaya ");
  
// });


// router.get('/',(req,res,next)=>
// {
//   //console.log(`likes 29+{${req.body.username}:${req.body.message}}`);
//   fs.readFile('chatBox.txt',(err,data)=>
//   {
//     if(err)
//     {
//       console.log(err);
//       data = "No chats to display";
//     }
//     console.log(data);
//     res.send(`<html><body>${data}<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/enter_username" method="POST">\
//     <input id="username" type="text" name ="username">\
//     <button type="submit">sendUsername</button>\
//     </form></body></html>`);
    
//   });
// });



module.exports = router;


