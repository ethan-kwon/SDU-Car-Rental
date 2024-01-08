import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({
  user: { name: '', email: '', bio: '' },
  token: '',
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
  updateUser: (userData) => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [user, setUser] = useState({ name: '', email: '', bio: '' });

  useEffect(() => {
    // Fetch user data from storage or authentication API
    const fetchUserData = async () => {
      const storedToken = await AsyncStorage.getItem('token');
      if (storedToken) {
        // Fetch user data based on the token
        // Example: const userData = await fetchUserDataFromAPI(storedToken);
        const userData = { name: 'John Doe', email: 'john.doe@example.com', bio: 'Lorem ipsum' };
        setUser(userData);
        setAuthToken(storedToken);
      }
    };

    fetchUserData();
  }, []);

  function authenticate(token) {
    setAuthToken(token);
    AsyncStorage.setItem('token', token);
  }

  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem('token');
  }

  function updateUser(userData) {
    // Update the user data
    setUser((prevUser) => ({
      ...prevUser,
      ...userData,
    }));
  }

  const value = {
    user,
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate,
    logout,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
