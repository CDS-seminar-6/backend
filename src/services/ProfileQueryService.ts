import { ProfileResponseDTO } from "../interfaces/ProfileResponseDTO";
import Profile from "../models/Profile";

const getProfile = async (_id: string) => {
    const condition = {
        id_nickname: _id
    }
    console.log(">>>>>>>>>>>>>>>>>>>>>>", condition)
    const data = await Profile.findOne(condition);
    return new ProfileResponseDTO(data!.id_nickname, data!.name, data!.intro_message)
}

export default {
    getProfile
}
