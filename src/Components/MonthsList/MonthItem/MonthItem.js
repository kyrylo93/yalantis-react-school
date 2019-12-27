import React from "react";
import './MonthItem.css';

const monthItem = (props) => {
	const colors = {
		grey: 'grey',
		blue: 'blue',
		green: 'green',
		red: 'red',
	};
	
	let currentColor;
	const usersLength = props.users.length;
	if (usersLength <= 2) {
		currentColor = colors.grey;
	} else if (usersLength <= 6) {
		currentColor = colors.blue;
	} else if (usersLength <= 10) {
		currentColor = colors.green;
	} else {
		currentColor = colors.red;
	}
	
	return (
		<li
			key={props.month}
			onMouseOver={props.changeCurrMonthId}
			onMouseLeave={props.deleteCurrMonthId}
			className='MonthItem'
			style={{backgroundColor: currentColor}}
		>{props.month}</li>
	)
};

export default monthItem;
