import 'dotenv/config'
import express from "express";
import { router } from "./src/routes";
import mongoose from 'mongoose';

mongoose.connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log('Database connected!')
    app.emit('database')
  });

const app = express()

app.use(express.json())

//rotas da aplicação
app.use(router)

app.on('database', () => {
  app.listen(3000, () => console.log('Server is running!'))
})
