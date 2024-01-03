import {Text, View} from "react-native";
import {useEffect, useState} from "react";

interface CarDetailsScreenProps {
    navigation: any;
    route: any;
}

const CarDetailsScreen = (props: CarDetailsScreenProps) => {
    const [car] = useState(() => {
        const {car} = props.route.params;
        return car;
    });

    useEffect(() => {
        const headerTitle = car.manufacturer + " " + car.model;
        props.navigation.setOptions({headerTitle: headerTitle});
    }, [])

    return (
        <View>
            <Text>ID: {car.id}</Text>
            <Text>Manufacturer: {car.manufacturer}</Text>
            <Text>Model: {car.model}</Text>
            <Text>Seats number: {car.seatsNumber}</Text>
            <Text>Type: {car.carType.toString()}</Text>
            <Text>Color: {car.color}</Text>
            <Text>Price per day: {car.pricePerDay}DKK</Text>
            <Text>Transmission type: {car.transmissionType.toString()}</Text>
        </View>
    );
}

export default CarDetailsScreen;