import {ProfileUpdateDTO} from "../interfaces/ProfileUpdateDTO";
import { ProfileResponseDTO } from "../interfaces/ProfileResponseDTO";
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
        const data = await Profile.findOne(filter);
        return new ProfileResponseDTO(data!.id_nickname, data!.name, data!.intro_message)
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default {
    changeIntroMessage
}