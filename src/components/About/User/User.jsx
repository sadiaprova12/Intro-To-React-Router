// eslint-disable-next-line no-unused-vars
import React from 'react';

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const User = ({user}) => {
    // eslint-disable-next-line react/prop-types
    const {id, name, email, phone} = user;
    const userStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}>
                <button>Click Me</button>
            </Link>
        </div>
    );
};

export default User;