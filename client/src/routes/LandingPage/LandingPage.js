import React from 'react';

import RestaurantListSection from './sections/RestaurantListSection'
import RestaurantMapView from './sections/RestaurantMapView'

import './LandingPage.css';

const LandingPage = () => (
  <main role="main">
    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">RestoHub</h1>
        <p className="lead text-muted">Book your nearest restaurant instantly</p>
      </div>
    </section>
    <div>
      <RestaurantMapView />
    </div>
    <RestaurantListSection />
  </main>
);

export default LandingPage;
