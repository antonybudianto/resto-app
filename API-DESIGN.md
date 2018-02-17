# RestoHub API Design

### Get all nearest restaurant
```
**GET** /api/restaurants?lat=x&lon=y&top=11

// Query params
lat = latitude of the location
lon = longitude of the location
top = get the top 11 restaurants (need 1 for the top 1), ordered by rating

// Response
{
  data: [
    {
      id: '1',
      name: 'Holycow',
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
