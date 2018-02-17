import React, { Component } from 'react';

import RestaurantListSection from './sections/RestaurantListSection';
import RestaurantMapView from './sections/RestaurantMapView';

import './LandingPage.css';

const geoSupport = 'geolocation' in navigator;

// TODO: mock data. will be replaced with API
const dataWithGeo = [
  {
    id: 0,
    name: 'Duck King',
    location: {
      latitude: -6.1744,
      longitude: 102.8294,
      city: 'Jakarta',
      countryId: 1,
      address: 'Jl. Guru Mughni No.7'
    },
    rating: 5,
    cuisineType: 'Chinese'
  },
  {
    id: 1,
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
  },
  {
    id: 2,
    name: 'KFC',
    location: {
      latitude: -6.0044,
      longitude: 102.8294,
      city: 'Jakarta',
      countryId: 1,
      address: 'Jl. Guru Mughni No.3'
    },
    rating: 4.2,
    cuisineType: 'Western'
  },
  {
    id: 1,
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
  },
  {
    id: 2,
    name: 'KFC',
    location: {
      latitude: -6.0044,
      longitude: 102.8294,
      city: 'Jakarta',
      countryId: 1,
      address: 'Jl. Guru Mughni No.3'
    },
    rating: 4.2,
    cuisineType: 'Western'
  },
  {
    id: 1,
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
  },
  {
    id: 2,
    name: 'KFC',
    location: {
      latitude: -6.0044,
      longitude: 102.8294,
      city: 'Jakarta',
      countryId: 1,
      address: 'Jl. Guru Mughni No.3'
    },
    rating: 4.2,
    cuisineType: 'Western'
  },
  {
    id: 1,
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
  },
  {
    id: 2,
    name: 'KFC',
    location: {
      latitude: -6.0044,
      longitude: 102.8294,
      city: 'Jakarta',
      countryId: 1,
      address: 'Jl. Guru Mughni No.3'
    },
    rating: 4.2,
    cuisineType: 'Western'
  },
  {
    id: 1,
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
  },
  {
    id: 2,
    name: 'KFC',
    location: {
      latitude: -6.0044,
      longitude: 102.8294,
      city: 'Jakarta',
      countryId: 1,
      address: 'Jl. Guru Mughni No.3'
    },
    rating: 4.2,
    cuisineType: 'Western'
  }
];

const dataWithoutGeo = [
  {
    id: 0,
    name: 'Duck King',
    location: {
      latitude: -6.1744,
      longitude: 102.8294,
      city: 'Jakarta',
      countryId: 1,
      address: 'Jl. Guru Mughni No.7'
    },
    rating: 5,
    cuisineType: 'Chinese'
  },
  {
    id: 1,
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
  },
  {
    id: 2,
    name: 'KFC',
    location: {
      latitude: -6.0044,
      longitude: 102.8294,
      city: 'Jakarta',
      countryId: 1,
      address: 'Jl. Guru Mughni No.3'
    },
    rating: 4.2,
    cuisineType: 'Western'
  },
  {
    id: 1,
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
  },
  {
    id: 2,
    name: 'KFC',
    location: {
      latitude: -6.0044,
      longitude: 102.8294,
      city: 'Jakarta',
      countryId: 1,
      address: 'Jl. Guru Mughni No.3'
    },
    rating: 4.2,
    cuisineType: 'Western'
  },
  {
    id: 1,
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
  },
  {
    id: 2,
    name: 'KFC',
    location: {
      latitude: -6.0044,
      longitude: 102.8294,
      city: 'Jakarta',
      countryId: 1,
      address: 'Jl. Guru Mughni No.3'
    },
    rating: 4.2,
    cuisineType: 'Western'
  },
  {
    id: 1,
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
  },
  {
    id: 2,
    name: 'KFC',
    location: {
      latitude: -6.0044,
      longitude: 102.8294,
      city: 'Jakarta',
      countryId: 1,
      address: 'Jl. Guru Mughni No.3'
    },
    rating: 4.2,
    cuisineType: 'Western'
  },
  {
    id: 1,
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
  },
  {
    id: 2,
    name: 'KFC',
    location: {
      latitude: -6.0044,
      longitude: 102.8294,
      city: 'Jakarta',
      countryId: 1,
      address: 'Jl. Guru Mughni No.3'
    },
    rating: 4.2,
    cuisineType: 'Western'
  }
];

class LandingPage extends Component {
  state = {
    data: [],
    lat: 0,
    lng: 0,
    allowGetLocation: true,
    dataReady: false,
    posReady: false
  };

  constructor (props) {
    super(props);

    this.renderMap = this.renderMap.bind(this);
  }

  componentDidMount () {
    if (!geoSupport) {
      /**
       * If geo isn't supported, we can still use 3rd party API to get the coords (e.g. https://ip-api.io/)
       * but we cannot rely on them completely, thus need to handle the unknown location.
       * We can just fetch top-1 + top-10 restaurant data without the coords, and still allow
       * users to filter by name and address
       **/
      this.setState({
        dataReady: true,
        data: dataWithoutGeo
      });
    } else {
      navigator.geolocation.getCurrentPosition(pos => {
        const coords = pos.coords;
        this.setState({
          geoSupport: true,
          lat: coords.latitude,
          lng: coords.longitude,
          posReady: true,
          dataReady: true,
          data: dataWithGeo
        });
      }, () => {
        this.setState({
          dataReady: true,
          data: dataWithoutGeo,
          allowGetLocation: false
        });
      });
    }
  }

  renderMap () {
    if (this.state.posReady) {
      return (
        <div>
          <RestaurantMapView lat={this.state.lat} lng={this.state.lng} isMarkerShown />
        </div>
      );
    } else {
      return (
        <div className="mb-5 py-5 bg-dark text-light text-center">
          <i className="fa fa-spin fa-spinner" /> Looking your nearby restaurant, just some seconds!...
        </div>
      );
    }
  }

  render () {
    return (
      <main role="main">
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">RestoHub</h1>
            <p className="lead text-muted">Book your nearest restaurant instantly</p>
          </div>
        </section>
        <div className="row">
          {
            !this.state.allowGetLocation ? (
              <div className="col-md-12 mb-5 py-5 bg-dark text-light text-center">
                We can find your nearest restaurants around you if you enable the location service
              </div>
            ) : (
              <div className="col-md-12">
                {geoSupport && this.renderMap()}
              </div>
            )
          }
          {
            this.state.dataReady && (
              <div className="col-md-12">
                <RestaurantListSection data={this.state.data} />
              </div>
            )
          }
        </div>

      </main>
    );
  }
}

export default LandingPage;
