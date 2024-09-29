import express from 'express'
import router from './routes/index.js'
import db from './config/db.js'
const app = express()

app.listen(3002, () => {
  console.log('listeninig at 3001')

  db.connection.once('open', () => {
    console.log('db connected successfully!')
  })
})

app.use(express.json());
app.use('/', router)
