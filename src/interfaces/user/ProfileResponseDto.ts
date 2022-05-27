import mongoose from "mongoose";

export interface ProfileResponseDto{
    id: String;
    name: string;
    intro_message: string;
}