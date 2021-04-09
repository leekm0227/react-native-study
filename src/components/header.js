import React from "react";
import {StyleSheet, Text, View} from "react-native";

const PADDING = 20;

const Header = () => {
    return (
        <View style={styles.header}>
            <Text>header</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        flex: 1,
        padding: PADDING,
        justifyContent: "space-between",
        borderWidth: 1
    }
})

export {Header}