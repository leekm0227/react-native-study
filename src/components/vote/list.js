import React, {useEffect, useLayoutEffect, useState} from "react";
import {useNavigation} from '@react-navigation/native';
import {Alert, FlatList, TouchableOpacity} from 'react-native';
import {Button, Card, Text} from 'react-native-elements'
import axios from "axios"
import globals from "~/globals";
import {useSelector} from "react-redux";


export default () => {
    const user = useSelector(store => store.userReducer)
    const size = globals.DEFAULT_SIZE
    let refresh = false
    let [isLoading, setIsLoading] = useState(false)
    let [votes, setVotes] = useState([])
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button
                    icon={globals.icon("Add")}
                    type="clear"
                    onPress={() => {
                        if(!user.token){
                            Alert.alert("need login");
                            return
                        }

                        navigation.navigate("add")
                    }}/>
            ),
        });
    }, [navigation]);

    useEffect(() => {
        fetch()
    }, [])

    const fetch = () => {
        if (isLoading) return

        let page = refresh ? 1 : votes.length / size + 1
        axios.get(`/votes?size=${size}&page=${page}`).then(res => {
            if (res.data != null) {
                setVotes(state => refresh ? res.data : state.concat(res.data))
                setIsLoading(false)
                refresh = false
            }
        }).catch(() => Alert.alert("error"))
    }

    const renderItem = (props) => {
        let vote = props.item

        return (
            <TouchableOpacity onPress={() => navigation.navigate("detail", vote)}>
                <Card containerStyle={{minHeight: 200}}>
                    <Card.Title>{vote.subject}</Card.Title>
                    <Card.Divider/>
                    <Text style={{marginBottom: 10}}>{vote.content}</Text>
                </Card>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            keyExtractor={vote => vote.voteId}
            data={votes}
            renderItem={renderItem}
            onEndReachedThreshold={0.1}
            onEndReached={fetch}
            refreshing={refresh}
            onRefresh={() => {
                refresh = true
                fetch()
            }}
        />
    )
}