const express = require('express');
const path = require('path')
const port = 8000;

//this app has all thd functionality of the libraries which are need  to run a server
const app = express();

// whenevr the app is created there are multiple proporties so app.set will set the value of view  engine as ejs
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, 'views'));//__dirname means it is the currrent file .and it also the make dynamic
// returning the reponse fron th eserver

// whenever a rewuest comes in we need to sends back in instead of using th32 multiple swuitch casess we can write 
//get type request
app.get('/', function(req, res){//we can directly handle the any reuest instead of th eget  eg,post,delete ,patch pu

    return res.render('home', { title:"My Contact List"});
    // res.send('<h1>cool !! It is runnning! or is it</h1>');

    });

    
    //creating controller for the practise.ejs file,,sam esynrtax as above one 
    app.get('/practice', function(req, res){
        return res.render('practice', {
            title: "Let us play eith EJS"
        });
    });



//runnning
app.listen(port, function(err){
    if(err){
        console.log("error in running the server", err)
    }
    console.log('Yup !! My express server running on the port ',port);

});