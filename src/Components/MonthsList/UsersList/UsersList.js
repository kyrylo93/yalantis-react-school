import React from "react";
import User from "./User/User";
import './UsersList.css';

const usersList = (props) => {
	const users = props.users.map(user => (
		<User user={user} key={user.id} />
	));
	
	return (
		<section className='UsersList'>
			{users}
		</section>
	
	)
};

export default usersList;
