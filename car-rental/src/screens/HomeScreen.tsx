import {FlatList, SafeAreaView, StatusBar, StyleSheet} from "react-native";
import React, {useEffect, useState} from "react";
import Car from "../models/Car";
import CarItem from "../components/CarItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {COLORS} from "../styles/colors";
import SearchBar from "../components/SearchBar";

const CARS_KEY = 'CARS'

const HomeScreen = ({navigation}: { navigation: any }) => {
    const [cars, setCars] = useState<Car[]>();
    useEffect(() => {
        loadAllCars().then();
    }, [])

    const [keyword, setKeyword] = useState('')


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
    const getCarsFromStorage = async () => {
        return AsyncStorage.getItem(CARS_KEY);
    }

    const getCarsFromApi = async () => {
        // const URL = 'http://10.0.2.2:8080/cars';
        const URL = 'http://192.168.0.132:8080/cars';
        return fetch(URL)
            .then(response => response.json())
    }

    const renderItem = ({item}: { item: Car }) => {
        return (
            <CarItem car={item} navigation={navigation}/>
        );
    }

    const postFilteredCars = cars?.filter(car => {
        const key = keyword.toLowerCase().trim()
        return car.manufacturer.toLowerCase().includes(key) ||
            car.model.toLowerCase().includes(key) ||
            concatenate_car_details(car).includes(key)
    });

    function concatenate_car_details(car: Car): string {
        return car.manufacturer.toLowerCase() + ' ' + car.model.toLowerCase()
    }

    return (
        <SafeAreaView style={styles.wrapper}>
            <SearchBar
                placeholder='Search...'
                value={keyword}
                onChangeValue={setKeyword}
            />
            <FlatList
                data={postFilteredCars}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                style={styles.carList}
                overScrollMode="never"
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: COLORS.LIGHT_LIGHT_GRAY
    }, carList: {
        flex: 4
    }
});

export default HomeScreen;