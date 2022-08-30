// console.log("First result in our node js");


// to run your pages on webserver backend use this syntax

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World'); For plain text 

  res.end(`<!DOCTYPE html>
  <html>
  <head>
      <title></title>
      <link rel="stylesheet" type="text/css" href="css/style.css">
      <link href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
    <style>
    
    </style>
  </head>
  <body>
  
  <header>
      
  <nav>
      <div class="logo"> <h1 style="font-size: 20px;"> Mera bharat </h1> </div>
      <div class="menu">
          <a href="#" style="font-size: ">Home</a>
          <a href="#">gallery</a>
          <a href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA" target="_blank">about</a>
          <a href="#">contact</a>
      </div>
  </nav>
  
      <main>
          <section>
              <h3>Welcome To India</h3>
              <h1>DO COME & VISIT <span class="change_content"> </span> <span style="margin-top: -10px;"> | </span> </h1>
              <p>"India once is not enough"</p>
              <a href="#" class="btnone">learn more</a>
              <a href="#" class="btntwo">signup here</a>
          </section>
      </main>
  
  
  </header>
  
  </body>
  </html>`)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});