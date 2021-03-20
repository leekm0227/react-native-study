import React, {useState} from "react";
import {Button, Card, Input, Text} from 'react-native-elements'
import icons from "~/components/icons";
import {Alert, View} from "react-native";
import axios from "axios";
import globals from "~/globals"
import {useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";


export default () => {
    const user = useSelector(store => store.user)
    const navigation = useNavigation();
    let [vote, setVote] = useState({})
    let [voteItems, setVoteItems] = useState([])
    let [item, setItem] = useState("")

    const addItem = () => {
        if (item.trim().length === 0) {
            Alert.alert("empty item text");
            return
        }

        setVoteItems(state => [...state, {subject: item}])
        setItem("")
    }

    const removeItem = (index) => {
        setVoteItems(state => state.filter((item, i) => i !== index))
    }

    const confirm = () => {
        if (vote.subject.trim().length === 0) {
            Alert.alert("empty subject")
            return
        }

        if (vote.content.trim().length === 0) {
            Alert.alert("empty content")
            return
        }

        if (voteItems.length < 2) {
            Alert.alert("plz add item")
            return
        }

        Alert.alert(
            "submit",
            "submit?",
            [{text: "Cancel"}, {text: "Ok", onPress: submit}]
        )
    }

    const submit = () => {
        let url = `${globals.API_URL}/votes`
        axios.post(url, {...vote, voteItems: voteItems}, {headers: {Authorization: user.token}})
            .then(res => {
                Alert.alert("success")
                navigation.goBack()
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <View style={{flex: 1, justifyContent: "space-between"}}>
            <Card>
                <Input label="SUBJECT" onChangeText={(text) => {
                    setVote({...vote, subject: text})
                }}/>
                <Card.Divider/>
                <Input style={{minHeight: 100}}
                       label="CONTENT"
                       multiline={true}
                       numberOfLines={4}
                       onChangeText={(text) => setVote({...vote, content: text})}
                />
                <Card.Divider/>
                <Input label="ADD ITEM"
                       value={item}
                       onChangeText={(text) => setItem(text)}
                />
                <Button
                    style={{marginBottom: 20}}
                    icon={icons("Add", "white")}
                    type="solid"
                    onPress={addItem}
                />
                <Card.Divider/>
                {
                    voteItems.map((item, index) => {
                        return (
                            <View
                                key={index}
                                style={{
                                    alignItems: 'center',
                                    height: 30,
                                    marginBottom: 10,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}>
                                <Text>{item.subject}</Text>
                                <Button
                                    icon={icons("Remove", "black", 10)}
                                    type="outline"
                                    onPress={() => removeItem(index)}
                                />
                            </View>
                        )
                    })
                }
            </Card>
            <Button title="SUBMIT" onPress={confirm}/>
        </View>
    )
}