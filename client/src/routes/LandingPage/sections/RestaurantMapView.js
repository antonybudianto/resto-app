import React from "react";
import { Marker, InfoWindow } from "react-google-maps";

import MapView from '../../../components/MapView';

const RestaurantMapView = (props) => (
  <MapView {...props} render={p => (
    props.data.map((resto, i) => (
      <Marker key={i}
        onClick={props.onToggleOpen}
        icon={{
          url: '/marker.png',
          scaledSize: {width: 30, height: 30}
        }}
        position={{ lat: resto.location.latitude, lng: resto.location.longitude }}>
        <InfoWindow>
          <div>{resto.name}</div>
        </InfoWindow>
      </Marker>
    ))
  )} />
);

export default RestaurantMapView;
