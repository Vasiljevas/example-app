import { useEffect, useState } from "react";
import User from "./user";
import { getAll } from "../services/users";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getAllUsers = async () => {
            try {
                const newUsers = await getAll();
                setUsers(newUsers);
            } catch (err) {
                alert(err);
            }
        };
        getAllUsers();
    }, []);

    return <ul>{users && users.length > 0 ? (
        users.map((u) => <User key={u._id} user={u} />)
    ) : (
        <div>no users found</div>
    )}</ul>
}

export default Users;