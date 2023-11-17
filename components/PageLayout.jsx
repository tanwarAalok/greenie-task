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
            const isLargeScreen = window.innerWidth > 1023;
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
                    className="lg:hidden fixed right-4 top-4 z-50 p-2"
                    onClick={toggleSidebar}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>

                </button>
                {children}
            </div>
        </div>
    );
};

export default PageLayout;
