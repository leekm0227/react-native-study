import React from "react";
import {Container, Content, Button, Text} from "native-base";
import DrawerHeader from "~/components/drawerHeader";
import TabFooter from "~/components/tabFooter";
import {Actions} from "react-native-router-flux";


export default () => (
    <Container>
        <DrawerHeader title="home" />
        <Content>
            <Button onPress={Actions.detail()}>
                <Text>go Detail</Text>
            </Button>
        </Content>
        <TabFooter />
    </Container>
);