/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
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
export const onCreateRestaurant = /* GraphQL */ `
  subscription OnCreateRestaurant {
    onCreateRestaurant {
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
export const onUpdateRestaurant = /* GraphQL */ `
  subscription OnUpdateRestaurant {
    onUpdateRestaurant {
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
export const onDeleteRestaurant = /* GraphQL */ `
  subscription OnDeleteRestaurant {
    onDeleteRestaurant {
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
