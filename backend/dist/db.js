"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/petfriend';
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(MONGO_URI);
        console.log('MongoDB підключено');
    }
    catch (err) {
        console.error('Помилка підключення до MongoDB:', err);
        process.exit(1);
    }
};
exports.connectDB = connectDB;
//# sourceMappingURL=db.js.map