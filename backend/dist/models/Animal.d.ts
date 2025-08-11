import mongoose from 'mongoose';
export declare const Animal: mongoose.Model<{
    type: "cat" | "dog" | "bird" | "rodent" | "fish" | "reptile" | "exotic animal" | "domestic animal";
    name: string;
    description: string;
    age: "<6 months" | "<1 year" | "1-3 years" | "3-6 years" | "6-10 years" | "10+ years";
    sex: "male" | "female";
    color: "black" | "white" | "grey" | "red" | "brown" | "bicolor" | "tricolor";
    temperament: "calm and peaceful" | "active and playful" | "shy and cautious" | "aggressive and independent";
    toilet: boolean;
    vaccine: boolean;
    sterilization: boolean;
    kidFriendly: boolean;
    animalFriendly: boolean;
    image: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    type: "cat" | "dog" | "bird" | "rodent" | "fish" | "reptile" | "exotic animal" | "domestic animal";
    name: string;
    description: string;
    age: "<6 months" | "<1 year" | "1-3 years" | "3-6 years" | "6-10 years" | "10+ years";
    sex: "male" | "female";
    color: "black" | "white" | "grey" | "red" | "brown" | "bicolor" | "tricolor";
    temperament: "calm and peaceful" | "active and playful" | "shy and cautious" | "aggressive and independent";
    toilet: boolean;
    vaccine: boolean;
    sterilization: boolean;
    kidFriendly: boolean;
    animalFriendly: boolean;
    image: string;
}, {}, {
    timestamps: false;
}> & {
    type: "cat" | "dog" | "bird" | "rodent" | "fish" | "reptile" | "exotic animal" | "domestic animal";
    name: string;
    description: string;
    age: "<6 months" | "<1 year" | "1-3 years" | "3-6 years" | "6-10 years" | "10+ years";
    sex: "male" | "female";
    color: "black" | "white" | "grey" | "red" | "brown" | "bicolor" | "tricolor";
    temperament: "calm and peaceful" | "active and playful" | "shy and cautious" | "aggressive and independent";
    toilet: boolean;
    vaccine: boolean;
    sterilization: boolean;
    kidFriendly: boolean;
    animalFriendly: boolean;
    image: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: false;
}, {
    type: "cat" | "dog" | "bird" | "rodent" | "fish" | "reptile" | "exotic animal" | "domestic animal";
    name: string;
    description: string;
    age: "<6 months" | "<1 year" | "1-3 years" | "3-6 years" | "6-10 years" | "10+ years";
    sex: "male" | "female";
    color: "black" | "white" | "grey" | "red" | "brown" | "bicolor" | "tricolor";
    temperament: "calm and peaceful" | "active and playful" | "shy and cautious" | "aggressive and independent";
    toilet: boolean;
    vaccine: boolean;
    sterilization: boolean;
    kidFriendly: boolean;
    animalFriendly: boolean;
    image: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    type: "cat" | "dog" | "bird" | "rodent" | "fish" | "reptile" | "exotic animal" | "domestic animal";
    name: string;
    description: string;
    age: "<6 months" | "<1 year" | "1-3 years" | "3-6 years" | "6-10 years" | "10+ years";
    sex: "male" | "female";
    color: "black" | "white" | "grey" | "red" | "brown" | "bicolor" | "tricolor";
    temperament: "calm and peaceful" | "active and playful" | "shy and cautious" | "aggressive and independent";
    toilet: boolean;
    vaccine: boolean;
    sterilization: boolean;
    kidFriendly: boolean;
    animalFriendly: boolean;
    image: string;
}>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: false;
}>> & mongoose.FlatRecord<{
    type: "cat" | "dog" | "bird" | "rodent" | "fish" | "reptile" | "exotic animal" | "domestic animal";
    name: string;
    description: string;
    age: "<6 months" | "<1 year" | "1-3 years" | "3-6 years" | "6-10 years" | "10+ years";
    sex: "male" | "female";
    color: "black" | "white" | "grey" | "red" | "brown" | "bicolor" | "tricolor";
    temperament: "calm and peaceful" | "active and playful" | "shy and cautious" | "aggressive and independent";
    toilet: boolean;
    vaccine: boolean;
    sterilization: boolean;
    kidFriendly: boolean;
    animalFriendly: boolean;
    image: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=Animal.d.ts.map