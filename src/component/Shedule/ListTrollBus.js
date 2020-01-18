import React, {Component} from 'react';
import './Shedule.css';

class ListBus extends Component {
	constructor(props) {
		super(props)
		this.state = {
			transport: [],
			isLoaded: false,
			error: null
		}
		this.reloadSheduleList = this.reloadSheduleList.bind(this);
	}
	componentDidMount() {
		this.reloadSheduleList();
	}
	reloadSheduleList() {
		fetch("https://raw.githubusercontent.com/Zhuk1305/shedule/master/src/data/routesBus.txt")
		.then(res => res.json())
		.then(transport => { 
			this.setState({
				isLoaded: true,
				transport
		})},
			(error) => {
				this.setState({
					isLoaded: true,
					error
				});
			})
	}
	
render() {

	const { error, isLoaded, transport } = this.state;
			if (error) {
				return <div>Ошибка: {error.message}</div>;
			} else if (!isLoaded) {
				return <div>Загрузка...</div>;
			} else {
	 return(
			<div className="transport-route">
					<ul>
						{
							transport.map(transport => 
								<div key={transport.RouteID}>
								{(transport.RouteType === 'A>B' && transport.RouteNum !== '') ?
								(<li>
			<button className="btn-routeNum">{transport.RouteNum}</button>
			<span className="text-routeName">{transport.RouteName}</span>
		</li>)
			:undefined}
			</div>
			)}
			</ul>
			</div>
	)}
}
}

export default ListBus;