import Ionicons from "react-native-vector-icons/Ionicons";
import * as React from "react";


const icons = {
    Home: 'person-outline',
    Vote: 'clipboard-outline',
    Add: 'add-outline',
    Remove: 'remove-outline',
    Login: "log-in-outline",
    Logout: "log-out-outline",
};

export default {
    DEBUG: true,
    DEFAULT_SIZE: 5,
    DEFAULT_PAGE: 1,
    KEY_AUTH_TOKEN: '@auth:token',
    icon: (name, color = "black", size = 25) => (<Ionicons name={icons[name]} color={color} size={size}/>)
}