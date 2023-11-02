import Car from "../models/Car";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import IconText, {IconType} from "./IconText";
import globalStyles from "../styles/styles";
import fonts from "../styles/fonts";
import {COLORS} from "../styles/colors";
import {CAR_IMAGES} from "./CarImages";

interface CarItemProps {
    car: Car;
    navigation: any;
}

const CarItem = (props: CarItemProps) => {
    return (
        <TouchableOpacity style={[styles.container, globalStyles.boxShadow]}
                          onPress={() => props.navigation.navigate("CarDetails", {
                              car: props.car,
                              headerTitle: `${props.car.manufacturer} ${props.car.model}`
                          })}>
            <View>
                <View style={styles.headerBox}>
                    <Text style={fonts.titleMedium}>{props.car.manufacturer} {props.car.model}</Text>
                </View>
                <Image source={CAR_IMAGES[`${props.car.fileName}`]}
                       style={styles.carImage}
                />
                <View style={styles.descriptionBox}>
                    <IconText iconType={IconType.Ionicons}
                              iconName={"person"}
                              iconSize={24}
                              iconColor={COLORS.DARK_GRAY}
                              bodyText={`${props.car.seatsNumber} seater`}
                              bodyTextStyle={[fonts.bodyMedium, styles.descriptionText]}
                    />
                    <IconText iconType={IconType.Ionicons}
                              iconName={"car-sport"}
                              iconSize={24}
                              iconColor={COLORS.DARK_GRAY}
                              bodyText={`${props.car.carType}`.replace('_', '-')}
                              bodyTextStyle={[fonts.bodyMedium, styles.descriptionText]}
                    />
                    <IconText iconType={IconType.FontAwesome}
                              iconName={"gear"}
                              iconSize={24}
                              iconColor={COLORS.DARK_GRAY}
                              bodyText={`${props.car.transmissionType}`}
                              bodyTextStyle={[fonts.bodyMedium, styles.descriptionText]}
                    />
                </View>
                <View style={styles.priceBox}>
                    <IconText iconType={IconType.FontAwesome5}
                              iconName={"coins"}
                              iconSize={24}
                              iconColor={COLORS.GREEN}
                              bodyText={`${props.car.pricePerDay}DKK / Day`}
                              bodyTextStyle={[fonts.bodyMedium, styles.priceText]}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.WHITE,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 12
    }, headerBox: {
        marginVertical: 12,
        marginHorizontal: 16
    }, carImage: {
        width: "100%",
        height: 188
    }, descriptionText: {
        color: COLORS.DARK_GRAY,
        textTransform: "capitalize"
    }, descriptionBox: {
        margin: 16,
        flexDirection: "row",
        justifyContent: "space-around"
    }, priceBox: {
        marginHorizontal: 16,
        marginBottom: 16,
        alignItems: "center"
    }, priceText: {
        fontSize: 18,
        fontWeight: "700",
        color: COLORS.GREEN
    }, capitilizedText: {
        textTransform: "capitalize"
    }
})
export default CarItem;