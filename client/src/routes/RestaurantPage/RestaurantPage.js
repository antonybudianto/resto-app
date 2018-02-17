import React, { Component } from 'react';

class RestaurantPage extends Component {

  componentDidMount () {
    const slug = this.props.match.slug;
  }

  render () {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4">
            Resto
          </div>
          <div className="col-md-8">
            h
          </div>
        </div>
      </div>
    )
  }
}

export default RestaurantPage;
