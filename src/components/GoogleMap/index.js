import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap as Map, Marker } from 'react-google-maps'

const MapWithAMarker = withScriptjs(
  withGoogleMap(props => (
    <Map
      defaultZoom={15}
      defaultCenter={{ lat: 59.930161, lng: 30.319891 }}>
      <Marker position={{ lat: 59.930161, lng: 30.319891 }} />
    </Map>
  )),
)

const GoogleMap = () => (
  <MapWithAMarker
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC5AtTPZ10DQXqbmFUrs60GO0JQqTr-5fY&v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: '100%' }} />}
    containerElement={<div style={{ height: '400px' }} />}
    mapElement={<div style={{ height: '100%' }} />} />
)

export default GoogleMap
