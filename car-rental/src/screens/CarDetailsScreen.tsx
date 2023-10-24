import {Text, View} from "react-native";

interface CarDetailsScreenProps {
    navigation: any;
    route: any;
}

const CarDetailsScreen = (props: CarDetailsScreenProps) => {
    const {car} = props.route.params;
    const headerTitle = car.manufacturer + " "+ car.model;
    props.navigation.setOptions({headerTitle: headerTitle});

    return (
        <View>
            <Text>{car.id}</Text>
            <Text>{car.manufacturer}</Text>
            <Text>{car.model}</Text>
            <Text>{car.year}</Text>
            <Text>{car.licenseNumber}</Text>
            <Text>{car.color}</Text>
            <Text>{car.pricePerDay}</Text>
        </View>
    );
}

export default CarDetailsScreen;