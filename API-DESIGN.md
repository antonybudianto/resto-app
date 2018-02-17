# RestoHub API Design

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
      id: '1',
      name: 'Holycow',
      slug: 'holycow',
      location: {
        latitude: -6.1744,
        longitude: 102.8294,
        city: 'Jakarta',
        countryId: 1,
        address: 'Jl. Guru Mughni No.12'
      },
      rating: 5,
      cuisineType: 'Western'
    }
  ]
}
```

### Book a table
```
**POST** /api/restaurants/book

// Request payload
{
  peopleCount: 2,
  date: 1112232323,
  restaurantId: 1
}

// Response
// HTTP 201
{
  data: {
    bookingId: 1,
    date: 1112232323,
    peopleCount: 2,
    restaurantId: 1
  }
}
```