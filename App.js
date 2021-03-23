import React from "react";
import {Provider} from "react-redux";
import {store} from "~/redux";
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '~/navigators/RootNavigation'
import BottomTabNavigator from '~/navigators/BottomTabNavigator'


export default () => {
    return (
        <Provider store={store}>
            <NavigationContainer ref={navigationRef}>
                <BottomTabNavigator/>
            </NavigationContainer>
        </Provider>
    )
}