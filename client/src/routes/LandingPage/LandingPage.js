import React, { Component } from 'react';

import RestaurantListSection from './sections/RestaurantListSection'
import RestaurantMapView from './sections/RestaurantMapView'

import './LandingPage.css';

class LandingPage extends Component {
  state = {
    lat: 0,
    lng: 0,
    posReady: false
  }

  componentDidMount () {
    navigator.geolocation.getCurrentPosition(pos => {
      const coords = pos.coords
      this.setState({
        lat: coords.latitude,
        lng: coords.longitude,
        posReady: true
      });
      console.log('ok', coords)
    });
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
            this.state.posReady ? (
              <div>
                <RestaurantMapView lat={this.state.lat} lng={this.state.lng}
                  isMarkerShown />
                <RestaurantListSection />
              </div>
            ) : (
              <div className="mb-5 py-5 bg-dark text-light">
                <i className="fa fa-spin fa-spinner"></i> Looking your nearby restaurant, just some seconds!...
              </div>
            )
          }
      </main>
    );
  }
}

export default LandingPage;
