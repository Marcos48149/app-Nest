import { DataSource, DataSourceOptions } from "typeorm";
import {config as dotenvConfing} from 'dotenv'
import { registerAs } from "@nestjs/config";

dotenvConfing({path:'.env.develoment'})

const config={
      type: 'postgres',
      database: process.env.DB_NAME,
      //host: process.env.DB_HOST,
      host: 'postgresdb',
      port: process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      entities: ['dist/**/*.entity{.ts, .js}'],
      migrations: ['dist/migrations/*{.ts,.js}'],
      synchronize: true,
      dropSchema: false,
           
      }
      export default registerAs('typeorm', ()=> config);
      export const connecctionSource = new DataSource(config as DataSourceOptions)