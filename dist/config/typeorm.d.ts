import { DataSource } from "typeorm";
declare const _default: (() => {
    type: string;
    database: string;
    host: string;
    port: string;
    username: string;
    password: string;
    autoLoadEntities: boolean;
    entities: string[];
    migrations: string[];
    synchronize: boolean;
    dropSchema: boolean;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    type: string;
    database: string;
    host: string;
    port: string;
    username: string;
    password: string;
    autoLoadEntities: boolean;
    entities: string[];
    migrations: string[];
    synchronize: boolean;
    dropSchema: boolean;
}>;
export default _default;
export declare const connecctionSource: DataSource;
