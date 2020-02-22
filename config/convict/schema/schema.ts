import { Schema } from './schema.interface';

export const defEnv = 'development';
export const envs = [defEnv, 'production', 'test'] as const;

const schema: Schema = {
  env: {
    default: defEnv,
    doc: 'The application environment.',
    env: 'NODE_ENV',
    format: envs,
  },
  server: {
    port: {
      default: 3001,
      doc: 'The port for the server to listen on',
      env: 'SERVER_PORT',
      format: 'port',
    },
    url: {
      default: 'http://localhost',
      doc: 'The url of the server including protocol',
      env: 'SERVER_URL',
      format: 'url',
    },
  },
};

export default schema;
