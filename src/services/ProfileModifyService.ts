import {ProfileUpdateDTO} from "../interfaces/ProfileUpdateDTO";
import Profile from "../models/Profile";

const changeIntroMessage = async (dto: ProfileUpdateDTO) => {
    try {
        const filter = {
            id_nickname: dto.id
        }
        const update = {
            intro_message: dto.intro_message
        }
        const letter = await Profile.findOne(filter);
        if (!letter) {
            return null;
        }
        await Profile.findOneAndUpdate(filter, update);
        return await Profile.findOne(filter);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default {
    changeIntroMessage
}