import React from 'react';
import { View, Text } from 'react-native';
import Login from './Login';
import Register from './Register';

const Profile = () => {
  return (
    <View>
      <Text>Profile Page</Text>
      <Login />
      <Register />
    </View>
  );
};

export default Profile;