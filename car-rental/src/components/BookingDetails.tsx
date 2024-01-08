import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, Image, StyleSheet, Alert, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../styles/colors';
import { CAR_IMAGES } from '../components/CarImages';
import { BlurView } from '@react-native-community/blur';

const BookingDetails = ({ route, navigation }) => {
  const { booking, onRemoveBooking } = route.params;
  const [confirmationVisible, setConfirmationVisible] = useState(false);

  const handleCancelBooking = () => {
    setConfirmationVisible(true);
  };

  const handleConfirmCancel = () => {
    setConfirmationVisible(false);

    // Use the onRemoveBooking callback to remove the booking
    const bookingId = booking.id;
    onRemoveBooking(bookingId);

    // Use the onAddCanceledBooking callback to add the canceled car back to available cars
    const canceledCar = { id: booking.id, manufacturer: booking.manufacturer, model: booking.model, /* ...other details */ };
    navigation.getParam('onAddCanceledBooking')(canceledCar);

    onClose();
  };

  const handleCancelConfirmation = () => {
    setConfirmationVisible(false);
  };

  if (!visible || !booking) {
    return null;
  }

  const renderBackgroundBlur = () => {
    if (confirmationVisible) {
      if (Platform.OS === 'ios') {
        // For iOS, use BlurView
        return (
          <BlurView
            style={styles.blurView}
            blurType="dark"
            blurAmount={10} // Adjust the blur amount as needed
          />
        );
      } else {
        // For Android, use a translucent overlay
        return (
          <View style={styles.androidOverlay} />
        );
      }
    } else {
      return null;
    }
  };

  return (
    <Modal visible={visible} animationType="slide">
      {renderBackgroundBlur()}
      <View style={styles.modalContainer}>

        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Ionicons name="close-circle" size={32} color={COLORS.DARK_GRAY} />
        </TouchableOpacity>

        <Text style={styles.header}>{`${booking.manufacturer} ${booking.model}`}</Text>
        <Image source={CAR_IMAGES[booking.fileName]} style={styles.carImage} />
       
        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <Text style={styles.label}>ID:</Text>
            <Text>{booking.id}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.label}>Manufacturer:</Text>
            <Text>{booking.manufacturer}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.label}>Model:</Text>
            <Text>{booking.model}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.label}>Production Year:</Text>
            <Text>{/* Add the production year value here */}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.label}>License Number:</Text>
            <Text>{/* Add the license number value here */}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.label}>Color:</Text>
            <Text>{booking.color}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.label}>Price Per Day:</Text>
            <Text>{`${booking.pricePerDay}DKK`}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.label}>Location:</Text>
            <Text>{booking.location}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.label}>Rental Period:</Text>
            <Text>{`${booking.startDate} to ${booking.endDate}`}</Text>
          </View>
          </View>
        <TouchableOpacity style={[styles.cancelButton, { width: '95%' }]}onPress={handleCancelBooking}>
          <Text style={styles.cancelButtonText}>Cancel Booking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        </TouchableOpacity>

        {/* Confirmation Modal */}
        <Modal visible={confirmationVisible} transparent animationType="slide">
          <View style={styles.confirmationContainer}>
            <Ionicons name="trash-outline" size={50} color={COLORS.RED} />
            <Text style={styles.confirmationText}>
              Are you sure you want to cancel this booking?
            </Text>
            <View style={styles.confirmationButtons}>
              <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmCancel}>
                <Text style={styles.confirmButtonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.cancelButton, {flex: 1}]} onPress={handleCancelConfirmation}>
                <Text style={styles.cancelButtonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  carImage: {
    width: '95%',
    height: 188,
    borderRadius: 16,
    marginBottom: 16,
  },
  detailsContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    width: '100%',
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  removeButton: {
    marginTop: 16,
    padding: 12,
    backgroundColor: COLORS.RED, // Change to the desired color
    borderRadius: 8,
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  closeButtonText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: COLORS.RED,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Confirmation Modal Styles
  confirmationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  confirmationText: {
    color: COLORS.WHITE,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  confirmationButtons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  confirmButton: {
    flex: 1,
    backgroundColor: COLORS.RED,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
  blurView: {
    ...StyleSheet.absoluteFillObject,
  },
  androidOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Adjust the color and opacity as needed
  },
});

export default BookingDetails;
