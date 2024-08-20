import { Body, Controller ,Get, Param, Post,Patch} from '@nestjs/common';

@Controller('users')
export class UsersController {
    /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */

    @Get() // Get/users
    findAll(){
        return []
    }
   
    @Get(':id') // GET /users/:id
    findOne(@Param('id') id: string){
        return {id}
    }

    @Post() // POST /users
    create(@Body() user: {}){
        return user
    }

    @Patch(':id') // PATCH   /users /:id
    update(@Param('id') id: string, @Body() userUpdate: {}){
        return {id}
    }
}