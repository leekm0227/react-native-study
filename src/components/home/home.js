import React, {useEffect, useLayoutEffect} from "react";
import {Button, Card, Text} from 'react-native-elements'
import {Alert, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import axios from "axios";
import globals from "~/globals"
import {userUpdate} from "~/redux/action"
import asyncStorage from "@react-native-community/async-storage";
import icons from "~/components/icons";


export default () => {
    const user = useSelector(store => store.user)
    const dispatch = useDispatch()
    const navigation = useNavigation();

    useEffect(() => {
        getInfo()
    }, [])

    const getInfo = () => {
        asyncStorage.getItem(globals.KEY_AUTH_TOKEN).then((token) => {
            if (token) {
                let url = `${globals.API_URL}/auth/info`
                axios.get(url, {headers: {Authorization: token}}).then(res => {
                    dispatch({type: userUpdate, payload: res.data.data})
                }).catch(err => {
                    console.log(err)
                })
            }
        })
    }

    const logout = () => {
        Alert.alert(
            "logout",
            "logout?",
            [{text: "Cancel"}, {
                text: "Ok", onPress: () => {
                    let url = `${globals.API_URL}/auth/logout`
                    axios.get(url, {headers: {Authorization: user.token}}).then(res => {
                        asyncStorage.removeItem(globals.KEY_AUTH_TOKEN)
                        dispatch({type: userUpdate, payload: {}})
                    })
                }
            }]
        )
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button
                    style={{marginRight: 15}}
                    icon={icons(user.token ? "Logout" : "Login")}
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