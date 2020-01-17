import React, {Component, useState} from "react";
import { 
	withGoogleMap,
	withScriptjs, 
	GoogleMap, 
	Marker,
	InfoWindow
} from "react-google-maps";
import * as stopsData from './stops.json'

function Map() {
	const [selectedStop, setSelectedStop] = useState(null);
	const [isMarkerShown, setMarkerShown] = useState(null)
	return (
			<GoogleMap 
				defaultCenter = {{lat: 53.9, lng: 27.56}}
				defaultZoom = {11}
			>
			
			{isMarkerShown && <div>
			{stopsData.stops.map(stop => (
				<Marker
					key={stop.ID}
					position={{ 
						lat: toGPS(stop.Lat), 
						lng: toGPS(stop.Lng)
					}}
					 onClick={() => {
						 setSelectedStop(stop)
					 }}
				/>
			))}
			</div>}
				{selectedStop &&
				 <InfoWindow 
				 position={{ 
					lat: toGPS(selectedStop.Lat), 
					lng: toGPS(selectedStop.Lng)
				}}
				onCloseClick={() => {
					setSelectedStop(null)
				}}
				 >
						<div>{selectedStop.Name}</div>
					</InfoWindow>
				}
			</GoogleMap>
		);
	}

function toGPS(bs) {
  var tmp = bs.split('')
  tmp.splice(2, 0, '.')
  return parseFloat(tmp.join(''))
}

const MapComponent = withScriptjs(withGoogleMap(Map));


export default MapComponent;