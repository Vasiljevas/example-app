import React from "react";
import User from "./user";
import { createUser, deleteUser, updateUser } from "../services/users";

const Users = ({ getAll, users }) => {
	const [form, setForm] = React.useState({
		open: false,
		selected: null,
	})

	const handleCreate = async (newUser) => {
		console.log(newUser);
		try {
			await createUser(newUser);
			await getAll();
		} catch (e) {
			console.error(e)
		}
	}

	const handleUpdate = async (updatedUser) => {
		console.log(updatedUser);
		try {
			await updateUser(updatedUser.id, updatedUser);
			await getAll();
		} catch (e) {
			console.error(e)
		}
	}

	const handleDelete = async (id) => {
		console.log(id);
		try {
			await deleteUser(id);
			await getAll();
		} catch (e) {
			console.error(e)
		}
	}

	const handleSubmit = () => {
		switch (form.open) {
			case "create": {
				handleCreate(form.selected);
				break;
			}
			case "edit": {
				handleUpdate(form.selected);
				break;
			}
			default: {
				break;
			}
		}
		setForm({ open: null, selected: null })
	}

	const handleFormUpdate = (event) => {
		setForm({
			...form,
			selected: {
				...form.selected,
				[event.target.name]: event.target.value,
			}
		})
	}

	return (
		<div>
			<button onClick={() => setForm({ open: "create", selected: null })}>create user</button>
			{form.open ? (
				<div>
					<form onSubmit={handleSubmit}>
						<label>Name:
							<input name="name" onChange={handleFormUpdate} value={form.selected ? form.selected.name : ""} />
						</label>
						<label>Phone number:
							<input name="phoneNumber" onChange={handleFormUpdate} value={form.selected ? form.selected.phoneNumber : ""} />
						</label>
						<button type="submit">{form.open === "edit" ? "edit" : "create"}</button>
						<button onClick={() => {
							setForm({ open: false, selected: null });
						}}>cancel</button>
					</form>
				</div>
			) : null}
			<ul>
				{users && users.length > 0 ? (
					users.map((u) =>
						<User
							key={u.id}
							user={u}
							onDelete={handleDelete}
							onEdit={(user) => setForm({ open: "edit", selected: user })}
						/>
					)
				) : (
					<div>no users found</div>
				)}
			</ul>
		</div>
	)
}

export default Users;