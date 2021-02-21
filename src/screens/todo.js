import React, {useLayoutEffect} from "react";
import {Button} from "react-native-elements"
import List from "~/components/todo/list"
import Add from "~/components/todo/add"
import Detail from "~/components/todo/detail"
import icons from "~/components/icons";


export const list = ({navigation}) => {
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

    return(
        <List/>
    )
}

export const detail = ({navigation}) => (
    <Detail/>
);

export const add = ({navigation}) => (
    <Add/>
);