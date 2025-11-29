import express from "express"
import cookieParser from "cookie-parser"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.get("/", (req: express.Request, res: express.Response) => {
    res.status(200)
    return res.json("Hello World")
})

app.listen(8080, () => console.log(`Listening on port 8080`))