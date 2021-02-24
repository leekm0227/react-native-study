import React, {useState, useEffect, useLayoutEffect} from "react";
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {FlatList, View} from 'react-native';
import {Calendar} from "react-native-calendars";
import {Button, CheckBox, ListItem} from 'react-native-elements'
import icons from "~/components/icons";


export default () => {
    const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
    const todoList = useSelector(store => store.todos);
    const navigation = useNavigation();
    const [selected, setSelected] = useState(today);
    const [todos, setTodos] = useState([]);
    const [marked, setMarked] = useState({});

    useEffect(()=>{
        let marked = {};
        Object.entries(todoList).map(([key, value]) => {
            marked[key] = {
                selected: key === today,
                marked: value.size !== 0,
                dotColor: 'green',
            }
        });

        setMarked(marked);
    }, [todos])

    useEffect(() => {
        setTodos(todoList[selected]);
    }, [selected]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button
                    icon={icons("Add")}
                    type="clear"
                    onPress={() => navigation.navigate("add", today)}/>
            ),
        });
    }, [navigation]);

    const renderItem = (props) => {
        return (
            <ListItem bottomDivider>
                <CheckBox checked={props.item.isComplete}
                          onPress={() => setTodos(todos.map(todo => todo.id === props.item.id ? {
                              ...todo,
                              isComplete: !todo.isComplete
                          } : todo))}/>
                <ListItem.Content>
                    <ListItem.Title
                        style={props.item.isComplete ? {textDecorationLine: 'line-through'} : {}}>{props.item.subject}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <View>
            <Calendar
                markedDates={marked}
                onDayPress={(date) => setSelected(date.dateString)}
                monthFormat={'yyyy MM'}
                enableSwipeMonths={true}
            />
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={todos}
                renderItem={renderItem}
            />
        </View>
    )
}