import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import MapContainer from './component/Map/MapContainer';
import Shedule from './component/Shedule/Shedule'

function App() {
  return (
    <div className="App">
      <Header />
			<div className="main__container">
				<Shedule />
				<div style={{width: `800px`,height: `600px`}}>
				<MapContainer 
					googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyA0tr9nxpyIr7w1GBliLU_6gKkcP_lra_s"
					loadingElement={<div style={{height: '100%'}}/>}
					containerElement={<div style={{height: '100%'}}/>}
					mapElement={<div style={{height: '100%'}}/>}
					/>
					</div>
			</div>
    </div>
  );
}


export default App;
