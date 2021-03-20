import React, {useState} from "react";
import {Alert, View} from 'react-native';
import {Button, Card, Text} from 'react-native-elements'
import icons from "~/components/icons";
import axios from "axios"
import {useDispatch, useSelector} from "react-redux";
import {useRoute} from "@react-navigation/native";
import globals from "~/globals"
import {userTicketDecrease} from "~/redux/action"


export default () => {
    const user = useSelector(store => store.user)
    const dispatch = useDispatch()
    const route = useRoute()
    let [isLoading, setIsLoading] = useState(false)
    let [vote, setVote] = useState(route.params)

    const voteItem = (voteId, itemId) => {
        if (isLoading) return
        if (user.ticket === 0) {
            Alert.alert("not enough ticket")
            return
        }

        let url = `${globals.API_URL}/votes/${voteId}/items/${itemId}`
        axios.post(url, {}, {headers: {Authorization: user.token}})
            .then(res => {
                setVote(res.data.data)
                setIsLoading(false)
                dispatch({type: userTicketDecrease, payload: 1})
                Alert.alert("success")
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <Card>
            <Card.Title>{vote.subject}</Card.Title>
            <Card.Divider/>
            <Text style={{marginBottom: 10, minHeight: 200}}>{vote.content}</Text>
            <Card.Divider/>
            {
                vote.voteItems.map((item) => {
                    return (
                        <View
                            key={item.itemId}
                            style={{
                                alignItems: 'center',
                                height: 30,
                                marginBottom: 10,
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                            <Text>{item.subject}</Text>
                            <View style={{
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <Text style={{marginRight: 10}}>{item.count}</Text>
                                <Button icon={icons("Add", "black", 10)}
                                        type="outline"
                                        onPress={() => voteItem(vote.voteId, item.itemId)}
                                />
                            </View>
                        </View>
                    )
                })
            }
        </Card>
    )
}