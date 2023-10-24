import Car from "../models/Car";
import {StyleSheet, Text, View} from "react-native";

interface CarItemProps {
    car: Car;
}

const CarItem = (props: CarItemProps) => {
    return (
        <View style={styles.container}>
            <Text>{props.car.id}</Text>
            <Text>{props.car.manufacturer}</Text>
            <Text>{props.car.model}</Text>
            <Text>{props.car.year}</Text>
            <Text>{props.car.licenseNumber}</Text>
            <Text>{props.car.color}</Text>
            <Text>{props.car.pricePerDay}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: "pink"
    }
})
export default CarItem;