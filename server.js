var express = require('express');//create web server        
var morgan = require('morgan');//output logs what request are coming and how we are handling
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles={
    'article-one' :{
        title:'Article one',
        heading:'Article one',
        date:'11th febuary 2017',
            content:`   <p>Hiee this is a article regarding URL one.This is my first content on web.I m learning this through nptel programme.
                    this is my first liv e web server. I m enjoying this.
                    </p>
                     <p>Hiee this is a article regarding URL.This is my first content on web.I m learning this through nptel programme.
                    this is my first liv e web server. I m enjoying this.
                    </p>
                     <p>Hiee this is a article regarding URL.This is my first content on web.I m learning this through nptel programme.
                    this is my first liv e web server. I m enjoying this.
                    </p>
                    `
        
    },
    'article-two' :{
        title:'Article Two',
        heading:'Article two',
        date:'1th febuary 2017',
            content:`   <p>Hiee this is a article regarding URL two .This is my first content on web.I m learning this through nptel programme.
                    this is my first liv e web server. I m enjoying this.
                    </p>
                     <p>Hiee this is a article regarding URL.This is my first content on web.I m learning this through nptel programme.
                    this is my first liv e web server. I m enjoying this.
                    </p>
                     <p>Hiee this is a article regarding URL.This is my first content on web.I m learning this through nptel programme.
                    this is my first liv e web server. I m enjoying this.
                    </p>`
        
    },
    'article-three' :{
        title:'Article three',
        heading:'Article three',
        date:'1th febuary 2017',
            content:`   <p>Hiee this is a article regarding URL three.This is my first content on web.I m learning this through nptel programme.
                    this is my first liv e web server. I m enjoying this.
                    </p>
                     <p>Hiee this is a article regarding URL.This is my first content on web.I m learning this through nptel programme.
                    this is my first liv e web server. I m enjoying this.
                    </p>
                     <p>Hiee this is a article regarding URL.This is my first content on web.I m learning this through nptel programme.
                    this is my first liv e web server. I m enjoying this.
                    </p>`
    },

};
function createtemplate(data)
{
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmltemplate =`
    <html>
        
        <head>
            <title>
                ${title}
            </title>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
      
        <body>
            <div class="container">
                <div>
                    <a href="/">home</a>
                </div>
                <hr/>
                <h3>${heading}</h3>
                <div>
                    ${date}
                </div>
                <div>
                   ${content}
                    
                    <img src="ui/madi.png" alt="Imad logo" height="42" width="42" >
                </div>
            </div>
                
        </body>
    </html>`;
    
    return htmltemplate;
}

//send content of ui/index.html 
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articlename',function(req,res)
{
    //articlename==article-one..url name
    //articles[articlename]==content of the object of article-one
    var articlename=req.params.articlename;
 res.send(createtemplate(articles[articlename]));
});



//if this particular url path is requested this function is excecuted
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
