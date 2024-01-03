import {COLORS} from "../styles/colors";
import {StyleSheet, TextInput, View} from "react-native";
import React from "react";
import {FontAwesome} from "@expo/vector-icons";

interface SearchBarProps {
    placeholder: string
    value: string
    onChangeValue: ((text: string) => void)
}

const SearchBar = (props: SearchBarProps) => {
    return (
        <View style={styles.wrapper}>
            <FontAwesome style={styles.searchIcon} name="search" size={24} color="black"/>
            <TextInput
                style={styles.input}
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={props.onChangeValue}
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.WHITE,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 12
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
        borderRadius: 12
    }
})