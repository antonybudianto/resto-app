import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { range } from 'lodash';
import moment from 'moment';

import MapView from '../../components/MapView';
import { data } from '../../data/restaurantList';

const MIN_PEOPLE = 2;
const MAX_PEOPLE = 10;
const TOTAL_PEOPLE_LIST = range(MIN_PEOPLE, MAX_PEOPLE + 1);

class RestaurantPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      date: moment(),
      peopleCount: 2
    };

    this.handleReservation = this.handleReservation.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handlePeopleCountChange = this.handlePeopleCountChange.bind(this);
  }

  handleReservation (e, resto) {
    e.preventDefault();

    // TODO: do POST fetch to API server with following request body
    const data = {
      peopleCount: this.state.peopleCount,
      date: this.state.date.valueOf(),
      restaurantId: resto.id
    };
    console.log(data)
  }

  handlePeopleCountChange (e) {
    this.setState({
      peopleCount: e.target.value
    });
  }

  handleDateChange (date) {
    this.setState({
      date
    })
  }

  render () {
    // TODO: should do fetch restaurant by slug
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
          <div className="col-md-2 mt-3">
            <img className="img-fluid img-thumbnail" src={resto.imgUrl} alt={resto.name}/>
          </div>
          <div className="col-md-3 mt-3">
            <h1>{resto.name}</h1>
            <div>{resto.location.address}</div>
            <div>{resto.location.city}</div>
            <div>{resto.cuisineType} cuisine</div>
            <div>Rating: {resto.rating}</div>
          </div>
          <div className="col-md-7 mt-3 d-flex justify-content-around">
            <form className="form-inline"
              onSubmit={(e) => this.handleReservation(e, resto)} noValidate>
              <select value={this.state.peopleCount}
                onChange={this.handlePeopleCountChange}
                className="form-control mr-2 mt-1">
                {
                  TOTAL_PEOPLE_LIST.map((_, i) => (
                    <option key={i}
                      value={MIN_PEOPLE + i}>{MIN_PEOPLE + i} people</option>
                  ))
                }
              </select>
              <DatePicker
                readOnly
                className="form-control mt-1"
                minDate={moment()}
                selected={this.state.date}
                onChange={this.handleDateChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={30}
                dateFormat="LLL"
                timeCaption="time"
              />
              <button type="submit"
                className="btn btn-primary ml-2 mt-1">Book now</button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-5">
            <h4>Map</h4>
            <MapView lat={resto.location.latitude}
              lng={resto.location.longitude} showMarker />
          </div>
        </div>
      </div>
    )
  }
}

export default RestaurantPage;
