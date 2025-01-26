import { ObjectType, Field, Int } from '@nestjs/graphql';
import * as dbs from '../../drizzle/schema'; // Ensure you're importing your db schema correctly

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  // Add more fields as per your User entity definition

  // If you're working with database fields, make sure the fields here correspond to what's in your database.
}
