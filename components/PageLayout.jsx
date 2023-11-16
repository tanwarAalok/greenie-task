"use client"

import Link from 'next/link';
import Head from 'next/head';
import {useState, useEffect} from "react";

const PageLayout = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const checkScreenSize = () => {
            const isLargeScreen = window.innerWidth > 768; // Adjust the width as needed
            setSidebarOpen(isLargeScreen);
        };

        // Initial check
        checkScreenSize();

        // Event listener for window resize
        window.addEventListener('resize', checkScreenSize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    return (
        <div className="flex h-screen">
            <Head>
                <title>User Management Dashboard</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            {/************* LEFT SIDEBAR *****************/}
            <div className={`lg:w-1/5 w-full bg-gray-800 text-white px-6 py-6 ${isSidebarOpen ? 'block' : 'hidden'}`}>
                <h1 className="text-2xl font-bold text-center">User Dashboard</h1>
                <ul className="space-y-4 text-center mt-8">
                    <li>
                        <Link href="/" className="hover:text-gray-300 block py-2 px-4 bg-gray-700 rounded">
                            All Users
                        </Link>
                    </li>
                    <li>
                        <Link href="/new-user" className="hover:text-gray-300 block py-2 px-4 bg-gray-700 rounded">
                            New User
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="flex-grow bg-gray-100 overflow-y-auto">
                <button
                    className="lg:hidden fixed right-4 top-4 z-50 p-2" // Increase z-index to 50
                    onClick={toggleSidebar}
                    style={{ position: 'relative', background: 'none', border: 'none' }}
                >
                    <svg viewBox="0 0 100 80" width="40" height="40">
                        <rect width="100" height="20"></rect>
                        <rect y="30" width="100" height="20"></rect>
                        <rect y="60" width="100" height="20"></rect>
                    </svg>
                </button>
                {children}
            </div>
        </div>
    );
};

export default PageLayout;
