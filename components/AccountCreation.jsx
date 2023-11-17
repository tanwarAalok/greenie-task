"use client"

import { useState } from 'react';
import {addUser} from "@/utils/helper";

const AccountCreation = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');

    const handleCreateUser = (e) => {
        e.preventDefault();

        if (e.target.checkValidity()) {
            const newUser = {
                name,
                email,
                phone,
                username,
            };

            // Call the addUser function to add the new user to userData
            addUser(newUser);

            setName('');
            setEmail('');
            setPhone('');
            setUsername('');

            alert('User added')
        } else {
            alert('Please fill in all required fields correctly');
        }
    };

    return (
        <div className="w-full h-[90%] px-10 py-4 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg mt-6 w-1/3">
                <h2 className="text-xl font-bold mb-4">Register</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 border rounded"
                            placeholder="Enter your name"
                            required={true}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border rounded"
                            placeholder="Enter your email"
                            required={true}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => {
                                const input = e.target;
                                setPhone(input.value);
                                if (input.validity.patternMismatch) {
                                    input.setCustomValidity('Please enter valid 10 digit phone number.');
                                } else {
                                    input.setCustomValidity('');
                                }
                            }}
                            className="w-full p-2 border rounded"
                            placeholder="Enter your phone number"
                            required={true}
                            pattern="^\d{10}$"
                        />

                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-2 border rounded"
                            placeholder="Choose a username"
                            required={true}
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-gray-800 text-white px-4 py-2 rounded"
                    >
                        Create Account
                    </button>
                </form>
            </div>
        </div>

    );
};

export default AccountCreation;
