"use client"

import {useEffect, useState} from "react";
import Pagination from "@/components/Pagination";
import {getFormattedDate} from "@/utils/helper";

const PAGE_SIZE = 15; // Number of users per page

const UserDetails = ({ users, onUserClick }) => {
    users.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate));

    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredUsers = users.filter((user) =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalUsers = filteredUsers.length;
    const totalPages = Math.ceil(totalUsers / PAGE_SIZE);

    const paginatedUsers = filteredUsers.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [totalUsers, PAGE_SIZE]);

    return (
        <div className="w-full px-10 py-6">
            <div className="flex sm:gap-x-16 lg:justify-between items-center flex-wrap">
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
                        <th className="py-2 px-4 border">Sr no</th>
                        <th className="py-2 px-4 border">Name</th>
                        <th className="py-2 px-4 border">Username</th>
                        <th className="py-2 px-4 border">Email</th>
                        <th className="py-2 px-4 border">Phone</th>
                        <th className="py-2 px-4 border">Joined Date</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedUsers.map((user, index) => (
                        <tr key={user.id} onClick={() => onUserClick(user)} className="cursor-pointer hover:bg-gray-100">
                            <td className="py-2 px-4 border text-center">{(currentPage-1)*PAGE_SIZE + index + 1}</td>
                            <td className="py-2 px-4 border text-center">{user.name}</td>
                            <td className="py-2 px-4 border text-center">{user.username}</td>
                            <td className="py-2 px-4 border text-center">{user.email}</td>
                            <td className="py-2 px-4 border text-center">{user.phone}</td>
                            <td className="py-2 px-4 border text-center">{getFormattedDate(user.creationDate)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>

    )
};

export default UserDetails;
