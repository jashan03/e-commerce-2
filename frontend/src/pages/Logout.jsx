// Logout.js
import React from 'react';
import { useResetRecoilState } from 'recoil';
import { currentUserState, isFetchingState, errorState } from '../recoil/userRecoil';
import { useNavigate } from 'react-router-dom'; 
const Logout = () => {
  // Reset Recoil state hooks
  const resetCurrentUser = useResetRecoilState(currentUserState);
  const resetIsFetching = useResetRecoilState(isFetchingState);
  const resetError = useResetRecoilState(errorState);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear all relevant states
    resetCurrentUser(); // Resets currentUserState atom
    resetIsFetching();  // Resets isFetchingState atom
    resetError();       // Resets errorState atom

    // Optionally clear other relevant data, like cookies or session storage
    localStorage.removeItem('token'); // Example: clear authentication token
    sessionStorage.clear(); // Clear any other session data if needed
    navigate('/login')
  };

  return (
    <div>
      <button onClick={handleLogout} className="bg-red-600 text-white p-2 rounded">
        Logout
      </button>
    </div>
  );
};

export default Logout;
