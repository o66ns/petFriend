import mongoose from 'mongoose';
interface IUser {
    email: string;
    password: string;
    favorites: mongoose.Types.ObjectId[];
}
export declare const User: mongoose.Model<IUser, {}, {}, {}, mongoose.Document<unknown, {}, IUser, {}, {}> & IUser & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>;
export {};
//# sourceMappingURL=User.d.ts.map