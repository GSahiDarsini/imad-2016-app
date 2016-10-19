var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
    
articleOne:
{
    title :'Article One !!! - GSD',
    heading : 'Article One',
    date : '19 th october, 2016',
    content :
    `<p> Life is all about journey and not being a destination. we face many challenges but at the end of the day when we take them for the positively there in nothing on this earth that can hinder us from doing miracles. </p>
    <p> life is never and will never be rude to us , its all about the approach of the individual that decides where we land : in a paradise or in a hell. </p>
    <p> enjoy life to the fullest because you never know what happens the next moment. take challenges which will haunt you but at the end will create a glorious aura around you </p>`
    
},
articleTwo:{ title :' Árticle Two !!! - GSD',
    heading : 'Article Two',
   date : '19 th october, 2016',
    content :
    `<p> Hello .... this is Article two </p>`
    },
articleThree:{ title :' Árticle One !!! - GSD',
    heading : 'Article One',
    date : '19 th october, 2016',
    content :` <p> Life is all about journey and not being a destination. we face many challenges but at the end of the day when we take them for the positively there in nothing on this earth that can hinder us from doing miracles. </p>
    <p> life is never and will never be rude to us , its all about the approach of the individual that decides where we land : in a paradise or in a hell. </p>
    <p> enjoy life to the fullest because you never know what happens the next moment. take challenges which will haunt you but at the end will create a glorious aura around you </P>`
    } 
    
};
function createTemplate(data)
{ var title=data.title;
var heading = data.heading ;
var date = data.date;
var content=data.content;
var htmlTemplate = {
    <html>
       <head>
       <title> ${title} </title>
     <link href = "/ui/style.css" rel = "stylesheet"/>
   </head>
    <body>
           <div class="container">
            <div>
              <a href="/"> HOME </a>
             </div>
    <hr/>
    <h3> ${heading} </h3>
    <div> ${date} </div>
    <div> ${content} </div>
    </div>
    </body>
    </html>}
    return htmlTemplate ; }
    app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

    
app.get('/:articleName', function (req, res) {
  var articleName=req.params.articleName;
  res.send(path.join(createTemplate(articles(articleName))));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
