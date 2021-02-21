import React from "react";
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from "react-native";
import {Avatar, ListItem} from 'react-native-elements'


export default () => {
    const list = useSelector(store => store.messages);
    const navigation = useNavigation();

    const renderItem = (props) => {
        return(
            <ListItem bottomDivider onPress={() => navigation.navigate("detail")}>
                <Avatar rounded
                        source={{uri: props.item.imgUrl}}/>
                <ListItem.Content>
                    <ListItem.Title>{props.item.name}</ListItem.Title>
                    <ListItem.Subtitle>{props.item.content}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={list}
            renderItem={renderItem}
        />
    )
}