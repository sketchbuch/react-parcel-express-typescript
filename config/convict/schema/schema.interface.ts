import { SchemaObj } from 'convict';
import { envs } from './schema';

export type Env = typeof envs[number];

export interface Schema {
  env: SchemaObj<Env>;
  server: {
    port: SchemaObj<number>;
    url: SchemaObj<string>;
  };
}
