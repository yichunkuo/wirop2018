import React, { Component } from 'react';
import { WebView, Alert, StatusBar } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Thumbnail, Content, Text, Form, Item, Label, Input, Tab, Tabs } from 'native-base';
import { StackNavigator } from 'react-navigation';

import styles from './styles';

export default class Factors extends Component {
    constructor(props) {
        super(props);

        this.state = {
            CFactor: 0,
            FFactor: 0
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
                    <Tabs initialPage={1} style={styles.BGGray}>
                        <Tab heading="Cross-sectional factor" style={styles.BGGray}>
                            <Form>
                                <Item stackedLabel>
                                    <Label>keyin Cross-sectional factor</Label>
                                    <Input onChangeText={(text) => this.getCFactor(text)} />
                                </Item>
                            </Form>
                            <Button full rounded style={styles.HomePageBtnStyle}
                                onPress={() => {
                                    this.props.navigation.state.params.onGoBack(this.state.CFactor);
                                    this.props.navigation.goBack()
                                }}>
                                <Text>OK</Text>
                            </Button>
                        </Tab>
                        <Tab heading="Fill factor" style={styles.BGGray}>
                            <Form>
                                <Item stackedLabel last>
                                    <Label>keyin Fill factor</Label>
                                    <Input defaultValue={'0'} onChangeText={(text) => this.FToCFactor(text)} />
                                </Item>
                            </Form>
                            <Button full rounded style={styles.HomePageBtnStyle}
                                onPress={() => {
                                    this.props.navigation.state.params.onGoBack(this.state.CFactor);
                                    this.props.navigation.goBack()
                                }}>
                                <Text>OK</Text>
                            </Button>
                        </Tab>
                    </Tabs>
                    {/* 
                    <Text style={styles.ContactTextTitle}>換算公式</Text>
                    <Text style={styles.ContactTextTitle}>放圖</Text> */}
                </Content>
            </Container >

        );
    }

    getCFactor(num) {
        this.setState({ FFactor: 0, CFactor: num });
        // if (this.state.FFactor != 0) { Alert.alert("the other one nust be zero"); } else {
        //     this.setState({ CFactor: num });
        // }
    }
    FToCFactor(num) {
        this.setState({ FFactor: num, CFactor: num * 0.7854 });
        // if (this.state.CFactor != 0) { Alert.alert("the other one nust be zero"); } else {
        //     this.setState({ FFactor: num });
        //     num = num * 0.7854;
        //     this.setState({ CFactor: num });
        // }
    }
}