import  express from "express";
import dotenv from 'dotenv';
import Connection from '../server/database/db.js';
import DefaultData from './default.js';
import router from './routes/routes.js';
import bodyParser from "body-parser";
import cors from 'cors';
import  path from 'path';

const app=express();
app.use(cors());
const absolute=path.resolve("./server/.env")
const result =dotenv.config({path:absolute});
if (result.error) {
  const paths=path.resolve("./.env")
  dotenv.config({path:paths})
  }

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',router);

const PORT=8000;

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);

app.listen(PORT,()=>console.log(`Server is running successfully on PORT ${PORT}`));
// DefaultData();