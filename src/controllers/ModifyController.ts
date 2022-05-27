import express, { Request, Response } from "express";
import { validationResult } from "express-validator";
import statusCode from "../modules/statusCode";
import util from "../modules/util";
import message from "../modules/responseMessage";
import {ProfileUpdateDTO} from "../interfaces/ProfileUpdateDTO";
import ProfileModifyService from "../services/ProfileModifyService";

const modifyProfileController = async (req: Request, res: Response) => {
    const query = req.query;
    const id = query.id as string;
    const name = req.body.name;
    const intro_message = req.body.intro_message;

    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
    }

    const profileUpdateDTO: ProfileUpdateDTO = new ProfileUpdateDTO(id, name, intro_message)

    console.log("id ", id, "name ", name, "intro", intro_message)

    try {
        const data = await ProfileModifyService.changeIntroMessage(profileUpdateDTO);
        res.status(statusCode.OK).send(
            util.success(
                statusCode.OK,
                message.UPDATED,
                data
            )
        )
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR)
            .send(util.fail(
                statusCode.INTERNAL_SERVER_ERROR,
                message.INTERNAL_SERVER_ERROR
            ));
    }
}

export default {
    openLetterController: modifyProfileController
}