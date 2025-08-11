"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MONGO_URI = 'mongodb+srv://o66ns:GLl7FnyE@petfriend.p9bky34.mongodb.net/?retryWrites=true&w=majority&appName=petFriend';
const connectDB = async () => {
    if (!MONGO_URI) {
        console.error('No MONGO_URI in env');
        process.exit(1);
    }
    try {
        await mongoose_1.default.connect(MONGO_URI);
        console.log('MongoDB connected');
    }
    catch (err) {
        console.error('Error connecting MongoDB:', err);
        process.exit(1);
    }
};
exports.connectDB = connectDB;
//# sourceMappingURL=db.js.map