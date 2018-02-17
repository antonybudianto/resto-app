# RestoHub API Design

### Get all nearest restaurant
```
**GET** /api/restaurants?lat=x&lon=y&top=z

// Query params
lat = latitude of the location
lon = longitude of the location
top = get the top z restaurants

// Response
{
  data: [
    {
      id: '1',
      name: 'Resto1',
      latitude: '',
      longitude: '',
      address: 'Jl. Guru Mughni No.12',
      rating: 5,
      cuisineType: 'Chinese'
    }
  ]
}
```
