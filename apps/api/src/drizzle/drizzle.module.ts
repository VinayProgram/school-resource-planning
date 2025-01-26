import { Global, Module } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as usersTable  from './schema';
import { DATBASE_CONNECTION } from './database.constants';

@Global()
@Module({
    providers:[
        {
            provide: DATBASE_CONNECTION,
            useFactory:()=>{
                const pool=new Pool({
                    connectionString:process.env.DATABASE_URL
                })
                return drizzle(pool,{
                    schema:{
                        ...usersTable
                    }
                })
            }
        }
    ],
    exports:[
        DATBASE_CONNECTION
    ]
})
export class DrizzleModule {}
