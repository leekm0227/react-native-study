import React from "react";
import List from "~/components/vote/list"
import Add from "~/components/vote/add"
import Detail from "~/components/vote/detail"


export const list = ({navigation}) => (<List/>);
export const detail = ({navigation}) => (<Detail/>);
export const add = ({navigation}) => (<Add/>);