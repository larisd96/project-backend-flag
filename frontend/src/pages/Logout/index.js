import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  
  const handleLogout = () => {
    
    navigate('/login');
  };

  React.useEffect(() => {
    handleLogout();
  }, []);

  return (
    <div>
      <p>Fazendo logout...</p>
      {/* Se desejar, você pode adicionar uma mensagem de confirmação ou um spinner de carregamento aqui */}
    </div>
  );
};

export default Logout;
