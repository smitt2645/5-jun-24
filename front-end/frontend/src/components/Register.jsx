import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {Navigate, useNavigate} from "react-router-dom"

export function Register() {
    const [input, setInput] = useState({
        username: "",
        password: ""
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        // Empty dependency array ensures this effect runs only once when the component mounts
        RegisterUser();
    }, []);

    const RegisterUser = async (e) => {
        e.preventDefault();
        if (input.username && input.password) { // Use && instead of || for validation
            try {
                const response = await fetch("/api/v1/auth/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(input)
                });
                const data = await response.json();
                console.log(data)
                navigate("/login");
                dispatch(Register(data.user)); // Dispatch the Register action with the data returned from the server
                return data;
            } catch (error) {
                console.error('Error registering user:', error);
            }
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <div>
            <h1>Username: {input.username}</h1>
            <h1>Password: {input.password}</h1>

            <form onSubmit={RegisterUser}>
                <input type='text' name="username" value={input.username} onChange={handleChange} />
                <br />
                <br />
                <input type='text' name="password" value={input.password} onChange={handleChange} />
                <br />
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
