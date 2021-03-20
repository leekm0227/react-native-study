import React, {useEffect, useLayoutEffect, useState} from "react";
import {useNavigation} from '@react-navigation/native';
import {FlatList, RefreshControl, TouchableOpacity} from 'react-native';
import {Button, Card, Text} from 'react-native-elements'
import icons from "~/components/icons";
import axios from "axios"
import globals from "~/globals";


export default () => {
    const size = globals.DEFAULT_SIZE
    let refresh = false
    let [isLoading, setIsLoading] = useState(false)
    let [votes, setVotes] = useState([])
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button
                    icon={icons("Add")}
                    type="clear"
                    onPress={() => navigation.navigate("add")}/>
            ),
        });
    }, [navigation]);

    useEffect(() => {
        fetch()
    }, [])

    const fetch = () => {
        if (isLoading) return

        let page = refresh ? 1 : votes.length / size + 1
        let url = `${globals.API_URL}/votes?size=${size}&page=${page}`
        axios.get(url)
            .then(res => {
                if (res.data.data != null) {
                    setVotes(state => refresh ? res.data.data : state.concat(res.data.data))
                    setIsLoading(false)
                    refresh = false
                }
            })
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