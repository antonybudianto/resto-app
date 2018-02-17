import React, { Component } from 'react';

import RestaurantListSection from './sections/RestaurantListSection';
import RestaurantMapView from './sections/RestaurantMapView';

import './LandingPage.css';

const geoSupport = 'geolocation' in navigator;

// TODO: mock data. will be replaced with API
const dataWithGeo = [
  {
    name: 'KFC Kuningan',
    address: 'Jl. Guru Mughni No.12'
  },
  {
    name: 'Pizza Hut',
    address: 'Jl. Guru Mughni No.14'
  }
];

const dataWithoutGeo = [
  {
    name: 'KFC Kuningan',
    address: 'Jl. Guru Mughni No.12'
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
        <div className="mb-5 py-5 bg-dark text-light">
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
          {
            !geoSupport || !this.state.allowGetLocation ? (
              <div className="mb-5 py-5 bg-dark text-light">
                Geolocation not supported
              </div>
            ) : this.renderMap()
          }
          {
            this.state.dataReady && (
              <RestaurantListSection data={this.state.data} />
            )
          }
      </main>
    );
  }
}

export default LandingPage;
