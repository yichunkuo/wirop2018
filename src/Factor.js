import React, { Component } from 'react';
import { WebView, Alert, StatusBar, TextInput } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Thumbnail, Content, Text, Form, Item, Label, Input, ListItem, List } from 'native-base';
import { StackNavigator } from 'react-navigation';

import styles from './styles';

export default class Factor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            CFactor: '0',
            FFactor: '0'
        };
    }

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
                    <Text style={{ alignSelf: 'center', fontSize: 18, marginTop: 20 }}>Choose either one of them</Text>

                    <Text style={{ alignSelf: 'center', fontSize: 20, marginTop: 70 }}>Cross-sectional factor</Text>
                    <TextInput placeholder={this.state.CFactor} keyboardType='numeric' textAlign={'center'}
                        onChangeText={(text) => this.getCFactor(text)} />

                    <Text style={{ alignSelf: 'center', fontSize: 20, marginTop: 50 }}>Or</Text>

                    <Text style={{ alignSelf: 'center', fontSize: 20, marginTop: 50 }}>Fill factor</Text>

                    <TextInput placeholder={this.state.FFactor} style={{ marginBottom: 30 }} keyboardType='numeric' textAlign={'center'}
                        onChangeText={(text) => this.FToCFactor(text)} />

                    <Button full rounded style={styles.HomePageBtnStyle}
                        onPress={() => {
                            this.props.navigation.state.params.onGoBack(this.state.CFactor);
                            this.props.navigation.goBack()
                        }}>
                        <Text>OK</Text>
                    </Button>
                </Content>
            </Container >

        );
    }

    getCFactor(num) {
        // Alert.alert(this.state.FFactor)
        this.setState({ FFactor: '100' });
        this.setState({ CFactor: '100' });
        // if (this.state.FFactor != 0) { Alert.alert("the other one nust be zero"); } else {
        //     this.setState({ CFactor: num });
        // }
    }
    FToCFactor(num) {
        // Alert.alert(num)
        var item = parseFloat(num)
        this.setState({ FFactor: '200' });
        this.setState({ CFactor: '200' });
        // this.setState({ FFactor: num, CFactor: (item * 0.7854).toString() });
        // if (this.state.CFactor != 0) { Alert.alert("the other one nust be zero"); } else {
        //     this.setState({ FFactor: num });
        //     num = num * 0.7854;
        //     this.setState({ CFactor: num });
        // }
    }
}