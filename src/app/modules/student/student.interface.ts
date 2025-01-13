import { Schema, model, connect } from 'mongoose';
export type Guardian={
    fatherName: string;
    fatherOccupation: string
    fatherContactNo: string;
    motherName: string;
    motherOccupation: string
}

export type localGurdian = {
    name: string;
    occupation:string;
    contactNo:string;

}

export type userName = {
    firstName : string;
    middleName: string;
    lastName : string

};
    
export type  Student = {
    id:string;
    name: userName
    gender:'male'| 'female';
    dateOfBirth:string
    email: string;
    contactNumber:string;
    emergencyContactNo:string;
    bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    presentAddress : string;
    permanentAddress : string;
    guardian:Guardian;
    localGurdian:localGurdian;
    profileImage:string;
    isActive:'Active' | 'inActive'
}