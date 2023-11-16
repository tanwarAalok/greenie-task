"use client"

import {useState} from "react";

const UserDetails = ({ users, onUserClick }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredUsers = users.filter((user) =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="w-full px-10 py-6">
            <div className="flex justify-between items-center flex-wrap">
                <h2 className="text-2xl font-bold">All Users</h2>
                <input
                    type="text"
                    placeholder="Search Users..."
                    className="w-1/2 p-2 bg-gray-200 rounded focus:outline-none px-4"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>

            <table className="w-full mt-6 bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border">ID</th>
                        <th className="py-2 px-4 border">Name</th>
                        <th className="py-2 px-4 border">Username</th>
                        <th className="py-2 px-4 border">Email</th>
                        <th className="py-2 px-4 border">Phone</th>
                        <th className="py-2 px-4 border">Joined Date</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((user) => (
                        <tr key={user.id} onClick={() => onUserClick(user)} className="cursor-pointer hover:bg-gray-100">
                            <td className="py-2 px-4 border text-center">{user.id}</td>
                            <td className="py-2 px-4 border text-center">{user.name}</td>
                            <td className="py-2 px-4 border text-center">{user.username}</td>
                            <td className="py-2 px-4 border text-center">{user.email}</td>
                            <td className="py-2 px-4 border text-center">{user.phone}</td>
                            <td className="py-2 px-4 border text-center">{user.creationDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
};

export default UserDetails;
