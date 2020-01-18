import React from 'react';
import './Shedule.css';
import { Link } from 'react-router-dom'

function NavShedule() {
	return (
		<div className="nav__shedule">
			<Link to='/bus'><button className="btn__navShedule btn__busLink">Автобус</button></Link>
			<Link to='/trollbus'>
			<button className="btn__navShedule btn__trollbusLink">Троллейбусы</button></Link>
			<Link to='/tram'>
			<button className="btn__navShedule btn__tramLink">Трамваи</button></Link>
		</div>
	)
}

export default NavShedule;