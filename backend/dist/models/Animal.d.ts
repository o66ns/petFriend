import mongoose from 'mongoose';
export declare const Animal: mongoose.Model<{
    name: string;
    toilet: boolean;
    vaccine: boolean;
    sterilization: boolean;
    kidFriendly: boolean;
    animalFriendly: boolean;
    type?: "cat" | "dog" | "bird" | "rodent" | "fish" | "reptile" | "exotic animal" | "domestic animal" | null;
    description?: string | null;
    age?: "<6 months" | "<1 year" | "1-3 years" | "3-6 years" | "6-10 years" | "10+ years" | null;
    sex?: "male" | "female" | null;
    color?: "black" | "white" | "grey" | "red" | "brown" | "bicolor" | "tricolor" | null;
    temperament?: "calm and peaceful" | "active and playful" | "shy and cautious" | "aggressive and independent" | null;
    image?: string | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    toilet: boolean;
    vaccine: boolean;
    sterilization: boolean;
    kidFriendly: boolean;
    animalFriendly: boolean;
    type?: "cat" | "dog" | "bird" | "rodent" | "fish" | "reptile" | "exotic animal" | "domestic animal" | null;
    description?: string | null;
    age?: "<6 months" | "<1 year" | "1-3 years" | "3-6 years" | "6-10 years" | "10+ years" | null;
    sex?: "male" | "female" | null;
    color?: "black" | "white" | "grey" | "red" | "brown" | "bicolor" | "tricolor" | null;
    temperament?: "calm and peaceful" | "active and playful" | "shy and cautious" | "aggressive and independent" | null;
    image?: string | null;
}, {}, {
    timestamps: false;
}> & {
    name: string;
    toilet: boolean;
    vaccine: boolean;
    sterilization: boolean;
    kidFriendly: boolean;
    animalFriendly: boolean;
    type?: "cat" | "dog" | "bird" | "rodent" | "fish" | "reptile" | "exotic animal" | "domestic animal" | null;
    description?: string | null;
    age?: "<6 months" | "<1 year" | "1-3 years" | "3-6 years" | "6-10 years" | "10+ years" | null;
    sex?: "male" | "female" | null;
    color?: "black" | "white" | "grey" | "red" | "brown" | "bicolor" | "tricolor" | null;
    temperament?: "calm and peaceful" | "active and playful" | "shy and cautious" | "aggressive and independent" | null;
    image?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: false;
}, {
    name: string;
    toilet: boolean;
    vaccine: boolean;
    sterilization: boolean;
    kidFriendly: boolean;
    animalFriendly: boolean;
    type?: "cat" | "dog" | "bird" | "rodent" | "fish" | "reptile" | "exotic animal" | "domestic animal" | null;
    description?: string | null;
    age?: "<6 months" | "<1 year" | "1-3 years" | "3-6 years" | "6-10 years" | "10+ years" | null;
    sex?: "male" | "female" | null;
    color?: "black" | "white" | "grey" | "red" | "brown" | "bicolor" | "tricolor" | null;
    temperament?: "calm and peaceful" | "active and playful" | "shy and cautious" | "aggressive and independent" | null;
    image?: string | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    toilet: boolean;
    vaccine: boolean;
    sterilization: boolean;
    kidFriendly: boolean;
    animalFriendly: boolean;
    type?: "cat" | "dog" | "bird" | "rodent" | "fish" | "reptile" | "exotic animal" | "domestic animal" | null;
    description?: string | null;
    age?: "<6 months" | "<1 year" | "1-3 years" | "3-6 years" | "6-10 years" | "10+ years" | null;
    sex?: "male" | "female" | null;
    color?: "black" | "white" | "grey" | "red" | "brown" | "bicolor" | "tricolor" | null;
    temperament?: "calm and peaceful" | "active and playful" | "shy and cautious" | "aggressive and independent" | null;
    image?: string | null;
}>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: false;
}>> & mongoose.FlatRecord<{
    name: string;
    toilet: boolean;
    vaccine: boolean;
    sterilization: boolean;
    kidFriendly: boolean;
    animalFriendly: boolean;
    type?: "cat" | "dog" | "bird" | "rodent" | "fish" | "reptile" | "exotic animal" | "domestic animal" | null;
    description?: string | null;
    age?: "<6 months" | "<1 year" | "1-3 years" | "3-6 years" | "6-10 years" | "10+ years" | null;
    sex?: "male" | "female" | null;
    color?: "black" | "white" | "grey" | "red" | "brown" | "bicolor" | "tricolor" | null;
    temperament?: "calm and peaceful" | "active and playful" | "shy and cautious" | "aggressive and independent" | null;
    image?: string | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=Animal.d.ts.map