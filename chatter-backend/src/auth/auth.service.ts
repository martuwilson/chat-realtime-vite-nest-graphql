import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { User } from 'src/users/entities/user.entity';
import { ConfigService } from '@nestjs/config';
import { TokenPayload } from './token-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private readonly ConfigService: ConfigService, private readonly JwtService: JwtService) {}

    async login(user: User, response: Response){
        const expires = new Date();
        expires.setSeconds(
            expires.getSeconds() + this.ConfigService.getOrThrow<number>('JWT_EXPIRATION_TIME')
        )

        const tokenPayload: TokenPayload = {
            _id: user._id.toHexString(),
            email: user.email
        }

        const token = this.JwtService.sign(tokenPayload);

        response.cookie('Authentication', token, {
            httpOnly: true,
            expires: expires
        });

        return { user: { email: user.email } };
    }
}
