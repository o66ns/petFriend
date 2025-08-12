"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./db");
const auth_1 = __importDefault(require("./routes/auth"));
const animals_1 = __importDefault(require("./routes/animals"));
const user_1 = __importDefault(require("./routes/user"));
const cors_1 = __importDefault(require("cors"));
(0, db_1.connectDB)();
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: ['https://petfriend-c1jx.onrender.com']
}));
app.use(express_1.default.json());
app.use('/auth', auth_1.default);
app.use('/animals', animals_1.default);
app.use('/api', user_1.default);
app.use('/uploads', express_1.default.static('uploads'));
app.get('/', (_req, res) => {
    res.send('API працює');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер слухає на порту ${PORT}: http://localhost:3000`);
});
//# sourceMappingURL=index.js.map