/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      id
      name
      image
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      restaurants {
        items {
          id
          name
          address
          image
          contacts
          avgRatings
          numOfRatings
          locationID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        restaurants {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLocations = /* GraphQL */ `
  query SyncLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLocations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        image
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        restaurants {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getRestaurant = /* GraphQL */ `
  query GetRestaurant($id: ID!) {
    getRestaurant(id: $id) {
      id
      name
      address
      image
      contacts
      avgRatings
      numOfRatings
      locationID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      location {
        id
        name
        image
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        restaurants {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const listRestaurants = /* GraphQL */ `
  query ListRestaurants(
    $filter: ModelRestaurantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        image
        contacts
        avgRatings
        numOfRatings
        locationID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        location {
          id
          name
          image
          description
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRestaurants = /* GraphQL */ `
  query SyncRestaurants(
    $filter: ModelRestaurantFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRestaurants(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        address
        image
        contacts
        avgRatings
        numOfRatings
        locationID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        location {
          id
          name
          image
          description
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
