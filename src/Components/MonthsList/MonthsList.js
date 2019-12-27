import React from "react";
import MonthItem from "./MonthItem/MonthItem";
import './MonthsList.css';

const monthsList = (props) => {
	const filteredUsers = [[], [], [], [], [], [], [], [], [], [], [], []];
	props.usersList.forEach(user => {
		const userMonth = user.dob.split('-')[1];
		filteredUsers[userMonth - 1].push(user);
	});
	
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		.map((month, index) => (
			<MonthItem month={month} key={month} users={filteredUsers[index]} />
		));
	
	return (
		<React.Fragment>
			<ul className='MonthsList'>
				{months}
			</ul>
		</React.Fragment>
	)
};

export default monthsList;
