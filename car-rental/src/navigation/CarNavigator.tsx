import HomeScreen from "../screens/HomeScreen";
import CarDetailsScreen from "../screens/CarDetailsScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const CarNavigator = () => {
    const CarStack = createNativeStackNavigator();
    return (
        <CarStack.Navigator>
            <CarStack.Screen name={"Root"} component={HomeScreen} options={{headerShown: false}}/>
            <CarStack.Screen name={"CarDetails"}
                             component={CarDetailsScreen}
                             options={({route}: { route: any }) =>
                                 ({headerTitle: route.params.title === undefined ? 'CarDetails' : route.params.title})}/>
        </CarStack.Navigator>
    );
}

export default CarNavigator;