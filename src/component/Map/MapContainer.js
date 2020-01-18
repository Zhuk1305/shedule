import React, {Component, useState} from "react";
import { 
	withGoogleMap,
	withScriptjs, 
	GoogleMap, 
	Marker,
	InfoWindow
} from "react-google-maps";
import * as stopsData from './stops.json'


const bus = [
  {
    "RouteNum": "1",
    "Authority": "minsk",
    "City": "minsk",
    "Transport": "bus",
    "Operator": "2 ТП",
    "ValidityPeriods": "18266,",
    "SpecialDates": "0",
    "RouteTag": "",
    "RouteType": "A>B",
    "Commercial": "A",
    "RouteName": "ДС ''Веснянка'' - Вокзал",
    "Weekdays": "1234567",
    "RouteID": "266044",
    "Entry": "",
    "RouteStops": "15846,54756,54757,15850,15852,15854,15856,15084,15112,15113,15890,15114,15115,16239,15866,230003",
    "Pikas2012.11.19": "",
    "Datestart": "d1-d5 - 05.01.2020<br>d6 - 09.01.2020<br>d6-d7 - 02.03.2019<br>d7 - 09.01.2020"
  }
]
function Map() {
	const [selectedStop, setSelectedStop] = useState(null);
	return (
		<GoogleMap 
			defaultCenter = {{lat: 53.9, lng: 27.56}}
			defaultZoom = {11}
		>
		
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