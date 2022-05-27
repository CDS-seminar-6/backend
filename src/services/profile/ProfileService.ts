import User from "../../models/user/Users";
import { ProfileUpdateDto } from "../../interfaces/user/ProfileUpdateDto";
import { ProfileResponseDto } from "../../interfaces/user/ProfileResponseDto";

const findUserById = async(userId:string): Promise<ProfileResponseDto | null> => {
    try{
        const user = await User.findById(userId);
        if(!user){
            return null;
        }
        const result = {
            id: user.id,
            name: user.name,
            intro_message : user.intro_message
        }
        return result;
    
    }catch(error){
        console.log(error);
        throw error;
    }
}

const updateProfile = async(userId: string, profileUpdateDto: ProfileUpdateDto) : Promise<ProfileResponseDto | null> => {
    try{
        await User.findByIdAndUpdate(userId,profileUpdateDto);
        const data = await User.findById(userId);
        if(!data){
            return null;
        }
        const result = {
            id: data._id,
            name: data.name,
            intro_message: data.intro_message
        }
        return result;
        
    }catch(error){
        console.log(error);
        throw error;
    }
}


export default {
    updateProfile,
    findUserById
}