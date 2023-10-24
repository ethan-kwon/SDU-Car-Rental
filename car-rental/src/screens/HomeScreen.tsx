import {FlatList, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import Car from "../models/Car";
import {getAllCars} from "../services/CarService"
import CarItem from "../components/CarItem";

function getCars(): Car[] {
    return getAllCars();
}

const HomeScreen = ({navigation}: { navigation: any }) => {
    const [cars, setCars] = useState<Car[]>(() => getCars());

    const renderItem = ({item}: { item: Car }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate("CarDetails", {car: item})}
            >
                <CarItem car={item}/>
            </TouchableOpacity>
        );
    }

    return (
        <View>
            <FlatList
                data={cars}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}

export default HomeScreen;