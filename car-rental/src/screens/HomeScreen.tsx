import {FlatList, View} from "react-native";
import {useState} from "react";
import Car from "../models/Car";
import {getAllCars} from "../services/CarService"
import CarItem from "../components/CarItem";

function getCars(): Car[] {
    return getAllCars();
}

const HomeScreen = () => {
    const [cars, setCars] = useState<Car[]>(() => getCars());

    return (
        <View>
            <FlatList
                data={cars}
                renderItem={({item}) => <CarItem car={item}/>}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}

export default HomeScreen;