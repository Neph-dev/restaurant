// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Location, Restaurant } = initSchema(schema);

export {
  Location,
  Restaurant
};