import React, {useLayoutEffect} from "react";
import {Button, Card, Text} from 'react-native-elements'
import {Alert, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import axios from "axios";
import globals from "~/globals"
import {userUpdate} from "~/redux/action"
import asyncStorage from "@react-native-community/async-storage";


export default () => {
    const user = useSelector(store => store.userReducer)
    const dispatch = useDispatch()
    const navigation = useNavigation();

    const logout = () => {
        Alert.alert(
            "logout",
            "logout?",
            [{text: "Cancel"}, {
                text: "Ok", onPress: () => {
                    axios.get(`/auth/logout`).then(res => {
                        asyncStorage.removeItem(globals.KEY_AUTH_TOKEN)
                        dispatch({type: userUpdate, payload: {}})
                        Alert.alert("success")
                    }).catch(() => Alert.alert("error"))
                }
            }]
        )
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button
                    style={{marginRight: 15}}
                    icon={globals.icon(user.token ? "Logout" : "Login")}
                    type="clear"
                    onPress={() => user.token ? logout() : navigation.navigate("login")}/>
            ),
        });
    }, [navigation, user]);

    return (
        <View style={{minHeight: 200}}>
            <Card>
                <Text h2 style={{marginBottom: 10}}>{!user.name ? "GUEST" : user.name}</Text>
                <Text style={{marginBottom: 10}}>{!user.email ? "" : user.email}</Text>
                <Text style={{marginBottom: 10}}>{!user.token ? "" : `TICKET : ${user.ticket}`}</Text>
            </Card>
        </View>
    )
}