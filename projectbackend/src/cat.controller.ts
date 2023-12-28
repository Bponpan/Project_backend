import { Body, Controller, Get, Param, Post} from "@nestjs/common";
import { CatService } from "./cat.service";
import { CreateCatDTO } from "./cat.dto";

@Controller('cat')
export class Catcontroller{
    constructor(private readonly catService : CatService){

    }

    @Get()
    getIndex() : string {
        return "Cat Listing"
    }


    @Get(':id')
    getShow(@Param('id') id : number) : any {
        return "Show Cat by id " + id
    } 

    @Post()
    postCreate(@Body() CreateCatDTO : CreateCatDTO) : string {
        let name = CreateCatDTO.name;
        let sex = CreateCatDTO.sex;
        let color = CreateCatDTO.color;
        let age = CreateCatDTO.age;
        let description = CreateCatDTO.description;

        let resultString
            = 'Create Cat with name=${name},color=${color}';
            resultString += '<br/>age=${age}'
        resultString += '<br/>sex=${sex}'
        resultString += '<br/>description=${description}'
        return resultString

    }
}