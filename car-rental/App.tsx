import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from './styles/colors';
import CarNavigator from './src/navigation/CarNavigator';

import ProfileScreen from './src/screens/ProfileScreen';
import BookingsScreen from './src/screens/BookingsScreen';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import BookingsContextProvider, {BookingsContext} from './store/booking-context'; 
import IconButton from './components/UI/IconButton';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

SplashScreen.preventAutoHideAsync();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.PRIMARY },
        headerTintColor: COLORS.WHITE,
        contentStyle: { backgroundColor: COLORS.LIGHT_LIGHT_GRAY },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);

  return (
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
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  const [fontsLoaded, fontError] = useFonts({
    'roboto-regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
    'roboto-medium': require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
  });

  const loadFontsAndHideSplashScreen = async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    const fetchToken = async () => {
      const storedToken = await AsyncStorage.getItem('token');

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      setIsTryingLogin(false);
      await loadFontsAndHideSplashScreen();
    };

    fetchToken();
  }, [authCtx, fontsLoaded, fontError]);

  if (isTryingLogin || !fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated ? <AuthStack /> : <AuthenticatedStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <BookingsContextProvider>
          <Root />
        </BookingsContextProvider>
      </AuthContextProvider>
    </>
  );
}
