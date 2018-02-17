import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const RestaurantListSection = ({ data }) => (
  <div className="album py-5 bg-light">
    <div className="container">
      <div className="row">
        {
          data.map((resto, i) => {
            if (i === 0) {
              return (
                <Fragment key={i}>
                  <div className="col-md-12">
                    <h3>Featuring</h3>
                  </div>
                  <div className="col-md-12" key={i}>
                    <div className="card card-row mb-4 box-shadow">
                      <img className="card-img-left" alt="Card" src="http://via.placeholder.com/350x150" />
                      <div className="card-body">
                        <h5>{resto.name}</h5>
                        <p className="card-text">{resto.location.address}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <Link to={"/restaurant/" + resto.slug}
                              className="btn btn-sm btn-outline-secondary">View</Link>
                          </div>
                          <small className="text-muted">
                            Rating: {resto.rating}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fragment>
              )
            }
            return (
              <Fragment key={i}>
                {
                  i === 1 && (
                    <div className="col-md-12">
                      <h3>Top 10</h3>
                    </div>
                  )
                }
                <div className="col-md-4" key={i}>
                  <div className="card mb-4 box-shadow">
                    <img className="card-img-top" alt="Card" src="http://via.placeholder.com/350x150" />
                    <div className="card-body">
                      <h5>{resto.name}</h5>
                      <p className="card-text">{resto.location.address}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        </div>
                        <small className="text-muted">Rating: {resto.rating}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            )
          })
        }
      </div>
    </div>
  </div>
);

export default RestaurantListSection;
