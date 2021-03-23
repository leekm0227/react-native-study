import React, {useState} from "react";
import {Button, Card, Input} from 'react-native-elements'
import {Alert, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import axios from "axios";
import globals from "~/globals"
import {userUpdate} from "~/redux/action"
import asyncStorage from "@react-native-community/async-storage";
import {useDispatch} from "react-redux";


export default () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [email, setEmail] = useState("")
    const [pwd, setPwd] = useState("")

    const login = () => {
        if (email.trim().length === 0) {
            Alert.alert("empty email")
            return
        }

        if (pwd.trim().length === 0) {
            Alert.alert("empty password")
            return
        }

        axios.post(`/auth/login`, {email: email, password: pwd}).then(res => {
            dispatch({type: userUpdate, payload: res.data})
            asyncStorage.setItem(globals.KEY_AUTH_TOKEN, res.data.token)
            navigation.navigate("home")
        }).catch(() => Alert.alert("error"))
    }

    return (
        <View style={{flex: 1, justifyContent: "space-between"}}>
            <Card>
                <Input label="EMAIL" textContentType="emailAddress" onChangeText={text => setEmail(text)}/>
                <Input label="PASSWORD" secureTextEntry={true} onChangeText={text => setPwd(text)}/>
                <Card.Divider/>
                <Button title="LOGIN" buttonStyle={{marginBottom: 15}} onPress={login}/>
                <Button title="JOIN" type="outline" onPress={() => navigation.navigate("join")}/>
            </Card>
        </View>
    )
}