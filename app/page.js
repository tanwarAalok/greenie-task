"use client"

import { useState } from 'react';
import dynamic from 'next/dynamic';
import PageLayout from '@/components/PageLayout';
import UserDetails from '../components/UserDetails';
const UserDetailsPopup = dynamic(() => import('../components/UserDetailsPopup'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

import { usersData } from '@/utils/userDB';

const Home = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleClosePopup = () => {
    setSelectedUser(null);
  };

  const handleGenerateReport = () => {
    alert('Generating report for user:', selectedUser);
  };

  return (
      <PageLayout>
        <UserDetails users={usersData} onUserClick={handleUserClick} />
        
        {selectedUser && (
            <UserDetailsPopup
                user={selectedUser}
                onClose={handleClosePopup}
                onGenerateReport={handleGenerateReport}
            />
        )}
      </PageLayout>
  );
};

export default Home;
