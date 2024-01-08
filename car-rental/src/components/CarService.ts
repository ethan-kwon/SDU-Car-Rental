import AsyncStorage from "@react-native-async-storage/async-storage";

const CARS_KEY = 'CARS';

export const loadAllCars = async () => {
  const carsFromStorage = await AsyncStorage.getItem(CARS_KEY);
  if (carsFromStorage !== null) {
    return JSON.parse(carsFromStorage);
  }

  const URL = 'http://192.168.222.180:8080/cars';
  const response = await fetch(URL);
  const result = await response.json();

  await AsyncStorage.setItem(CARS_KEY, JSON.stringify(result));
  return result;
};
