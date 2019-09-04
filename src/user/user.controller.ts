import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UserId } from './user.decorator';
import { Authenticated } from '../auth/auth.decorator';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Authenticated()
    @Get('profile')
    getProfile(@UserId() userId: string) {
        console.log(userId);
        return this.userService.findById(userId);
    }
}
