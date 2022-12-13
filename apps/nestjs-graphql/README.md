# NestJS & GraphQL

Generated using yarn and Nx
`````shell
$ yarn add -D @nrwl/nest
$ nx generate @nrwl/nest:app nestjs-graphql
`````

# Installation Needed dependencies

Start by installing the required packages:
- [@nestjs/graphql](https://www.npmjs.com/package/@nestjs/graphql) 
- @nestjs/apollo
- [graphql-tools](https://www.npmjs.com/package/graphql-tools)
- [graphql](https://www.npmjs.com/package/graphql) The javascript query language.
- apollo-server-express
- [class-validator](https://www.npmjs.com/package/class-validator) Decorator and non-decorator based validation.

`````shell
$ yarn add @nestjs/graphql @nestjs/apollo graphql-tools graphql apollo-server-express class-validator
````` 
## Generate module
`````shell
$ nx g @nrwl/nest:module pets --project=nestjs-graphql
````` 

## Generate service
`````shell
$ nx g @nrwl/nest:service pets --project=nestjs-graphql
````` 

## Generate service
`````shell
$ nx g @nrwl/nest:resolver pets --project=nestjs-graphql
````` 

## 
- Api under [http://localhost:3300/api](http://localhost:3300/api)
- Playground under [http://localhost:3300/graphql](http://localhost:3300/grqphql)

## Postman

https://www.postman.com/zeshadowz/workspace/js-quickstarts
