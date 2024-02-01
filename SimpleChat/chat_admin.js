const express = require('express');

const router = express.Router();

const fs = require('fs');

router.get('/user-login', (req,res,next)=> /* USER IS REDIRECTED FROM HOME-PAGE TO THE LOGIN-PAGE */
{
    console.log("This is the user-login page!");
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/enter_username" method="POST">\
    <input id="username" type="text" name ="username">\
    <button type="submit">sendUsername</button>\
    </form>');
});

router.post('/enter_username',(req,res,next)=> /* POST SUBMISSION, THE USER IS REDIRECTED FROM THE LOGIN-PAGE TO ACTION PAGE */
{
    console.log('Your username is about to be written onto the local storage!');
    
    // fs.appendFile('chatContent.txt', req.body.username, (err)=>console.log(err));
    res.redirect('/');

});

module.exports = router;