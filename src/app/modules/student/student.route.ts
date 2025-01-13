import express from 'express'
import { StudentController } from './student.controler'

const router = express.Router()

router.post('/create-student', StudentController.createStudent )
router.get('/getStudent',StudentController.getAllstudent)
router.get('/:id',StudentController.getOnestudent)

export const studentRouter=router