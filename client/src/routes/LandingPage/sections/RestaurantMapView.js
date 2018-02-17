import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

const GMAP_API_KEY = 'AIzaSyAdycHBxDQPe40ta91OW0nzLjGp_0ytejw'

const RestaurantMapView = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${GMAP_API_KEY}`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: props.lat, lng: props.lng }}
  >
    {props.isMarkerShown && <Marker position={{ lat: props.lat, lng: props.lng }} />}
    {
      props.data.map((resto, i) => (
        <Marker key={i}
          onClick={props.onToggleOpen}
          icon={{
            url: './marker.png',
            scaledSize: {width: 30, height: 30}
          }}
          position={{ lat: resto.location.latitude, lng: resto.location.longitude }}>
          <InfoWindow>
            <div>{resto.name}</div>
          </InfoWindow>
        </Marker>
      ))
    }
  </GoogleMap>
))

export default RestaurantMapView;
