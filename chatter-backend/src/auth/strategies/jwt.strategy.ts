import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ConfigService } from '@nestjs/config';
import { TokenPayload } from "../token-payload.interface";


@Injectable()

export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                (req: Request) => {
                    return req?.cookies?.Authentication;
                }
            ]),
            secretOrKey: configService.getOrThrow<string>('JWT_SECRET'),
        });
    }

    validate(payload: TokenPayload){
        return payload;
    }
}