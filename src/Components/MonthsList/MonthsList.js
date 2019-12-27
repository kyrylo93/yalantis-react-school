import React from "react";
import MonthItem from "./MonthItem/MonthItem";
import UsersList from "./UsersList/UsersList";
import './MonthsList.css';

const monthsList = (props) => {
	const filteredUsers = [[], [], [], [], [], [], [], [], [], [], [], []];
	props.usersList.forEach(user => {
		const userMonth = user.dob.split('-')[1];
		filteredUsers[userMonth - 1].push(user);
	});
	
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		.map((month, index) => (
			<MonthItem
				key={month}
				month={month}
				users={filteredUsers[index]}
				changeCurrMonthId={() => props.changeCurrMonthId(index)}
				deleteCurrMonthId={() => props.changeCurrMonthId(null)}
			/>
		));
	
	const userList = props.monthId === null ? null : <UsersList users={filteredUsers[props.monthId]} />;
	
	return (
		<React.Fragment>
			<ul className='MonthsList'>
				{months}
			</ul>
			{userList}
		</React.Fragment>
	)
};

export default monthsList;
