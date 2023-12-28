import { IsNotEmpty } from "class-validator";

export class CreateCatDTO {
    @IsNotEmpty()
    name : string;

    @IsNotEmpty()
    sex : string;

    @IsNotEmpty()
    color : string;

    @IsNotEmpty()
    age : number;

    description? : string;
}