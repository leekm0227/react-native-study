import React from "react";
import {View} from "react-native";
import {Header} from "./components/header"
import {TileMap} from "./components/tileMap";

const Board = () => {
    return (
        <View style={{flex: 1}}>
            <Header/>
            <TileMap/>
        </View>
    )
}

export {Board};