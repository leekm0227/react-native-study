import React from "react";
import {useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Text} from 'react-native-elements'


export default () => {
    const navigation = useNavigation();
    const route = useRoute();
    console.log(route.params);

    return (
        <Text>test</Text>
    )
}