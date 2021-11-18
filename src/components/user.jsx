import React from "react";

const User = ({ user, onDelete, onEdit }) => {
	return (
		<li>
			{user.id}, {user.name}, {user.phoneNumber}
			<div>
				<button onClick={() => onDelete(user.id)}>delete</button>
			</div>
			<div>
				<button onClick={() => onEdit(user)}>Edit</button>
			</div>
		</li>
	);
};

export default User;
