import { createSchema } from './src/compiler/index';;
import { printSchema } from 'graphql';
import {getModifiedSchema} from './src/compiler/schemaModifer'
import {updateServer} from './src/updateServer'

const schema = createSchema('/Users/nikhil/Workspace/Personal/next-gen-store/slash-graphql-hackathon/src/interfaces/t_userDetails.interface.ts');
let finalSchema = getModifiedSchema(printSchema(schema));
console.log(finalSchema)
updateServer(finalSchema)

