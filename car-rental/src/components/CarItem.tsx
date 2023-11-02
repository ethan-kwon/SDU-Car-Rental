import Car from "../models/Car";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import IconText, {IconType} from "./IconText";

interface CarItemProps {
    car: Car;
    navigation: any;
}

const CarItem = (props: CarItemProps) => {
    return (
        <TouchableOpacity style={[styles.container, styles.shadow]}
                          onPress={() => props.navigation.navigate("CarDetails", {
                              car: props.car,
                              headerTitle: `${props.car.manufacturer} ${props.car.model}`
                          })}>
            <View>
                <View style={styles.headerBox}>
                    <Text style={styles.headerText}>{props.car.manufacturer} {props.car.model}</Text>
                </View>
                <Image source={require("../../assets/car-images/placeholder.png")}
                       style={styles.carImage}
                />
                <View style={styles.descriptionBox}>
                    <IconText iconType={IconType.Ionicons}
                              iconName={"person"}
                              iconSize={24}
                              iconColor={"black"}
                              bodyText={"4 seater"}
                              bodyTextStyle={styles.descriptionText}
                    />
                    <IconText iconType={IconType.Ionicons}
                              iconName={"car-sport"}
                              iconSize={24}
                              iconColor={"black"}
                              bodyText={"SUV"}
                              bodyTextStyle={styles.descriptionText}
                    />
                    <IconText iconType={IconType.FontAwesome}
                              iconName={"gear"}
                              iconSize={24}
                              iconColor={"black"}
                              bodyText={"Manual"}
                              bodyTextStyle={styles.descriptionText}
                    />
                </View>
                <View style={styles.priceBox}>
                    <IconText iconType={IconType.FontAwesome}
                              iconName={"dollar"}
                              iconSize={24}
                              iconColor={"black"}
                              bodyText={"199$ /day"}
                              bodyTextStyle={styles.priceText}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 12
    }, headerBox: {
        marginVertical: 12,
        marginHorizontal: 16
    }, headerText: {
        fontFamily: "roboto-medium",
        fontSize: 20,
        lineHeight: 24,
        letterSpacing: 0.15
    }, carImage: {
        width: "100%",
        height: 188
    }, descriptionBox: {
        margin: 16,
        flexDirection: "row",
        justifyContent: "space-around"
    }, descriptionText: {
        fontFamily: "roboto-regular",
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.50,
        marginLeft: 5
    }, priceBox: {
        marginHorizontal: 16,
        marginBottom: 16,
        alignItems: "center"
    }, priceText: {
        fontFamily: "roboto-medium",
        fontWeight: "500",
        marginLeft: 5,
        letterSpacing: 0.50,
        fontSize: 18,
    }, shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
})
export default CarItem;