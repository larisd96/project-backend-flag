import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

  const authToken = Cookies.get("access_token");

    if (!authToken) {
      return <Navigate to="/login" replace />;
    }
  
    return children ? children : <Outlet />;
  };

export default ProtectedRoute