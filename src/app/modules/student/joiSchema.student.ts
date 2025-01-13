import Joi from 'joi';

const guardianSchema = Joi.object({
    fatherName: Joi.string().required().messages({
        'string.base': "Father's name must be a string",
        'any.required': "Father's name is required"
    }),
    fatherOccupation: Joi.string().required().messages({
        'string.base': "Father's occupation must be a string",
        'any.required': "Father's occupation is required"
    }),
    fatherContactNo: Joi.string().required().messages({
        'string.base': "Father's contact number must be a string",
        'any.required': "Father's contact number is required"
    }),
    motherName: Joi.string().required().messages({
        'string.base': "Mother's name must be a string",
        'any.required': "Mother's name is required"
    }),
    motherOccupation: Joi.string().required().messages({
        'string.base': "Mother's occupation must be a string",
        'any.required': "Mother's occupation is required"
    }),
});

const localGuardianSchema = Joi.object({
    name: Joi.string().required().messages({
        'string.base': "Local guardian's name must be a string",
        'any.required': "Local guardian's name is required"
    }),
    occupation: Joi.string().required().messages({
        'string.base': "Local guardian's occupation must be a string",
        'any.required': "Local guardian's occupation is required"
    }),
    contactNo: Joi.string().required().messages({
        'string.base': "Local guardian's contact number must be a string",
        'any.required': "Local guardian's contact number is required"
    }),
});

const userNameSchema = Joi.object({
    firstName: Joi.string().required().alphanum().max(20).trim().messages({
        'string.base': "First name must be a string",
        'any.required': "First name is required"
    }),
    middleName: Joi.string().optional().messages({
        'string.base': "Middle name must be a string"
    }),
    lastName: Joi.string().required().messages({
        'string.base': "Last name must be a string",
        'any.required': "Last name is required"
    }),
});

const studentSchema = Joi.object({
    id: Joi.string().required().messages({
        'string.base': "Student ID must be a string",
        'any.required': "Student ID is required"
    }),
    name: userNameSchema.required().messages({
        'any.required': "Student's name is required"
    }),
    gender: Joi.string().valid('male', 'female', 'other').required().messages({
        'any.required': "Gender is required",
        'string.valid': "{VALUE} is not a valid gender"
    }),
    dateOfBirth: Joi.string().required().messages({
        'string.base': "Date of birth must be a string",
        'any.required': "Date of birth is required"
    }),
    email: Joi.string().email().required().messages({
        'string.base': "Email must be a string",
        'string.email': "Email is invalid",
        'any.required': "Email is required"
    }),
    contactNumber: Joi.string().required().messages({
        'string.base': "Contact number must be a string",
        'any.required': "Contact number is required"
    }),
    emergencyContactNo: Joi.string().required().messages({
        'string.base': "Emergency contact number must be a string",
        'any.required': "Emergency contact number is required"
    }),
    bloodGroup: Joi.string().valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-').optional().messages({
        'string.valid': "{VALUE} is not a valid blood group"
    }),
    presentAddress: Joi.string().required().messages({
        'string.base': "Present address must be a string",
        'any.required': "Present address is required"
    }),
    permanentAddress: Joi.string().required().messages({
        'string.base': "Permanent address must be a string",
        'any.required': "Permanent address is required"
    }),
    guardian: guardianSchema.required().messages({
        'any.required': "Guardian information is required"
    }),
    localGurdian: localGuardianSchema.required().messages({
        'any.required': "Local guardian information is required"
    }),
    profileImage: Joi.string().required().messages({
        'string.base': "Profile image must be a string",
        'any.required': "Profile image is required"
    }),
    isActive: Joi.string().valid('Active', 'inActive').default('Active').messages({
        'string.valid': "{VALUE} is not a valid status"
    }),
});

export default studentSchema;
