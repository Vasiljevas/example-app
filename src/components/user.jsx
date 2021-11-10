import React from "react";

const User = ({ user }) => {

	// React.useEffect(() => { console.log(card) }, [card]);
	return (
		<li>
			<h1>
				{user.name} {user.phoneNumber}
			</h1>
			<div>
				<p>
					{user.id}
				</p>
			</div>
		</li>
	);
};

export default User;
