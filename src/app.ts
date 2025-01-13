import express, { Application, Request, Response} from "express"
import cors from 'cors'
import { studentRouter } from "./app/modules/student/student.route"

const app:Application = express()


app.use(express.json())
app.use(cors())


const getEcontroller = (req:Request, res:Response) => {
  res.send('Hello World!')
}

app.use('/api/v1/students',studentRouter)

app.get('/', getEcontroller )

export default app


