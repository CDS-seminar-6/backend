import mongoose from "mongoose";
import { ProfileInfo } from "../interfaces/ProfileInfo";

const ProfileSchema = new mongoose.Schema({
    id_nickname: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    intro_message: {
        type: String
    }
})

export default mongoose.model<ProfileInfo & mongoose.Document>("Profile", ProfileSchema);