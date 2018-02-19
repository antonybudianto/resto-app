# RestoHub API Design

### Get all resto cuisines
```
**GET** /api/cuisines

// Response
// HTTP 200
{
  data: [
    {
      id: 1,
      name: "Chinese"
    }
  ]
}
```

### Get all resto countries
```
**GET** /api/countries

// Response
// HTTP 200
{
  data: [
    {
      id: 1,
      name: "Indonesia"
    }
  ]
}
```

### Get all nearest restaurant
```
**GET** /api/restaurants?lat=x&lon=y&top=11

// Query params
lat = latitude of the location
lon = longitude of the location
top = get the top 11 restaurants (need 1 for the top 1), ordered by rating

// Response
// HTTP 200
{
  data: [
    {
      id: 1,
      name: 'Holycow',
      slug: 'holycow',
      cuisineId: 1,
      location: {
        latitude: -6.1744,
        longitude: 102.8294,
        countryId: 1,
        address: 'Jl. Guru Mughni No.12'
      },
      rating: 5,
      distance: 10
    }
  ]
}
```

### Get restaurant by slug
```
**GET** /api/restaurants/:slug

// Response
// HTTP 200
{
  data: {
    id: 1,
    name: 'Holycow',
    slug: 'holycow',
    cuisineId: 1,
    location: {
      latitude: -6.1744,
      longitude: 102.8294,
      countryId: 1,
      address: 'Jl. Guru Mughni No.12'
    },
    rating: 5,
    distance: 10
  }
}
```

### Book a table
```
**POST** /api/restaurants/book

// Header
Send the credentials with cookie

// Request payload
// Content-type JSON
{
  peopleCount: 2,
  date: "2018-01-14 07:00:00",
  restaurantId: 1
}

// Response
// HTTP 201
{
  data: {
    id: 1,
    date: "2018-01-14 07:00:00",
    peopleCount: 2,
    restaurantId: 1
  }
}
```