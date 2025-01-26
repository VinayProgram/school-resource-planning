import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrizzleModule } from './drizzle/drizzle.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver:ApolloDriver,
      introspection:true,
      fieldResolverEnhancers:['guards'],
      autoSchemaFile:join(process.cwd(),'src/schema.gql'),
      buildSchemaOptions:{
        numberScalarMode:'integer'
      }
    }),
    DrizzleModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
