import Users from "./components/users";
import Actions from "./components/actions";
import { useEffect, useState } from "react";
import { getAllActions } from "./services/actions";
import { getAllUsers } from "./services/users";

function App() {
	const [users, setUsers] = useState([]);
	const [actions, setActions] = useState([]);

	const getUsers = async () => {
		try {
			const newUsers = await getAllUsers();
			setUsers(newUsers);
		} catch (err) {
			alert(err);
		}
	};

	const getActions = async () => {
		try {
			const newActions = await getAllActions();
			setActions(newActions);
		} catch (err) {
			alert(err);
		}
	};

	useEffect(() => {
		getUsers();
		getActions();
	}, []);

	const handleGetAll = async () => {
		await getUsers();
		await getActions();
	};

	return (
		<div>
			<Users getAll={handleGetAll} users={users} />
			<Actions getAll={handleGetAll} actions={actions} />
		</div>
	);
}

export default App;
