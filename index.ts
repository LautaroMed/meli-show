import dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'

import status from 'http-status-codes'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
    res.status(status.FORBIDDEN).send( { error: status.getStatusText(status.FORBIDDEN) })
})

app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`)
})
