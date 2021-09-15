/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
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
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
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
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
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
export const createRestaurant = /* GraphQL */ `
  mutation CreateRestaurant(
    $input: CreateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    createRestaurant(input: $input, condition: $condition) {
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
export const updateRestaurant = /* GraphQL */ `
  mutation UpdateRestaurant(
    $input: UpdateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    updateRestaurant(input: $input, condition: $condition) {
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
export const deleteRestaurant = /* GraphQL */ `
  mutation DeleteRestaurant(
    $input: DeleteRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    deleteRestaurant(input: $input, condition: $condition) {
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
