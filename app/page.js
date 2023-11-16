"use client"

import { useState } from 'react';
import UserDetails from '../components/UserDetails';
import UserDetailsPopup from '../components/UserDetailsPopup';
import PageLayout from "@/components/PageLayout";
import {usersData} from "@/utils/userDB";



const Home = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleClosePopup = () => {
    setSelectedUser(null);
  };

  const handleGenerateReport = () => {
    // Dummy function for generating a report
    console.log('Generating report for user:', selectedUser);
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
