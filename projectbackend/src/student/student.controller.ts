import { Body,Controller,Post,Get } from "@nestjs/common";
import { StudentDto } from "./student.dto";
import { AppService } from "src/app.service";
import { ConfigService } from "@nestjs/config/dist";

@Controller('student')
export class AppController{
    constructor(private readonly appService: AppService, private configService: ConfigService) {}

    @Get('environment')
    getEnv():any{
        const example_value = this.configService.get<string>('EXAMPLE_VARIABLE')

        return example_value
    }
}


export class StudentController {

    @Post()
    postStudentDate(@Body() student : StudentDto) : any{

        let today = new Date();
        let yeardiff = today.getFullYear() - student.birthdate.getFullYear();

        return yeardiff;
    }
}