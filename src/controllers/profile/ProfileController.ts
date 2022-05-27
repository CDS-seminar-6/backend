import express, {Request, Response} from "express";
import statusCode from "../../modules/statusCode";
import message from "../../modules/responseMessage";
import util from "../../modules/util";
import { validationResult } from "express-validator";
import { ProfileUpdateDto } from "../../interfaces/user/ProfileUpdateDto";
import ProfileService from "../../services/profile/ProfileService";

/**
 * @route GET /profile/:userId
 * @Desc Get Profile
 * @Access public 
 */
 const findProfileById = async (req: Request, res: Response) => {
    console.log("FINDPROFILEBYID");
    //service랑 연결
    
    const {userId} = req.params;

    try{
        const data = await ProfileService.findUserById(userId);
        if(!data){
            return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
        }
        res.status(statusCode.OK).send(util.success(statusCode.OK,message.READ_PROFILE_SUCCESS,data));
    }catch(error){
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

/**
 * @route POST /profile/:userId
 * @Desc Update Profile
 * @Access public 
 */
 const updateProfile = async (req: Request, res: Response) => {
     const profileUpdateDto: ProfileUpdateDto = req.body;
     const {userId} = req.params;

     try{
        const data = await ProfileService.updateProfile(userId, profileUpdateDto);
        if(!data){
            return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
        }
        res.status(statusCode.OK).send(util.success(statusCode.OK,message.UPDATE_PROFILE_SUCCESS,data));

     }catch(error){
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
     }
    
}


export default {
    findProfileById,
    updateProfile
}