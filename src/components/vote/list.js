import React, {useEffect, useLayoutEffect, useState} from "react";
import {useNavigation} from '@react-navigation/native';
import {Alert, FlatList, View} from 'react-native';
import {Button, Card, Text} from 'react-native-elements'
import icons from "~/components/icons";
import axios from "axios"
import {useSelector} from "react-redux";


export default () => {
    const user = useSelector(store => store.user)
    let [page, setPage] = useState(1)
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

        let url = "http://140.238.3.159:8080/votes?size=5&page=" + page;
        axios.get(url)
            .then(res => {
                if (res.data.data != null) {
                    setVotes(state => state.concat(res.data.data))
                    setPage(state => state + 1)
                    setIsLoading(false)
                }
            })
    }

    const voteItem = (voteId, itemId) => {
        if (isLoading) return

        let url = `http://140.238.3.159:8080/votes/${voteId}/items/${itemId}`
        axios.post(url, {}, {headers: {Authorization: user.token}})
            .then(res => {
                let data = res.data.data
                setVotes(state => state.map((vote) => vote.voteId === voteId ? data : vote))
                setIsLoading(false)
                Alert.alert("success")
            })
            .catch(err => {
                console.log(err)
            })
    }

    const renderItem = (props) => {
        let vote = props.item

        return (
            <Card>
                <Card.Title>{vote.subject}</Card.Title>
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
                                    <Button icon={icons("Add", "black", 10)} type="outline"
                                            onPress={() => voteItem(vote.voteId, item.itemId)}/>
                                </View>
                            </View>
                        )
                    })
                }
            </Card>
        )
    }

    return (
        <FlatList
            keyExtractor={(vote) => vote.voteId}
            data={votes}
            renderItem={renderItem}
            onEndReachedThreshold={0.2}
            onEndReached={fetch}
        />
    )
}