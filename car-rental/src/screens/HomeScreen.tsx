import {FlatList, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";
import Car from "../models/Car";

import CarItem from "../components/CarItem";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CARS_KEY = 'CARS'

const HomeScreen = ({navigation}: { navigation: any }) => {
    const [cars, setCars] = useState<Car[]>();

    const getCarsFromStorage = async () => {
        return AsyncStorage.getItem(CARS_KEY);
    }

    const getCarsFromApi = async () => {
        const URL = 'http://10.0.2.2:8080/cars';
        return fetch(URL)
            .then(response => response.json())
    }

    const loadAllCars = async () => {
        const carsFromStorage = await getCarsFromStorage();

        if (carsFromStorage !== null) {
            setCars(JSON.parse(carsFromStorage));
            return;
        }

        await getCarsFromApi().then(async result => {
            await AsyncStorage.setItem(CARS_KEY, JSON.stringify(result));
            setCars(result);
        });
    }


    useEffect(() => {
        loadAllCars().then();
    }, [])

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