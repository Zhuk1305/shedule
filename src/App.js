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
				<MapContainer />
			</div>
    </div>
  );
}

export default App;
