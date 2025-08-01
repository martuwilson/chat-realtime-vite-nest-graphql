import { Controller, Post, Res, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/loca-auth.guards';
import { CurrentUser } from './current-user.decorator';
import { User } from 'src/users/entities/user.entity';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    @Post('login')
    @UseGuards(LocalAuthGuard)
    async login(
        @CurrentUser() user: User,
        @Res({ passthrough: true }) response: Response
    ) {

    }
}
