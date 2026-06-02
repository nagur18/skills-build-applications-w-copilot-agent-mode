import express from 'express'
import mongoose from 'mongoose'

const PORT = process.env.PORT || 8000
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/octofit'

const app = express()
app.use(express.json())

app.get('/health', (_req, res) => res.json({ status: 'ok' }))

mongoose.connect(MONGO_URL)
  .then(() => {
    app.listen(Number(PORT), () => console.log(`Backend running on port ${PORT}`))
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err)
    process.exit(1)
  })
