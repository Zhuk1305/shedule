import React from 'react';
import './Shedule.css';
import NavShedule from './NavShedule';
import SearchShedule from './SearchShedule';
import ListShedule from './ListShedule';

function Shedule() {
	return (
		<div className="shedule__container">
			<NavShedule />
			<SearchShedule />
			<ListShedule />
		</div>
	)
}

export default Shedule;