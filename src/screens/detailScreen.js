import React from "react";
import {Container, Content, Button, Text} from "native-base";
import DrawerHeader from "~/components/drawerHeader";
import TabFooter from "~/components/tabFooter";
import { Actions } from 'react-native-router-flux';


export default () => (
    <Container>
        <DrawerHeader title="detail" />
        <Content>
            <Button onPress={Actions.home()}>
                <Text>go Back</Text>
            </Button>
        </Content>
        <TabFooter />
    </Container>
);