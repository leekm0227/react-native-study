import React from "react";
import {Dimensions, StyleSheet, Text, View} from "react-native";

const {width, height} = Dimensions.get('window');
const RADIUS = 20;
const PADDING = 20;

const TileMap = (props) => {
    const col = [1,2,3,4,5]
    const row = [1,2,3,4,5]

    return (
        <View style={styles.tileMap}>
            {
                row.map((key) => <View key={key} style={styles.row}>
                    {
                        col.map((key) =>
                            <View key={key} style={styles.tile}>
                                <Text>{key}</Text>
                            </View>)
                    }
                </View>)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    tileMap: {
        flex: 3,
        padding: PADDING,
        justifyContent: "space-between",
        borderWidth: 1
    },
    row: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    tile: {
        borderColor: "#CCC",
        // borderWidth: 4,
        // borderRadius: RADIUS * 2,
        // width: RADIUS * 2,
        // height: RADIUS * 2,
        backgroundColor: "pink",
    }
});

export {TileMap};