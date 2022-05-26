import express, { Request, Response } from "express";
import { validationResult } from "express-validator";
import statusCode from "../modules/statusCode";
import util from "../modules/util";
import message from "../modules/responseMessage";
import {ProfileUpdateDTO} from "../interfaces/ProfileUpdateDTO";
import ProfileModifyService from "../services/ProfileModifyService";

const modifyProfileController = async (req: Request, res: Response) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
    }

    const profileUpdateDTO: ProfileUpdateDTO = req.body;

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