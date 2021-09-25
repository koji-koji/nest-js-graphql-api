import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      // Schema first approach
      typePaths: ['./**/*.graphql'],
      // 抽象構文木（AST）からTypeScript定義を自動的に生成
      definitions: {
        path: join(process.cwd(), 'src/schema_first_graphql.ts'),
        // classとして出力。デフォルトではインターフェース
        // outputAs: 'class',
      },
      // Code first approach
      autoSchemaFile: join(process.cwd(), 'src/code_first_schema.gql'),
      // trueの場合はthe schema can be generated on-the-fly in memory
      // autoSchemaFile: true,
      // 辞書式に並べ替えたいとき。デフォルトでは定義されている順。
      // sortSchema: true
    }),
    RecipesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
