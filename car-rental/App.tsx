import React, {useCallback} from "react";
import {StyleSheet, View} from 'react-native';
import RootNavigator from "./src/navigation/RootNavigator";
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded, fontError] = useFonts({
        "roboto-regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
        "roboto-medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
        "roboto-bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf")
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <RootNavigator/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red"
    },
});
