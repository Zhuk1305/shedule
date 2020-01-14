import React, {Component} from 'react';
import './Shedule.css';

class ListShedule extends Component {
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
		fetch("https://psv4.userapi.com/c856224/u190654373/docs/d10/59cc06b788a5/routesBus.txt?extra=9OWUfyk-RsMqP6ZYa26SG-yKICAShahwypGrKKNF67KqQpyOAs8eFGvG2Q45fT9P6-u02oKqX0XgV12C3bo9vjOyUi3jjr_Jt23FT-M19Hz5JEhR_tYRigGkoyIlctbv1UdEhm-z5xWBvDrrCv3-uoG2&dl=1")
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
			<div>
					<ul>
						{
							transport.map(transport => 
								<div key={transport.RouteNum}>
								{(transport.RouteType === 'A>B' && transport.RouteNum !== '') ?
								(<li>
			<button className="btn__routeNum">{transport.RouteNum}</button>
			<span className="text__routeName">{transport.RouteName}</span>
		</li>)
			:undefined}
			</div>
			)}
			</ul>
			</div>
	)}
}
}

export default ListShedule;