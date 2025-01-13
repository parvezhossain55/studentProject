import { Request, Response } from "express";
import { StudentServices} from "./studnet.service";
import studentSchema from "./joiSchema.student";
const createStudent = async (req:Request, res:Response) =>{
//SEND RESPONSE 
 try {
    const student = req.body 
    const {error,value} =studentSchema.validate(student)
    if(error){
      res.status(400).json({
         success:false,
         message :'Something went wrong',
         error: error   })
         return
    }
    
    const result = await StudentServices.createStudentIntoDb(value)
    res.status(200).json({
      success:true,
      message :'Student is created successfully',
      data: result
    })
 } catch (error) {
   res.status(500).json({
      success:false,
      message :'Something went wrong',
      error: error   })
 }
}


const getAllstudent= async (req:Request,res:Response)=>{
try {

   const result = await StudentServices.getAllStudents()
   console.log(result);
   
   res.status(200).json({
      success:true,
      message :'Student is retrived',
      data: result 
     })
} catch (error) {
   res.status(500).json({
      success:false,
      message :'Student ond retrived',
      error: error   })

}
}


const getOnestudent= async (req:Request,res:Response)=>{
   try {
      const {id} =req.params
   
      const result = await StudentServices.getSingleStudent(id)
      res.status(200).json({
         success:true,
         message :'Student ond retrived',
         data: result   })
   } catch (error) {
      res.status(500).json({
         success:false,
         message :'Student ond retrived',
         error: error   })
   }
   }

export const StudentController= {
    createStudent,getAllstudent,getOnestudent
}