import React from "react";
import { getUserById } from "../services/users";
const Action = ({ action, onDelete, onEdit }) => {
    const [username, setUsername] = React.useState("");

    React.useEffect(() => {
        const loadUsername = async (id) => {
            try {
                const result = await getUserById(id);
                setUsername(result.name);
            } catch (e) {
                console.error(e);
            }
        }
        loadUsername(action.user);
    }, [action])

    return (
        <li>
            {action.id}, {action.action}, {username !== "" ? username : action.user}, {action.date}
            <div>
                <button onClick={() => onDelete(action.id)}>delete</button>
                <button onClick={() => onEdit(action)}>Edit</button>
            </div>
        </li>
    );
};

export default Action;
