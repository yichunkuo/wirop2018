import React, { Component } from 'react';
import { WebView } from 'react-native';
import { StatusBar } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Thumbnail, Content, Text } from 'native-base';
import { StackNavigator } from 'react-navigation';

import styles from './styles';

export default class Contact extends Component {
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
                <Content>
                    <Text style={styles.ContactTextTitle}>Contact US</Text>
                    <Button full rounded style={styles.HomePageBtnStyle} onPress={() => this.props.navigation.navigate('About')}>
                        <Text>Leave a Message</Text>
                    </Button>
                    <Text style={styles.PageTitle}>or</Text>
                    <Text style={styles.ContactTextTitle}>E-mail</Text>
                    <Text style={styles.ContactTextStyle}>wirop@wirop.com.tw</Text>
                    <Text style={styles.ContactTextTitle}>Phone</Text>
                    <Text style={styles.ContactTextStyle}>886-7-7019369</Text>
                    <Text style={styles.ContactTextTitle}>Fax</Text>
                    <Text style={styles.ContactTextStyle}>886-7-7019623</Text>
                    <Text style={styles.ContactTextTitle}>Address</Text>
                    <Text style={styles.ContactTextStyle}> 806 Fengping 1ST Road</Text>
                    <Text style={styles.ContactTextStyle}> Daliao Districe</Text>
                    <Text style={styles.ContactTextStyle}> Kaohsiung 83141</Text>
                    <Text style={styles.ContactTextStyle}> Taiwan</Text>
                </Content>
            </Container >

        );
    }
}