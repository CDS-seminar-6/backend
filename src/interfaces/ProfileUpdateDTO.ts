export class ProfileUpdateDTO {
    id: string
    name: string
    intro_message: string

    constructor(id: string, name: string, intro_message: string) {
        this.id = id;
        this.name = name;
        this.intro_message = intro_message;
    }
}