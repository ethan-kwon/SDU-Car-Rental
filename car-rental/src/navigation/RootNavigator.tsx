import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from '../screens/ProfileScreen';
import CarNavigator from './CarNavigator';
import BookingsScreen from '../screens/BookingsScreen';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../styles/colors';

const RootNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any;

            if (route.name === 'Home') {
              iconName = 'car-sport';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            } else if (route.name === 'Bookings') {
              iconName = 'calendar';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: COLORS.GREEN,
          tabBarInactiveTintColor: COLORS.LIGHT_GRAY,
          tabBarStyle: {
            backgroundColor: COLORS.WHITE,
          },
          tabBarLabelStyle: {
            fontFamily: 'roboto-regular',
            fontSize: 14,
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name={'Home'} component={CarNavigator} />
        <Tab.Screen name={'Bookings'} component={BookingsScreen} />
        <Tab.Screen name={'Profile'} component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;