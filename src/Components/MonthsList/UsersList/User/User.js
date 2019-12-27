import React from "react";
import './User.css';

const user = (props) => {
	return (
		<section className='User'>
			<p>{props.user.firstName} {props.user.lastName}</p>
			<p>Date of birth: <span>{props.user.dob}</span></p>
			<p className='UserId'>User ID: <span>{props.user.id}</span></p>
		</section>
	)
};

export default user;
