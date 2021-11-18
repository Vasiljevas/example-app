import React from "react";

const Action = ({ action, onDelete, onEdit }) => {
    return (
        <li>
            {action.id}, {action.action}, {action.user}, {action.date}
            <div>
                <button onClick={() => onDelete(action.id)}>delete</button>
                <button onClick={() => onEdit(action)}>Edit</button>
            </div>
        </li>
    );
};

export default Action;
