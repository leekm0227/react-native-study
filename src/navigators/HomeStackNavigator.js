import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {home, join, login} from "~/screens/home";

const Stack = createStackNavigator();
export default () => (
    <Stack.Navigator>
        <Stack.Screen name="home" component={home} options={() => ({title: "HOME"})}/>
        <Stack.Screen name="join" component={join} options={() => ({title: "JOIN"})}/>
        <Stack.Screen name="login" component={login} options={() => ({title: "LOGIN"})}/>
    </Stack.Navigator>
)