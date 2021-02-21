import * as React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';


const icons = {
    Home: 'home-outline',
    Chat: 'chatbubbles-outline',
    Todo: 'clipboard-outline',
    Social: 'happpy-outline',
    Add: 'add-outline'
};

export default (name, color = "black", size = 25) => {
    return (<Ionicons name={icons[name]} color={color} size={size}/>)
}