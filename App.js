import React from "react";
import {Provider} from "react-redux";
import {home, search, detail} from "~/screens"
import {store} from "~/redux";
import { Router, Scene } from 'react-native-router-flux';



export default () => (
    <Provider store={store}>
        <Router hideNavBar= "true">
            <Scene key="root">
                <Scene key="home" component={home} initial={true} />
                <Scene key="detail" component={detail} title="Detail" />
                <Scene key="search" component={search} title="Search" />
            </Scene>
        </Router>
    </Provider>
);