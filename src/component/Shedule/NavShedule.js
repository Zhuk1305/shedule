import React from 'react';
import './Shedule.css';

function NavShedule() {
	return (
		<div className="nav__shedule">
			<button className="btn__navShedule btn__busLink">Автобус</button> 
			<button className="btn__navShedule btn__trollbusLink">Троллейбусы</button>
			<button className="btn__navShedule btn__tramLink">Трамваи</button>
		</div>
	)
}

export default NavShedule;