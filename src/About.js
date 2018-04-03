import React, { Component } from 'react';
import { WebView } from 'react-native';
import { StatusBar } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Thumbnail } from 'native-base';
import { StackNavigator } from 'react-navigation';

import styles from './styles';
export default class About extends Component {
    render() {
        return (
            <Container style={styles.BGGray}>
                <StatusBar translucent={false} hidden={true} />
                <Header style={styles.BGYellow}>
                    <Left></Left>
                    <Body>
                        <Thumbnail square source={require('./img/wirop.png')} style={{ marginLeft: 15, width: 200, height: 35, resizeMode: "contain" }} />
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='md-close' />
                        </Button>
                    </Right>
                </Header>
                <WebView
                    source={{ uri: 'http://www.wirop.com.tw/files/about.html' }}
                    style={{ marginTop: 20 }}
                />
            </Container >

        );
    }
}