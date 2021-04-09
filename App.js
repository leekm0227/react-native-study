import React from "react";
import {StyleSheet, StatusBar} from "react-native";
import {GameEngine} from "react-native-game-engine"
import {MoveFinger} from "./src/system";
import {Board} from "./src/renderers";

export default () => (
    <GameEngine
        style={styles.container}
        systems={[MoveFinger]}
        entities={{
            1: {renderer: <Board/>},
        }}>
        <StatusBar hidden={true}/>
    </GameEngine>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    }
});