import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ihomeApi } from '../../api';

const Logout = () => {
  const navigate = useNavigate();

  
  const handleLogout = () => {
    
    navigate('/login');
  };

  React.useEffect(() => {
    const doLogout = async() => {
      try {
        await ihomeApi.get("/login/logout", { withCredentials: true })
        handleLogout();

      } catch (error) {
        alert("Failed to logout")
      }
    } 
    doLogout()
  }, []);

  return (
    <div>
      <p>Fazendo logout...</p>
    </div>
  );
};

export default Logout;
