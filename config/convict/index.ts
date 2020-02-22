import convict from 'convict';
import schema from './schema/schema';
import { Schema } from './schema/schema.interface';

const config = convict<Schema>(schema);
const env = config.get('env');

config.loadFile(`./config/convict/env/${env}.json`);
config.validate({ allowed: 'strict' });

export default config;
