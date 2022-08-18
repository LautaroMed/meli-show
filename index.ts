import dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'

import status from 'http-status-codes'

import playController from "./src/controllers/playController"
import showController from "./src/controllers/showController";

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
    res.status(status.FORBIDDEN).send( { error: status.getStatusText(status.FORBIDDEN) })
})

app.get('/api/play', playController.list)

app.get('/api/plays/:playId/show', showController.list)
app.post('/api/plays/:playId/show/:showId/booking', showController.book)

app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`)
})
