import React from "react";
import {StatusBar, StyleSheet, Text, View, Dimensions} from "react-native";
import {GameEngine} from "react-native-game-engine";
import Matter from "matter-js";
import {System} from "./system";
import {useSelector} from "react-redux";

const {width: WIDTH, height: HEIGHT} = Dimensions.get("window");
const PADDING = 10
const STATUS_HEIGHT = (PADDING * 2) + 20
const ROWS = 7
const COLS = 7
const SIZE = (WIDTH - (PADDING * 2)) / COLS

let engine = Matter.Engine.create({enableSleeping: false});
let world = engine.world;
world.gravity.y = 0.0;

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
    const width = props.body.bounds.max.x - props.body.bounds.min.x;
    const height = props.body.bounds.max.y - props.body.bounds.min.y;
    const x = props.body.position.x - width;
    const y = props.body.position.y - height;

    return (
        <View style={{
            width: width,
            height: height,
            left: x,
            top: y,
            borderColor: "white",
            borderWidth: 1,
            backgroundColor: "gray",
            position: "absolute"
        }}/>
    )
}

// position: left, top
const Board = () => {
    // const player = {position: [SIZE * 5, SIZE * 5], renderer: Player}
    const blocks = new Array(ROWS * COLS).fill({});
    const setEntities = (blocks) => {
        let entities = {}
        blocks.map((block, id) => {
            let row = Math.floor(id / COLS) + 1
            let col = id % COLS + 1
            blocks[id] = Matter.Bodies.rectangle(SIZE * col, SIZE * row, SIZE, SIZE)
            entities[id] = {body: blocks[id], renderer: Block}
        })

        entities.physics = {engine: engine, world: world}
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