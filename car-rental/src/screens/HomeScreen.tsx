import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import Car from "../models/Car";
import CarItem from "../components/CarItem";
import SearchBar from "../components/SearchBar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS } from "../styles/colors";

const CARS_KEY = 'CARS';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCarsFromStorage = async () => {
    return AsyncStorage.getItem(CARS_KEY);
  };

  const getCarsFromApi = async () => {
    const URL = 'http://192.168.222.180:8080/cars';
    return fetch(URL).then((response) => response.json());
  };

  const removeBookedCar = (carIdToRemove: number) => {
    setCars((prevCars) => prevCars.filter((car) => car.id !== carIdToRemove));
  };

  const addCanceledBookingBack = (canceledBooking: Car) => {
    setCars((prevCars) => [...prevCars, canceledBooking]);
  };

  const loadAllCars = async () => {
    const carsFromStorage = await getCarsFromStorage();

    if (carsFromStorage !== null) {
      setCars(JSON.parse(carsFromStorage));
      return;
    }

    const result = await getCarsFromApi();
    await AsyncStorage.setItem(CARS_KEY, JSON.stringify(result));
    setCars(result);
  };

  useEffect(() => {
    loadAllCars().then();
  }, []);

  const fetchCarByIdFromApi = async (carId: number): Promise<Car | null> => {
    const URL = `http://192.168.222.180:8080/cars/${carId}`;
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(`Failed to fetch car with ID ${carId}`);
      }
      const car = await response.json();
      return car;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const renderItem = ({ item }: { item: Car }) => {
    return (
      <CarItem
        car={item}
        navigation={navigation}
        onCancelBookingPress={() => handleCancelBooking(item.id)}
        removeBookedCar={removeBookedCar}
      />
    );
  };

  const handleCancelBooking = async (carIdToRemove: number) => {
    const canceledCar = await fetchCarByIdFromApi(carIdToRemove);

    if (canceledCar) {
      setCars((prevCars) => [...prevCars, canceledCar]);
    }
  };

  const handleSearch = (text: string) => {
    setSearchQuery(text);

    const postFilteredCars = cars?.filter(car => {
      const key = text.toLowerCase().trim();
      return (
        car.manufacturer.toLowerCase().includes(key) ||
        car.model.toLowerCase().includes(key) ||
        concatenate_car_details(car).includes(key)
      );
    });

    setFilteredCars(postFilteredCars || []);
  };

  function concatenate_car_details(car: Car): string {
    return car.manufacturer.toLowerCase() + ' ' + car.model.toLowerCase();
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <SearchBar
        placeholder="Search for cars"
        value={searchQuery}
        onChangeValue={handleSearch}
      />
      <View>
        <FlatList
          data={searchQuery.length > 0 ? filteredCars : cars}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: COLORS.LIGHT_LIGHT_GRAY,
  },
});

export default HomeScreen;
