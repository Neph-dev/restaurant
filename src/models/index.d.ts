import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Location {
  readonly id: string;
  readonly name: string;
  readonly image: string;
  readonly description?: string;
  readonly restaurants?: (Restaurant | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Location>);
  static copyOf(source: Location, mutator: (draft: MutableModel<Location>) => MutableModel<Location> | void): Location;
}

export declare class Restaurant {
  readonly id: string;
  readonly name: string;
  readonly address: string;
  readonly image: string;
  readonly contacts: string;
  readonly avgRatings: number;
  readonly numOfRatings: number;
  readonly location?: Location;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Restaurant>);
  static copyOf(source: Restaurant, mutator: (draft: MutableModel<Restaurant>) => MutableModel<Restaurant> | void): Restaurant;
}