import dotenv from "dotenv";
import express from "express";

dotenv.config();
const port = process.env.SERVER_PORT;
const app = express();

app.get('/', (req, res)=> {
    res.send('<h1>hello</h1>')
})

app.listen( port, ()=> console.log(`app in running on port: ${port}`) );