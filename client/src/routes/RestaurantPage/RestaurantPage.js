import React, { Component } from 'react';
import { data } from '../../data/restaurantList'

class RestaurantPage extends Component {

  componentDidMount () {

  }

  render () {
    const slug = this.props.match.params.slug;
    const resto = data.find(restaurant => restaurant.slug === slug);
    if (!resto) {
      return (
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-12">
              Restaurant is not found.
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4">
            Resto
          </div>
          <div className="col-md-8">
            {resto.name}
          </div>
        </div>
      </div>
    )
  }
}

export default RestaurantPage;
