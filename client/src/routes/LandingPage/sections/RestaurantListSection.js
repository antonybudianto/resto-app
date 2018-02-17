import React from 'react';

const RestaurantListSection = ({ data }) => (
  <div className="album py-5 bg-light">
    <div className="container">
      <div className="row">
        {
          data.map((resto, i) => (
            <div className="col-md-4" key={i}>
              <div className="card mb-4 box-shadow">
                <img className="card-img-top" alt="Card" src="http://via.placeholder.com/350x150" />
                <div className="card-body">
                  <h5>{resto.name}</h5>
                  <p className="card-text">{resto.address}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  </div>
);

export default RestaurantListSection;
