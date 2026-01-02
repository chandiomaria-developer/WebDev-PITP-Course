//1.Import Express
const express = require('express');

//2. Create an Express applicatiom
const app = express();

//3. Define  the port
const  port = 3000;

//4. Create our first "route"
//This handles Get requests to the homepage ("/")
app.get('/',(req,res) => {res.send('Hello, world! This is my first Express server.');});

//5. Start the server and lissten for connections 
app.listen(port,() => {console.log(`Server is running at http://localhost:${port}`);});s