import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const NavHeader = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-[#4f46e5] text-3xl font-bold">TreeMaster</span>
          </div>
          <button
            onClick={handleLogout}
            className="bg-[#4f46e5] hover:bg-[#4338ca] text-white px-4 py-2 rounded-md transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavHeader; 