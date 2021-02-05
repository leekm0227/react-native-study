import React from "react";
import {Header, Left, Body, Right, Title, Button, Icon} from "native-base";


export default (props) => (
    <Header transparent>
        <Left>
            <Button transparent
                onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                <Icon name="menu" />
            </Button>
        </Left>
        <Body>
            <Title>{props.title}</Title>
        </Body>
        <Right>

        </Right>
    </Header>
)