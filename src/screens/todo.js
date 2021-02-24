import React, {useLayoutEffect} from "react";
import List from "~/components/todo/list"
import Add from "~/components/todo/add"
import Detail from "~/components/todo/detail"


export const list = ({navigation}) => (<List/>);
export const detail = ({navigation}) => (<Detail/>);
export const add = ({navigation}) => (<Add/>);