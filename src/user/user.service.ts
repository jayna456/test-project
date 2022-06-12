import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async login(reqPayload: any): Promise<any> {
        const foundUser = await this.userModel.findOne({ email: reqPayload.email}).lean().exec();

        if(foundUser) {
            if(bcrypt.compareSync(reqPayload.password, foundUser.password)) {
                return foundUser;
            }
            else {
                return 'Password is not matched'
            }
        }
        else {
            return 'User not found'
        }
    }
}
