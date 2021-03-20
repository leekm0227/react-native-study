import * as React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';


const icons = {
    Home: 'person-outline',
    Vote: 'clipboard-outline',
    Add: 'add-outline',
    Remove: 'remove-outline',
    Login: "log-in-outline",
    Logout: "log-out-outline",
};

export default (name, color = "black", size = 25) => {
    return (<Ionicons name={icons[name]} color={color} size={size}/>)
}