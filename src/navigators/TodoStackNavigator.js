import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {add, detail, list} from "~/screens/todo";

const Stack = createStackNavigator();
export default () => (
    <Stack.Navigator>
        <Stack.Screen name="list" component={list} options={() => ({title:"TODO LIST"})}/>
        <Stack.Screen name="detail" component={detail} options={() => ({title:"TODO"})}/>
        <Stack.Screen name="add" component={add} options={() => ({title:"ADD"})}/>
    </Stack.Navigator>
)