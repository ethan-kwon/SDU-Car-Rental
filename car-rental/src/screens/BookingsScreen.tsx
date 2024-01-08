import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { BookingsContext } from '../../store/booking-context';
import { Ionicons } from '@expo/vector-icons';
import globalStyles from "../styles/styles";
import { Dimensions } from 'react-native';
import { CAR_IMAGES } from '../components/CarImages';
import IconText, { IconType } from '../components/IconText';
import fonts from '../styles/fonts';
import { COLORS } from '../styles/colors';
import BookingDetails from '../components/BookingDetails';

const window = Dimensions.get('window');
const screenHeight = window.height;

const BookingsScreen = ({ route, onAddCanceledBooking }) => {
    const { bookings, setBookings } = useContext(BookingsContext);
    const [selectedBooking, setSelectedBooking] = useState(null);
  
  const handleRemoveBooking = (bookingId) => {
    // Filter out the booking with the specified ID
    const updatedBookings = bookings.filter((booking) => booking.id !== bookingId);

    // Update the bookings state
    setBookings(updatedBookings);

    navigation.navigate('Bookings', {
      screen: 'BookingDetails',
      params: {
        booking,
        onRemoveBooking: handleRemoveBooking,
        onAddCanceledBooking: onAddCanceledBooking,
        visible: true, // Include the 'visible' prop
      },
    });
  };
  
    const handlePress = (booking) => {
      setSelectedBooking(booking);
    };
  
    const handleCloseModal = () => {
      setSelectedBooking(null);
    };

    return (
        <ScrollView style={styles.scrollContainer}>
          {bookings && bookings.length > 0 ? (
            bookings.map((booking) => (
              <TouchableOpacity
                key={booking.id}
                style={[styles.container, globalStyles.boxShadow]}
                onPress={() => handlePress(booking)}
              >
            <View>
              <View style={styles.headerBox}>
                <Text style={fonts.titleMedium}>{`${booking.manufacturer} ${booking.model}`}</Text>
              </View>
              <Image source={CAR_IMAGES[`${booking.fileName}`]} style={styles.carImage} />
              <View style={styles.descriptionBox}>
                <IconText
                  iconType={IconType.Ionicons}
                  iconName={"person"}
                  iconSize={24}
                  iconColor={COLORS.DARK_GRAY}
                  bodyText={`${booking.seatsNumber} seater`}
                  bodyTextStyle={[fonts.bodyMedium, styles.descriptionText]}
                />
                <IconText
                  iconType={IconType.Ionicons}
                  iconName={"car-sport"}
                  iconSize={24}
                  iconColor={COLORS.DARK_GRAY}
                  bodyText={`${booking.carType}`.replace('_', '-')}
                  bodyTextStyle={[fonts.bodyMedium, styles.descriptionText]}
                />
                <IconText
                  iconType={IconType.FontAwesome}
                  iconName={"gear"}
                  iconSize={24}
                  iconColor={COLORS.DARK_GRAY}
                  bodyText={booking.transmissionType}
                  bodyTextStyle={[fonts.bodyMedium, styles.descriptionText]}
                />
              </View>
                <Text style={[styles.label, { textAlign: 'center' }]}>Rental Period</Text>
                <Text style={[styles.label, { textAlign: 'center' }]}>
                    {booking.startDate} to {booking.endDate}
                </Text>
            </View>
            </TouchableOpacity>
        ))
        ) : (
            <Text style={styles.noBookingsText}>You have no bookings yet.</Text>
          )}

      {/* Display the details modal when a booking is pressed */}
      {selectedBooking && (
        <BookingDetails
          visible={!!selectedBooking}
          booking={selectedBooking}
          onClose={handleCloseModal}
          onRemoveBooking={handleRemoveBooking}
          />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
  },
  headerBox: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
  carImage: {
    width: "100%",
    height: 188,
  },
  descriptionText: {
    color: COLORS.DARK_GRAY,
    textTransform: "capitalize",
  },
  descriptionBox: {
    margin: 16,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  priceBox: {
    marginHorizontal: 16,
    marginBottom: 16,
    alignItems: "center",
  },
  priceText: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.GREEN,
  },
  capitilizedText: {
    textTransform: "capitalize",
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto', // Push the container to the center
    backgroundColor: 'white',
  },
  noBookingsText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: screenHeight / 2.5, // Adjust the marginTop as needed
  },
  scrollContainer: {
    flexGrow: 1,
    width: '100%', // Set width to 100% to fill the container
    marginTop: 50,
  },
  detailItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default BookingsScreen;