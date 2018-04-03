
import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import {
    Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Button, Icon,
    Title, Right, Left
} from 'native-base';

import styles from './styles';

export default class LeftPage extends Component {
    render() {
        return (

            <Container style={styles.BGGray}>
                <StatusBar translucent={false} hidden={true} />
                <Header style={styles.BGYellow}>
                    <Left></Left>
                    <Body>
                        <Thumbnail square source={require('./img/wirop.png')} style={{ width: 200, height: 35, resizeMode: "contain" }} />
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='md-close' />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <List>
                        <ListItem style={styles.ListItemStyle} onPress={() => this.props.navigation.navigate('Contact')}>
                            <Text>Contact us </Text>
                        </ListItem>
                        <ListItem style={styles.ListItemStyle} onPress={() => this.props.navigation.navigate('About')}>
                            <Text>About Wirop</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container >
        );
    }
}
