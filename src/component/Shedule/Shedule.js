import React from 'react';
import './Shedule.css';
import NavShedule from './NavShedule';
import SearchShedule from './SearchShedule';
import ListBus from './ListBus';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

function Shedule() {
	return (
		<Switch>
  <Route path='/bus' component={Shedule}/>

		<div className="shedule__container">
			<NavShedule />
			<SearchShedule />
			<ListBus />
		</div>
		</Switch>
	)
}

export default Shedule;