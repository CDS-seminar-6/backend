import mongoose from "mongoose";
import {UserInfo} from '../../interfaces/user/UserInfo';

//interface를 mongoose로 맵핑하는 과정
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    intro_message:{
        type: String,
        required:true
    }
});

export default mongoose.model<UserInfo & mongoose.Document> ("User_Profile",UserSchema);
