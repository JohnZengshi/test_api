'use strict';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    salary: Number,
    gender: String,
    userType: {
        type: String,
        default: "普通用户"
    },
    phone:Number,
    imgurl: String,
    id:Number
})

userSchema.index({
    id: 1
});

const User = mongoose.model('User', userSchema);

export default User