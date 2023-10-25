import {FlatList, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";
import Car from "../models/Car";

import CarItem from "../components/CarItem";


const HomeScreen = ({navigation}: { navigation: any }) => {
    const [cars, setCars] = useState<Car[]>();

    useEffect(() => {
        const URL = 'http://10.0.2.2:8080/cars';

        fetch(URL)
            .then(response => response.json())
            .then(json => setCars(json))
    })

    const renderItem = ({item}: { item: Car }) => {
        const headerTitle = item.manufacturer + " " + item.model;
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate("CarDetails", {car: item, headerTitle: headerTitle})}
            >
                <CarItem car={item}/>
            </TouchableOpacity>
        );
    }

    return (
        <SafeAreaView style={styles.wrapper}>
            <View>
                <FlatList
                    data={cars}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0

    }
});

export default HomeScreen;