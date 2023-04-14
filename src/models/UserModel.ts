import mongoose, {  Document } from "mongoose";
import {User} from "../entities/User" 

export interface UserDocument extends  User {} 

export const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }, 
  id:{ 
    type: String,
  
    
  }
});
 


const UserModel = mongoose.model<UserDocument>('User', UserSchema);

export default UserModel;
