import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {detail, list} from "~/screens/chat";


const Stack = createStackNavigator();
export default () => (
    <Stack.Navigator>
        <Stack.Screen name="list" component={list} options={() => ({title:"CHAT LIST"})}/>
        <Stack.Screen name="detail" component={detail} options={() => ({title:"CHAT"})}/>
    </Stack.Navigator>
)