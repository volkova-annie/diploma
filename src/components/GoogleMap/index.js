import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap as Map, Marker } from 'react-google-maps'

const GoogleMap = withScriptjs(withGoogleMap((props) =>
  <Map
    defaultZoom={15}
    defaultCenter={{ lat: 59.930161, lng: 30.319891 }} >
    {props.isMarkerShown && <Marker position={{ lat: 59.930161, lng: 30.319891 }} />}
  </Map>
))

export default GoogleMap
