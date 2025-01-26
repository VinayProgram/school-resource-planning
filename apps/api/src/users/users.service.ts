import { Inject, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { DATBASE_CONNECTION } from 'src/drizzle/database.constants';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as dbs from '../drizzle/schema'
@Injectable()
export class UsersService {

  constructor(
    @Inject(DATBASE_CONNECTION) private readonly db:NodePgDatabase<typeof dbs> 
  ){}

  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  findAll() {
    console.log('video')
    return this.db.select().from(dbs.usersTable);
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
