import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { CAR_IMAGES } from './CarImages';

const CarDetails = ({ car }) => {
  return (
    <View style={styles.container}>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  detailsContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    elevation: 2,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  carImage: {
    width: "100%",
    height: 188
  },
});

export default CarDetails;
