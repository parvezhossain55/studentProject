import { Student } from "./student.interface";
import { studentModel } from "./student.model";

const createStudentIntoDb = async (student:Student) =>{
  const result = await studentModel.create(student)
  return result
}

const getAllStudents = async ()=>{
  const result = await studentModel.find()
  console.log(result);
  
  return result
  
}

const getSingleStudent = async (id:string)=>{
  const result = await studentModel.findOne({id})
  return result
}

export const StudentServices ={
    createStudentIntoDb,
    getAllStudents,
    getSingleStudent
}