import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Ionicons, FontAwesome, FontAwesome5} from '@expo/vector-icons';

export enum IconType {
    Ionicons,
    FontAwesome,
    FontAwesome5
}

interface IconTextProps {
    iconType: IconType;
    iconName: any;
    iconSize: number;
    iconColor: string;
    bodyText: string;
    bodyTextStyle: any;
}

const IconText = (props: IconTextProps) => {
    let icon;
    switch (props.iconType) {
        case IconType.Ionicons:
            icon = <Ionicons name={props.iconName} size={props.iconSize} color={props.iconColor}/>;
            break;
        case IconType.FontAwesome:
            icon = <FontAwesome name={props.iconName} size={props.iconSize} color={props.iconColor}/>;
            break;
        case IconType.FontAwesome5:
            icon = <FontAwesome5 name={props.iconName} size={props.iconSize} color={props.iconColor}/>;
            break;
    }

    return (
        <View style={styles.container}>
            {icon}
            <Text style={[styles.iconText, props.bodyTextStyle]}>{props.bodyText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
    }, iconText: {
        marginLeft: 5
    }
});

export default IconText;