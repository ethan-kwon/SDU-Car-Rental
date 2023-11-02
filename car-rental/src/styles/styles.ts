import {StyleSheet} from "react-native";
import {COLORS} from "./colors";

const globalStyles = StyleSheet.create({
    boxShadow: {
        shadowColor: COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    }
});

export default globalStyles;