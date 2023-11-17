const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <head>
  <title>Al-Madina Mandi House</title>
  
  
  <link href="css_file.css">
  <style>
  body{
  background-color:rgb(182 255 53);
  background-color:silver;
  }
  h2{
  background-color:green;
  border-radius:10px;
  color:white;
  font-family:Castellar;
  font-weight: bold ;
  font-size: 30px;
  width:300px;
  margin:auto;
  text-align:center;
  padding: 20px;
  /* text-shadow:1px 1px white;*/
  }
  
  #tar{
  /*background-color:green;*/
  margin:10px 800px;
  width:174px;
  text-shadow:1px 1px green;
  }
  
  #content{
  width: 800px;
  margin:auto;
  /*text-align:center;*/
  }
  
  .btn{
              background-color: silver;
              color: black;
              width: 120px;
              text-align: center;
              text-weight:bold;
              font-size: 30px;
              font-family:Chiller;
              padding: 10px;
              border-radius: 15px;
              border:none;	
              margin: 30px;
             curson:pointer; 
  
  }
  .btn:hover{
  background-color: lightgrey;
  cursor: pointer;
  /*border: 5px dashed rgba(109,112,243,1);*/
  text-shadow:0.5px 0.5px green;
  }
  a{
  color:black;
  text-decoration:none;
  }
  </style>
  </head>
  <body>
  
  <script src="js_file.js"></script>
  
  <div>
  
  <h2>Al-Madina Mandi House</h2>
  
  <div id="tar">
  <strong><em>~The Araibian Restaurant</em> </strong></div>
  </div>
  
  <header id="content">
  <div >
  
  <button class="btn" ><a href='billing.html ' target=_blank onclick ="window.print()">billing
  <a>
  </button>
  
  <button class="btn"><a href='https://partner.swiggy.com/orders' target=_blank>
  swiggy partner</a></button>
  
  <button class="btn"><a href='https://www.zomato.com/partners/onlineordering/orders/' target=_blank>
  zomato partner</a>
  </button>
  
  <button class="btn"><a  href='https://web.slickpos.com/'  target=_blank >
  slick pos
  </button>
  </header>
  </div>
  
  
  </body>
  </head>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});