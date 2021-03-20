import React, {useState} from "react";
import {Button, Card, Input} from 'react-native-elements'
import {Alert, View} from "react-native";
import axios from "axios";
import globals from "~/globals"
import {useNavigation} from "@react-navigation/native";


export default () => {
    const [join, setJoin] = useState({})
    const navigation = useNavigation();


    const submit = () => {
        if (join.email.trim().length === 0) {
            Alert.alert("empty email")
            return
        }

        if (join.name.trim().length === 0) {
            Alert.alert("empty name")
            return
        }

        if (join.password.trim().length === 0) {
            Alert.alert("empty password")
            return
        }

        if (join.passwordCheck.trim().length === 0) {
            Alert.alert("empty password check")
            return
        }

        if (join.password !== join.passwordCheck) {
            Alert.alert("not match password")
            return
        }

        Alert.alert(
            "submit",
            "submit?",
            [{text: "Cancel"}, {
                text: "Ok", onPress: () => {
                    let url = `${globals.API_URL}/auth/join`
                    axios.post(url, join)
                        .then(res => {
                            Alert.alert("success")
                            navigation.goBack()
                        })
                        .catch(err => {
                            console.log(err)
                        })
                }
            }]
        )
    }

    return (
        <View style={{flex: 1, justifyContent: "space-between"}}>
            <Card>
                <Input label="EMAIL" onChangeText={text => setJoin(state => ({...state, email: text}))}/>
                <Input label="NAME" onChangeText={text => setJoin(state => ({...state, name: text}))}/>
                <Input label="PASSWORD" onChangeText={text => setJoin(state => ({...state, password: text}))}
                       secureTextEntry={true}/>
                <Input label="PASSWORD CHECK" onChangeText={text => setJoin(state => ({...state, passwordCheck: text}))}
                       secureTextEntry={true}/>
                <Card.Divider/>
                <Button title="SUBMIT" onPress={submit}/>
            </Card>
        </View>
    )
}