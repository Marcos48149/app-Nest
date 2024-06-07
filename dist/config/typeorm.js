"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connecctionSource = void 0;
const typeorm_1 = require("typeorm");
const dotenv_1 = require("dotenv");
const config_1 = require("@nestjs/config");
(0, dotenv_1.config)({ path: '.env.develoment' });
const config = {
    type: 'postgres',
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    autoLoadEntities: true,
    entities: ['dist/**/*.entity{.ts, .js}'],
    migrations: ['dist/migrations/*{.ts,.js}'],
    synchronize: true,
    dropSchema: false,
};
exports.default = (0, config_1.registerAs)('typeorm', () => config);
exports.connecctionSource = new typeorm_1.DataSource(config);
//# sourceMappingURL=typeorm.js.map