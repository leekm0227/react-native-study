import React from "react";
import {Button, Icon, Footer, FooterTab, Text} from "native-base";
import {Actions} from "react-native-router-flux";


export default (props) => (
    <Footer>
        <FooterTab>
            <Button active vertical onPress={() =>{Actions.home();}}>
                <Icon name="apps" />
                <Text>Home</Text>
            </Button>
            <Button vertical onPress={() =>{Actions.search();}}>
                <Icon name="search" />
                <Text>Search</Text>
            </Button>
            <Button vertical>
                <Icon active name="navigate" />
                <Text>Navigate</Text>
            </Button>
            <Button vertical>
                <Icon name="person" />
                <Text>Contact</Text>
            </Button>
        </FooterTab>
    </Footer>
)