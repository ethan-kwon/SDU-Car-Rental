import React, { useState, useContext, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image, ScrollView } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';
import { BookingsContext } from '../../store/booking-context'; 
import CarItem from '../components/CarItem';
import { CAR_IMAGES } from '../components/CarImages';

const CarDetailsScreen = (props) => {
  const { car, removeBookedCar } = props.route.params;  // Extract removeBookedCar from route.params
  const { bookings, setBookings } = useContext(BookingsContext);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);

  const [confirmationModalVisible, setConfirmationModalVisible] = useState(false);

  const onCloseConfirmationModal = () => {
    setConfirmationModalVisible(false);
    props.navigation.goBack();
  };

  const handleBookNow = () => {
    const newBooking = {
      id: bookings.length + 1, // Use a proper ID generation logic
      title: `${car.manufacturer} ${car.model}`,
      startDate: dayjs(startDate).format('YYYY-MM-DD'),
      endDate: dayjs(endDate).format('YYYY-MM-DD'),
      startTime: dayjs(startTime).format('HH:mm'),
      endTime: dayjs(endTime).format('HH:mm'),
      location: selectedLocation,
      manufacturer: `${car.manufacturer}`,
      model: `${car.model}`,
      color: `${car.color}`,
      pricePerDay: `${car.pricePerDay}`,
      fileName: `${car.fileName}`,
      seatsNumber: `${car.seatsNumber}`,
      carType: `${car.carType}`,
      transmissionType: `${car.transmissionType}`,
    };

    // Update bookings state
    setBookings((prevBookings) => {
        const updatedBookings = [...prevBookings, newBooking];;
        return updatedBookings;
    });
    props.navigation.navigate("CarDetails", {
      car,
      headerTitle: `${car.manufacturer} ${car.model}`,
      removeBookedCar,  // Pass the function here
    });
    if (removeBookedCar) {
      removeBookedCar(car.id);  // Check if removeBookedCar is defined before calling it
    }

    // Show confirmation message
    setConfirmationModalVisible(true);
  
};

  const onChangeStartDate = (event, selectedDate) => {
    setShowStartDatePicker(false);
    if (selectedDate) {
      setStartDate(selectedDate);
    }
  };

  const onChangeEndDate = (event, selectedDate) => {
    setShowEndDatePicker(false);
    if (selectedDate) {
      setEndDate(selectedDate);
    }
  };

  const onChangeStartTime = (event, selectedTime) => {
    setShowStartTimePicker(false);
    if (selectedTime) {
      setStartTime(selectedTime);
    }
  };

  const onChangeEndTime = (event, selectedTime) => {
    setShowEndTimePicker(false);
    if (selectedTime) {
      setEndTime(selectedTime);
    }
  };

  const showStartDatepicker = () => {
    setShowStartDatePicker(true);
  };

  const showEndDatepicker = () => {
    setShowEndDatePicker(true);
  };

  const showStartTimepicker = () => {
    setShowStartTimePicker(true);
  };

  const showEndTimepicker = () => {
    setShowEndTimePicker(true);
  };

  const [selectedLocation, setSelectedLocation] = useState("Odense");
  const [locationMenuVisible, setLocationMenuVisible] = useState(false);
  const locations = ["Odense", "Copenhagen", "Aarhus"];

  const handleLocationSelection = (location) => {
    setSelectedLocation(location);
    setLocationMenuVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
      {/* <CarItem car={car} navigation={props.navigation} /> */}
      {/* Car details */}
      <Text style={styles.header}>{`${car.manufacturer} ${car.model}`}</Text>
      <Image source={CAR_IMAGES[car.fileName]} style={styles.carImage} />
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text style={styles.label}>ID:</Text>
          <Text>{car.id}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Manufacturer:</Text>
          <Text>{car.manufacturer}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Model:</Text>
          <Text>{car.model}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Production Year:</Text>
          <Text>{car.productionYear}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>License Number:</Text>
          <Text>{car.licenseNumber}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Color:</Text>
          <Text>{car.color}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Price Per Day:</Text>
          <Text>{car.pricePerDay}</Text>
        </View>

        {/* Date picker */}
        <Text style={styles.label}>Select Rental Dates:</Text>
        <View style={styles.datePickerContainer}>
          <TouchableOpacity
            style={[styles.flexibleButton, { flex: 1 }]}
            onPress={showStartDatepicker}
          >
            <Text>{`Start date: ${dayjs(startDate).format("YYYY-MM-DD")}`}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.flexibleButton, { flex: 1 }]}
            onPress={showEndDatepicker}
          >
            <Text>{`End date: ${dayjs(endDate).format("YYYY-MM-DD")}`}</Text>
          </TouchableOpacity>
        </View>

        {/* Time picker */}
        <Text style={styles.label}>Select Rental Times:</Text>
        <View style={styles.datePickerContainer}>
          <TouchableOpacity
            style={[styles.flexibleButton, { flex: 1 }]}
            onPress={showStartTimepicker}
          >
            <Text>{`Start time: ${dayjs(startTime).format("HH:mm")}`}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.flexibleButton, { flex: 1 }]}
            onPress={showEndTimepicker}
          >
            <Text>{`End time: ${dayjs(endTime).format("HH:mm")}`}</Text>
          </TouchableOpacity>
        </View>

          {/* Pickup location */}
          <Text style={styles.label}>Select Pickup Location:</Text>
          <TouchableOpacity
            style={[styles.flexibleButton, styles.locationButton]}
            onPress={() => setLocationMenuVisible(true)}
          >
            <Text>{selectedLocation || "Select Location"}</Text>
          </TouchableOpacity>

          {/* Location menu */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={locationMenuVisible}
            onRequestClose={() => setLocationMenuVisible(false)}
          >
            <View style={styles.locationMenuContainer}>
              {locations.map((location) => (
                <TouchableOpacity
                  key={location}
                  style={[
                    styles.flexibleButton,
                    styles.locationMenuItem,
                    {
                      backgroundColor:
                        selectedLocation === location ? "#3498db" : "#fff",
                    },
                  ]}
                  onPress={() => handleLocationSelection(location)}
                >
                  <Text
                    style={{
                      color: selectedLocation === location ? "#fff" : "#3498db",
                    }}
                  >
                    {location}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </Modal>

        {/* DateTimePicker components */}
        {showStartDatePicker && (
          <DateTimePicker
            value={startDate}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChangeStartDate}
          />
        )}
        {showEndDatePicker && (
          <DateTimePicker
            value={endDate}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChangeEndDate}
          />
        )}
        {showStartTimePicker && (
          <DateTimePicker
            value={startTime}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={onChangeStartTime}
          />
        )}
        {showEndTimePicker && (
          <DateTimePicker
            value={endTime}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={onChangeEndTime}
          />
        )}

        {/* Book Now button */}
        <TouchableOpacity
          style={styles.bookNowButton}
          onPress={handleBookNow}
        >
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </View>

      {/* Confirmation Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={confirmationModalVisible}
        onRequestClose={onCloseConfirmationModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Booking Confirmed!</Text>
            <TouchableOpacity onPress={onCloseConfirmationModal} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  detailsContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    elevation: 2,
  },
  detailItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  datePickerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  flexibleButton: {
    height: 50,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#3498db',
    borderRadius: 5,
  },
  bookNowButton: {
    height: 50,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  carImage: {
    width: "100%",
    height: 188,
    marginBottom: 16,
    borderRadius: 16,
  },
  locationPickerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  locationButton: {
    borderWidth: 2,
    borderColor: "#3498db",
  },
  locationMenuContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  locationMenuItem: {
    borderWidth: 2,
    borderColor: "#3498db",
    marginBottom: 8,
  },
  blueBorderBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "#3498db",
    borderRadius: 5,
    padding: 8,
  },
});

export default CarDetailsScreen;
