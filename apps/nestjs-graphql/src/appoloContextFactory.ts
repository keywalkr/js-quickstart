import { Injectable, Logger } from "@nestjs/common";
import { GqlOptionsFactory } from "@nestjs/graphql";
import { ApolloDriverConfig } from "@nestjs/apollo";

@Injectable()
export class ApolloContextFactory implements GqlOptionsFactory<ApolloDriverConfig> {

  private readonly logger = new Logger(ApolloContextFactory.name);

  constructor() {
  }

  createGqlOptions(): Promise<Omit<ApolloDriverConfig, "driver">> | Omit<ApolloDriverConfig, "driver"> {
    return {
      path: '/',
      cache: 'bounded',
      autoSchemaFile: './graphql/schema.gql',
      sortSchema: true,
      playground: true,
    };
  }

}
