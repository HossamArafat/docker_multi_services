import express from 'express'
import mongoose from 'mongoose'
import {createClient} from 'redis'
import {hostname} from 'os'

const app = express()
const port = 4000

mongoose.connect(process.env.DB_URI).then(()=> console.log("DB Connection Succeded")).catch((err)=> console.log("DB Connection Failed"))
const redisClient = createClient({ url: process.env.REDIS_URL})
redisClient.on("error", (err) => console.log("Redis Client Error", err))
redisClient.on("connect", () => console.log("Redis Client Connected"))
await  redisClient.connect();

app.get('/', async (req, res)=> {
    console.log('traffic to ', hostname())
    await redisClient.set('products', 'products list')
    res.send('<h1>Hello Docker!</h1>')
})
app.get('/data', async (req, res)=> {
    const data = await redisClient.get('products')
    res.send(`<h1>Hello Docker!</h1> <h2>${data}</h2>`)
})
app.listen(port, ()=> console.log(`Server running on http://localhost:${port}`))