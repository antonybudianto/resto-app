import React, { Component } from 'react';

import RestaurantListSection from './sections/RestaurantListSection';
import RestaurantMapView from './sections/RestaurantMapView';

import './LandingPage.css';

const geoSupport = !'geolocation' in navigator;

class LandingPage extends Component {
  state = {
    lat: 0,
    lng: 0,
    posReady: false
  };

  constructor (props) {
    super(props);

    this.renderMap = this.renderMap.bind(this);
  }

  componentDidMount () {
    if (!geoSupport) {
    } else {
      navigator.geolocation.getCurrentPosition(pos => {
        const coords = pos.coords;
        this.setState({
          geoSupport: true,
          lat: coords.latitude,
          lng: coords.longitude,
          posReady: true
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
          <i className="fa fa-spin fa-spinner" />
          Looking your nearby restaurant, just some seconds!...
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
            !geoSupport ? (
              <div className="mb-5 py-5 bg-dark text-light">
                Geolocation not supported
              </div>
            ) : this.renderMap()
          }
          <RestaurantListSection />
      </main>
    );
  }
}

export default LandingPage;
