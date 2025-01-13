import { Schema, model } from 'mongoose';
import validator from "validator"
import { Guardian, localGurdian, Student, userName } from './student.interface';

const guardianSchema = new Schema<Guardian>({
    fatherName: { type: String, required: [true, "Father's name is required"] },
    fatherOccupation: { type: String, required: [true, "Father's occupation is required"] },
    fatherContactNo: { type: String, required: [true, "Father's contact number is required"] },
    motherName: { type: String, required: [true, "Mother's name is required"] },
    motherOccupation: { type: String, required: [true, "Mother's occupation is required"] },
});

const localGurdianSchema = new Schema<localGurdian>({
    name: { type: String, required: [true, "Local guardian's name is required"] },
    occupation: { type: String, required: [true, "Local guardian's occupation is required"] },
    contactNo: { type: String, required: [true, "Local guardian's contact number is required"] },
});

const userNameSchema = new Schema<userName>({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        
        trim:true,
        
}, 
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
    },
});

const StudentSchema = new Schema<Student>({
    id: { type: String, required: [true, "Student ID is required"], unique:true},
    name: {
        type: userNameSchema,
        required: [true, "Student's name is required"],
    },
    gender: {
        type: String,
        enum: {
            values: ['male', 'female', 'other'],
            message: "{VALUE} is not a valid gender",
        },
        required: [true, "Gender is required"],
    },
    dateOfBirth: { type: String, required: [true, "Date of birth is required"] },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate:{
            validator:(value:string)=>validator.isEmail(value),
            message: "email to thik vabe daw vai "
        }
    },
    contactNumber: {
        type: String,
        required: [true, "Contact number is required"],
    },
    emergencyContactNo: {
        type: String,
        required: [true, "Emergency contact number is required"],
    },
    bloodGroup: {
        type: String,
        enum: {
            values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
            message: "{VALUE} is not a valid blood group",
        },
    },
    presentAddress: {
        type: String,
        required: [true, "Present address is required"],
    },
    permanentAddress: {
        type: String,
        required: [true, "Permanent address is required"],
    },
    guardian: {
        type: guardianSchema,
        required: [true, "Guardian information is required"],
    },
    localGurdian: {
        type: localGurdianSchema,
        required: [true, "Local guardian information is required"],
    },
    profileImage: { type: String, required: [true, "Profile image is required"] },
    isActive: {
        type: String,
        enum: {
            values: ['Active', 'inActive'],
            message: "{VALUE} is not a valid status",
        },
        default: 'Active',
    },
});

export const studentModel = model<Student>('Student', StudentSchema);