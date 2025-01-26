import { Inject, Injectable } from '@nestjs/common';
import * as db from './drizzle/schema'
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DATBASE_CONNECTION } from './drizzle/database.constants';
@Injectable()
export class AppService {
  constructor(
    @Inject(DATBASE_CONNECTION) private readonly dbSchema:NodePgDatabase<typeof db>
  ){}
  async getHello() {
    return await this.dbSchema.select().from(db.usersTable)
  }

  async insertUser(data:typeof db.usersTable.$inferInsert){
      await this.dbSchema.insert(db.usersTable).values(data)
  }
}
