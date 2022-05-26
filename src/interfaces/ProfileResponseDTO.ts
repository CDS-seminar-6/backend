export class ProfileResponseDTO {
    id: string;
    name: string;
    intro_message: string;

    constructor(_id: string, _name: string, _intro_message: string) {
        this.id = _id,
        this.name = _name,
        this.intro_message = _intro_message
    }
}