import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import MonthsList from "./Components/MonthsList/MonthsList";

class App extends Component {
	state = {
		usersList: undefined,
		error: false,
	};
	
	componentDidMount() {
		axios.get('https://yalantis-react-school.herokuapp.com/api/task0/users')
			.then(res => {
				this.setState({ ...this.state, usersList: res.data })
			})
			.catch(err => {
				this.setState({ ...this.state, error: true });
			});
	}
	
	getLoadingStatus = () => {
		let loading = <p>Loading...</p>;
		if (this.state.error) {
			loading = <p>Please, reload the page</p>
		}
		if (this.state.usersList) {
			loading = null;
		}
		return loading;
	};
	
	getMonthsList = () => {
		return this.state.usersList ? <MonthsList usersList={this.state.usersList}/> : null;
	};
	
	render() {
		let loadingStatus = this.getLoadingStatus();
		let list = this.getMonthsList();
		
		return (
			<div className="App">
				<h2>Months List</h2>
				{loadingStatus}
				{list}
			</div>
		)
	}
}

export default App;
