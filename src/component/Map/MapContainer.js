import React,{Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './MapContainer.css'
export class MapContainer extends Component {
  render() {
    return (
			<div className="map__container">
      	<Map google={this.props.google} initialCenter={{lat:53.93147, lng:27.48005}} zoom={14}>
 
       	 <Marker onClick={this.onMarkerClick}
       	         name={'Current location'} />
 
      	  <InfoWindow onClose={this.onInfoWindowClose}>
            
      	  </InfoWindow>
     	 </Map>
			</div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyA0tr9nxpyIr7w1GBliLU_6gKkcP_lra_s")
})(MapContainer)