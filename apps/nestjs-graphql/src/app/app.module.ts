import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GraphQLModule } from "@nestjs/graphql";
import { PetsModule } from "../pets/pets.module";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { ApolloContextFactory } from "../appoloContextFactory";

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      imports: [],
      inject: [],
      driver: ApolloDriver,
      useClass: ApolloContextFactory
    }),
    PetsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
