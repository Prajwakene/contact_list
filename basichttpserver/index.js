//to use the http server and client one must require('http')
const http = require('http');
const  port = 8000;
// fs (file system )is module in node which is used to reaad and write in or from th efile
const fs = require('fs');

function requestHandler(req, res){
    console.log(req.url);

        // Response Code
    res.writeHead(200, {'content-type': 'text/html'})

    // switch cases

    let filePath;
    switch(req.url){
        case '/':
            filePath = './index.html'
        break;

        case '/profile':
            filePath = './profile.html'
            break;

            default:
                filePath = './404.html'
    }

    fs.readFile(filePath, function(err , data){
        if(err){
            console.log('error',err);
            return res.end('<h1>Error!!!</h1>');
        }

        return  res.end(data);
    })

    // //file syetem is module 
    // // readFile is inbuild Asynchronous funcion  
    //     fs.readFile('./index.html', function( err, data){
    //         if(err){
    //             console.log('error', err);
    //             return res.end('<h1>Error!!!</h1>');
    //         }
    //         return  res.end(data);
            


    //     });




    // // res.end('<h1>Gotcha!</h1>');

}

const server = http.createServer(requestHandler);


//when server.listen get called .listen function will be callled and port argument willl be passed to it which corrsponds to 8000 
// if it does not run  by default  then an error will be pass  onthe that variable
server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("server is up and running on port :", port);
});
