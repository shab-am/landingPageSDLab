import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const SignupForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      // For demo purposes, we'll just log in with the test account
      await login({
        email: 'test@example.com',
        password: 'password123'
      });
      navigate('/learn');
    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-white mb-6">Create Account</h2>
        {error && (
          <div className="bg-red-500 text-white p-3 rounded mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-gray-300 block mb-2">Full Name</label>
            <input
              type="text"
              className="w-full p-3 rounded bg-gray-700 text-white"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="text-gray-300 block mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded bg-gray-700 text-white"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="text-gray-300 block mb-2">Password</label>
            <input
              type="password"
              className="w-full p-3 rounded bg-gray-700 text-white"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
              minLength={6}
            />
          </div>
          <div>
            <label className="text-gray-300 block mb-2">Confirm Password</label>
            <input
              type="password"
              className="w-full p-3 rounded bg-gray-700 text-white"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              required
              minLength={6}
            />
          </div>
          <button 
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-600 text-white py-3 rounded font-semibold hover:bg-indigo-500 disabled:bg-indigo-400 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>
        <p className="text-gray-400 mt-4 text-center">
          Already have an account? {' '}
          <Link to="/login" className="text-indigo-400 hover:text-indigo-300">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm; 