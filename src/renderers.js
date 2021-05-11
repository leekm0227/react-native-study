import React from "react";
import {StatusBar, StyleSheet, Text, View, Dimensions} from "react-native";
import {GameEngine} from "react-native-game-engine";
import {System} from "./system";
import {useSelector} from "react-redux";

const {width: WIDTH, height: HEIGHT} = Dimensions.get("window");
const PADDING = 10
const STATUS_HEIGHT = (PADDING * 2) + 20
const ROWS = 7
const COLS = 7
const SIZE = (WIDTH - (PADDING * 2)) / COLS
const BOARD_TOP_OFFSET = PADDING

const Status = () => {
    const status = useSelector(store => store.statusReducer)

    return (
        <View style={styles.status}>
            <Text>GOLD : {status.gold}</Text>
            <Text>FOOD : {status.food}</Text>
        </View>
    )
}

const Block = (props) => {
    const x = props.position[0] - SIZE;
    const y = props.position[1] - SIZE + BOARD_TOP_OFFSET;

    return (
        <View style={[styles.block, {left: x, top: y}]}/>
    )
}

const Player = (props) => {
    const x = props.position[0] - SIZE;
    const y = props.position[1] - SIZE + BOARD_TOP_OFFSET;

    return (
        <View style={[styles.player, {left: x, top: y}]}/>
    )
}

// position: left, top
const Board = () => {
    const player = {position: [SIZE * 5, SIZE * 5], renderer: Player}
    const blocks = new Array(ROWS * COLS).fill({});
    const setEntities = (blocks) => {
        let entities = {}
        entities.player = player;
        blocks.map((block, id) => {
            let row = Math.floor(id / COLS) + 1
            let col = id % COLS + 1
            entities[id] = {position: [SIZE * col, SIZE * row], renderer: Block}
        })

        return entities
    }

    return (
        <GameEngine
            style={styles.container}
            systems={[System]}
            entities={setEntities(blocks)}>
            <StatusBar hidden={true}/>
        </GameEngine>
    )
}

const Puzzle = () => {
    return (
        <GameEngine
            style={styles.container}
            systems={[System]}
            entities={{}}>
            <StatusBar hidden={true}/>
        </GameEngine>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: PADDING,
        flex: 1,
        backgroundColor: "white"
    },
    status: {
        height: STATUS_HEIGHT,
        padding: PADDING,
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: "#aeabab"
    },
    block: {
        width: SIZE,
        height: SIZE,
        borderColor: "white",
        borderWidth: 3,
        backgroundColor: "pink",
        position: "absolute"
    },
    player: {
        width: SIZE,
        height: SIZE,
        borderColor: "white",
        borderWidth: 5,
        backgroundColor: "black",
        position: "absolute"
    }
});

export {Status, Board, Puzzle};