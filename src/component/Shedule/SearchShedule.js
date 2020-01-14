import React,{Component} from 'react';
import './Shedule.css';

class SearchShedule extends Component {
	render() {
		return (
			<div>
				<div className="search__block">
					<form className="form__search">
						<input className="search" type="search" placeholder="Search"/>
						<button className="btn__search" type="submit">Search</button>
					</form>
				</div>
			</div>
		)
	}
}

export default SearchShedule;