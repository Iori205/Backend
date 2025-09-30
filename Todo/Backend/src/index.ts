import cors from "cors"
import express, {Application, Request, Response} from "express"
import {nanoid} from "nanoid"

const app: Application = express()
const port = 4000

const tasks = [
  {id: "1", name: "Shalaa ugaah"},
  {id: "2", name: "Toosoo archih"}
]

app.use(cors())
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  // Anything
  res.send("Ger tsewerleh")
})

app.get("/tasks", (req: Request, res: Response) => {
  res.send(tasks)
})

app.post("/tasks", (req: Request, res: Response) => {
  const id = nanoid()
  const { name } = req.body
  tasks.unshift({id, name})
  res.status(201).send({ id })
})

app.delete("/tasks/:id", (req: Request, res: Response) => {
  const id = req.params.id
  // fetch all tasks
  res.send([])
})

app.put("/tasks/:id", (req: Request, res: Response) => {
  const id = req.params.id
  // fetch all tasks
  res.send([])
})

app.listen(port, () => {
  console.log(`Example app listenig on port ${port}`)
})