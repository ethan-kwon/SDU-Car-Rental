import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import ProfileScreen from "../screens/ProfileScreen";
import CarNavigator from "./CarNavigator";

const RootNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown: false}}>
                <Tab.Screen name={"Home"} component={CarNavigator}/>
                <Tab.Screen name={"Profile"} component={ProfileScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;