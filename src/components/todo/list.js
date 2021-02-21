import React, {useState} from "react";
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {FlatList, View} from 'react-native';
import {Calendar} from "react-native-calendars";
import {ListItem} from 'react-native-elements'


export default () => {
    const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
    const list = useSelector(store => store.todos);
    const [todos, setTodos] = useState(list[today]);
    const [marked, setMarked] = useState({[today]: {selected: true}});
    const navigation = useNavigation();

    const changeDay = (date) => {
        setMarked({[date.dateString]: {selected: true}})
        setTodos(list[date.dateString])
    }

    const renderItem = (props) => {
        return (
            <ListItem bottomDivider onPress={() => navigation.navigate("detail")}>
                <ListItem.Content>
                    <ListItem.Title>{props.item.name}</ListItem.Title>
                    <ListItem.Subtitle>{props.item.content}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <View>
            <Calendar
                markedDates={marked}
                onDayPress={(date) => changeDay(date)}
                monthFormat={'yyyy MM'}
                // firstDay={1}
                enableSwipeMonths={true}/>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={todos}
                renderItem={renderItem}/>
        </View>
    )
}