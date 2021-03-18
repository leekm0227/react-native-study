import React, {useState} from "react";
import {useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Text} from 'react-native-elements'
import {Calendar, WeekCalendar} from "react-native-calendars";


export default () => {
    const navigation = useNavigation();
    const selected = useRoute().params;

    return (
        <Text>test</Text>
    )
}