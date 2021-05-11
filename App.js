import React from "react";
import {Provider} from "react-redux";
import {SafeAreaView} from "react-native"
import {store} from "./src/redux"
import Game from "./src/game"

export default () => (
    <Provider store={store}>
        <SafeAreaView style={{flex: 1}}>
            <Game/>
        </SafeAreaView>
    </Provider>
)


