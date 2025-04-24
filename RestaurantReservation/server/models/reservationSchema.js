import mongoose from 'mongoose';
import validator from 'validator'; //for email validation

const reservationSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
        minlength:[2 , "First Name at least contain 2 letters"],
        maxlength:[12 , "First Name at most contain 12 letters"],
    },

    lastName:{
        type:String,
        required: true,
        minlength:[2 , "last Name at least contain 2 letters"],
        maxlength:[12 , "last Name at most contain 30 letters"],
    },

    email:{
        type:String,
        required: true,
        validate:[validator.isEmail , "Prvide a valid email"],
    },

    phone:{
        type:String,
        required: true,
        minlength:[10 , "Provide Valid Phone Number"],
        maxlength:[11 , "Provide Valid Phone Number"],
    },

    time:{
        type: String,
        required: true,
    },

    date:{
        type: String,
        required: true,
    },

});

export const Reservation = mongoose.model("reservation" , reservationSchema );