import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VoteStackNavigator from "~/navigators/VoteStackNavigator";
import HomeStackNavigator from "~/navigators/HomeStackNavigator";
import icons from "~/components/icons";

const Tab = createBottomTabNavigator();
export default () => (
    <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({color, size}) => (icons(route.name, color, size))
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