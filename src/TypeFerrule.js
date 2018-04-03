
import React, { Component } from 'react';
import { Platform, StyleSheet, View, StatusBar, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Button, Icon, Title, Right, Left } from 'native-base';

import styles from './styles';
import { storage } from './storage/index';

export default class TypeFerrule extends Component {

    render() {
        return (
            <Container style={styles.BGGray}>
                <StatusBar translucent={false} hidden={true} />
                <Header style={styles.BGYellow}>
                    <Left>

                    </Left>
                    <Body>
                        <Thumbnail square source={require('./img/wirop.png')} style={{ marginLeft: 15, width: 200, height: 35, resizeMode: "contain" }} />
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='md-close' />
                        </Button>
                    </Right>
                </Header>
                <ScrollView style={stylesGrid.scrollContainer}>
                    <Text style={styles.PageTitle}>Select Ferrule type</Text>
                    <View style={stylesGrid.sectionContainer}>
                        <TouchableOpacity style={stylesGrid.boxContainer} onPress={() => {
                            this.props.navigation.state.params.onGoBack("1");
                            this.props.navigation.goBack();
                        }}>
                            <Thumbnail square source={require('./img/w901.png')} style={styles.TypeFerruleImgStyle} />
                            <Text>W901</Text>
                            <Text>EN 13411-3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={stylesGrid.boxContainer} onPress={() => {
                            this.props.navigation.state.params.onGoBack("2");
                            this.props.navigation.goBack();
                        }}>
                            <Thumbnail square source={require('./img/w901c.png')} style={styles.TypeFerruleImgStyle} />
                            <Text>W901C</Text>
                            <Text>EN 13411-3</Text>
                            <Text>From C</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={stylesGrid.boxContainer} onPress={() => {
                            this.props.navigation.state.params.onGoBack("3");
                            this.props.navigation.goBack();
                        }}>
                            <Thumbnail square source={require('./img/w901cHole.png')} style={styles.TypeFerruleImgStyle} />
                            <Text>W901C</Text>
                            <Text>EN 13411-3</Text>
                            <Text>From C With Hole</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={stylesGrid.boxContainer} onPress={() => {
                            this.props.navigation.state.params.onGoBack("4");
                            this.props.navigation.goBack();
                        }}>
                            <Thumbnail square source={require('./img/w902.png')} style={styles.TypeFerruleImgStyle} />
                            <Text>W902</Text>
                            <Text>Flemish Eye</Text>
                            <Text>Steel</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={stylesGrid.boxContainer} onPress={() => {
                            this.props.navigation.state.params.onGoBack("5");
                            this.props.navigation.goBack();
                        }}>
                            <Thumbnail square source={require('./img/w903.png')} style={styles.TypeFerruleImgStyle} />
                            <Text>W903</Text>
                            <Text>Duplex Oval</Text>
                            <Text>Steel</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={stylesGrid.boxContainer} onPress={() => {
                            this.props.navigation.state.params.onGoBack("6");
                            this.props.navigation.goBack();
                        }}>
                            <Thumbnail square source={require('./img/w905.png')} style={styles.TypeFerruleImgStyle} />
                            <Text>W905</Text>
                            <Text>Copper</Text>
                            <Text>Ferrules</Text>

                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Container>
        );
    }
}

const rows = 3;
const cols = 2;
const marginHorizontal = 4;
const marginVertical = 4;
const width = (Dimensions.get('window').width / cols) - (marginHorizontal * (cols + 1));
const height = (Dimensions.get('window').height / rows) - (marginVertical * (rows + 1)) - 40;


const stylesGrid = StyleSheet.create({
    scrollContainer: {
        flex: 1,
    },
    sectionContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxContainer: {
        marginTop: marginVertical,
        marginBottom: marginVertical,
        marginLeft: marginHorizontal,
        marginRight: marginHorizontal,
        borderColor: 'white',
        borderWidth: 2,
        borderStyle: 'dotted',
        borderRadius: 10,
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
    },
});