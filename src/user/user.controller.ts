import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api/user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post('/login')
    async login(@Body() req): Promise<any> {
        console.log('inside the API ', req);
        
        const userdata = await this.userService.login(req)
        return userdata
        
    }
}
