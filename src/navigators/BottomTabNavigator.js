import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VoteStackNavigator from "~/navigators/VoteStackNavigator";
import HomeStackNavigator from "~/navigators/HomeStackNavigator";
import axios from "axios";
import asyncStorage from "@react-native-community/async-storage";
import globals from "~/globals"
import {userUpdate} from "~/redux/action"
import {useDispatch} from "react-redux";


export default () => {
    const Tab = createBottomTabNavigator();
    const dispatch = useDispatch()

    // axios setting
    axios.defaults.baseURL = globals.BASE_URL
    axios.interceptors.response.use((res) => res.data, (err) => {
        console.log(err)
        return Promise.reject(err)
    })

    // valid token
    asyncStorage.getItem(globals.KEY_AUTH_TOKEN).then((token) => {
        if (!token) return
        axios.get(`/auth/info`, {headers: {Authorization: token}}).then(res => {
            dispatch({type: userUpdate, payload: res.data})
            axios.defaults.headers.common['Authorization'] = token
        }).catch(() => console.log("invalid token"))
    })

    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({color, size}) => (globals.icon(route.name, color, size))
            })}
            tabBarOptions={{
                activeTintColor: 'black',
                inactiveTintColor: 'gray',
                style: {
                    backgroundColor: 'white',
                }
            }}
        >
            <Tab.Screen name="Home" component={HomeStackNavigator}/>
            <Tab.Screen name="Vote" component={VoteStackNavigator}/>
        </Tab.Navigator>
    )
}