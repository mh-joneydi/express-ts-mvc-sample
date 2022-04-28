import dotenv from "dotenv";
import express from "express";
import bodyParser from 'body-parser'
import path from "path";
import rootRouter from "./routes";
import todoRouter from "./routes/todo";
import sequelize from "./utils/database";
import rootDirPath from "./utils/rootDirPath";

dotenv.config();
const port = process.env.SERVER_PORT;
const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));

// EJS
app.set("view engine", "ejs");
app.set("views", path.join(rootDirPath, 'views'));

// statics
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use(rootRouter);
app.use('/todo', todoRouter);

// 404
app.use((req, res)=> {
    res.send('<h1>404 | page not found</h1>')
});

// connect to database and start the app 
sequelize
.sync()
.then(()=> {
    app.listen( port, ()=> console.log(`app in running on port: ${port}`) );
})
.catch( err=> console.log(err));