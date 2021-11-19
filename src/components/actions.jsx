import React from "react";
import { createAction, updateAction, deleteAction } from "../services/actions";
import Action from "./action";

const Actions = ({ getAll, actions }) => {
	const [form, setForm] = React.useState({
		open: null,
		selected: null,
	})

	const handleCreate = async (newAction) => {
		console.log(newAction);
		try {
			await createAction(newAction);
			await getAll();
		} catch (e) {
			console.error(e);
		}
	}

	const handleUpdate = async (updatedAction) => {
		console.log(updatedAction);
		try {
			await updateAction(updatedAction.id, updatedAction);
			await getAll();
		} catch (e) {
			console.error(e);
		}
	}

	const handleDelete = async (id) => {
		console.log(id);
		try {
			await deleteAction(id);
			await getAll();
		} catch (e) {
			console.error(e);
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
			<button onClick={() => setForm({ open: "create", selected: null })}>create action</button>
			{form.open ? (
				<div>
					<form onSubmit={handleSubmit}>
						<label>Action:
							<input name="action" onChange={handleFormUpdate} value={form.selected ? form.selected.action : ""} />
						</label>
						<label>User (id):
							<input name="user" onChange={handleFormUpdate} value={form.selected ? form.selected.user : ""} />
						</label>
						{form.open === "edit" ? (
							<label>Date:
								<input name="date" onChange={handleFormUpdate} value={form.selected ? form.selected.date : ""} />
							</label>) : null}
						<button type="submit">{form.open === "edit" ? "edit" : "create"}</button>
						<button onClick={() => {
							setForm({ open: false, selected: null });
						}}>cancel</button>
					</form>
				</div>
			) : null}
			<ul>
				{actions && actions.length > 0 ? (
					actions.map((a) =>
						<Action
							key={a.id}
							action={a}
							onDelete={handleDelete}
							onEdit={(action) => {
								setForm({ open: "edit", selected: action });
							}}
						/>
					)
				) : (
					<div>no actions found</div>
				)}
			</ul>
		</div>
	)
}

export default Actions;