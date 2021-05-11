import {StyleSheet, View} from "react-native";
import React from "react";
import {Status, Board, Puzzle} from "./renderers";
import {AdMobBanner} from "expo-ads-admob";

const BANNER_ID = `ca-app-pub-1425926517331745/4139536433`;

export default () => (
    <View style={styles.container}>
        <Status/>
        <Board/>
        <AdMobBanner
            // bannerSize="smartBannerLandscape"
            adUnitID={BANNER_ID}
            onDidFailToReceiveAdWithError={this.bannerError}
        />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#d6d6d6"
    }
})