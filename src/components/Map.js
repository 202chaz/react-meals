import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends React.Component {}
 
export default GoogleApiWrapper({
  apiKey: "AIzaSyABfi-wZ5jjP5U3O3jEPLRy38Ot0O2zncs"
})(App)