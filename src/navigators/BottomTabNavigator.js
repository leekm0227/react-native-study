import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TodoStackNavigator from "~/navigators/TodoStackNavigator";
import ChatStackNavigator from "~/navigators/ChatStackNavigator";
import icons from "~/components/icons";
import home from "~/screens/home";
import social from "~/screens/social";

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
        <Tab.Screen name="Todo" component={TodoStackNavigator}/>
        <Tab.Screen name="Social" component={social}/>
        <Tab.Screen name="Chat" component={ChatStackNavigator}/>
        <Tab.Screen name="Home" component={home}/>
    </Tab.Navigator>
)