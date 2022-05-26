import express, { Request, Response } from "express";
import ProfileQueryService from "../services/ProfileQueryService";
import statusCode from "../modules/statusCode";
import util from "../modules/util";
import message from "../modules/responseMessage";
import { ProfileResponseDTO } from "../interfaces/ProfileResponseDTO";

const queryController = async (req: Request, res: Response) => {
    const query = req.query;
    const _id = query.id as string;

    try {
        const data = await ProfileQueryService.getProfile(_id);
        if (!data) {
            throw new Error("NO USER FOUND");
        }
        res.status(statusCode.OK).send(
            util.success(
                statusCode.OK,
                message.QUERIED,
                data            
            )
        )
    } catch (error) {
        console.log(error);
        res.status(statusCode.NOT_FOUND)
            .send(util.fail(
                statusCode.NOT_FOUND,
                message.NOT_FOUND
            ));
    }
}

export default {
    queryController
}