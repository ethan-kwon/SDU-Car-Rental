import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

const RootNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name={"Home"} component={HomeScreen}/>
                <Tab.Screen name={"Profile"} component={ProfileScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;