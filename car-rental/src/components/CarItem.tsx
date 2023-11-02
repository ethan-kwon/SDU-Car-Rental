import Car from "../models/Car";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import IconText, {IconType} from "./IconText";
import globalStyles from "../styles/styles";
import fonts from "../styles/fonts";
import {COLORS} from "../styles/colors";

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
                <Image source={require("../../assets/car-images/placeholder.png")}
                       style={styles.carImage}
                />
                <View style={styles.descriptionBox}>
                    <IconText iconType={IconType.Ionicons}
                              iconName={"person"}
                              iconSize={24}
                              iconColor={COLORS.DARK_GRAY}
                              bodyText={"4 seater"}
                              bodyTextStyle={fonts.bodyMedium}
                    />
                    <IconText iconType={IconType.Ionicons}
                              iconName={"car-sport"}
                              iconSize={24}
                              iconColor={COLORS.DARK_GRAY}
                              bodyText={"SUV"}
                              bodyTextStyle={fonts.bodyMedium}
                    />
                    <IconText iconType={IconType.FontAwesome}
                              iconName={"gear"}
                              iconSize={24}
                              iconColor={COLORS.DARK_GRAY}
                              bodyText={"Manual"}
                              bodyTextStyle={fonts.bodyMedium}
                    />
                </View>
                <View style={styles.priceBox}>
                    <IconText iconType={IconType.FontAwesome}
                              iconName={"dollar"}
                              iconSize={24}
                              iconColor={COLORS.GREEN}
                              bodyText={"199$ /day"}
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
    }
})
export default CarItem;