
import React, { Component } from 'react';
import { Platform, StyleSheet, View, StatusBar, Dimensions, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Button, Icon, Title, Right, Left } from 'native-base';

import styles from './styles';
import { storage } from './storage/index';
export default class TypeRope extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isTypeOne: true
        };
    }
    componentDidMount() {
        storage.load('DataAll', (data) => {
            if (data.Ferruletype == '4' || data.Ferruletype == '5') { this.setState({ isTypeOne: false }) }
        })
    }
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
                            <Icon name='md-close' style={styles.IconWhite} />
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
                            <Thumbnail square source={require('./img/1.png')} style={styles.TypeFerruleImgStyle} />
                            <Text>Fiber core</Text>
                            <Text note>Single layer</Text>
                            <Text note>round strand</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={stylesGrid.boxContainer} onPress={() => {
                            this.props.navigation.state.params.onGoBack("2");
                            this.props.navigation.goBack();
                        }}>
                            <Thumbnail square source={require('./img/2.png')} style={styles.TypeFerruleImgStyle} />
                            <Text>Metallic core (IWRC)</Text>
                            <Text note>Single layer</Text>
                            <Text note>round strand</Text>
                        </TouchableOpacity>
                        {this.state.isTypeOne &&
                            <TouchableOpacity style={stylesGrid.boxContainer} onPress={() => {
                                this.props.navigation.state.params.onGoBack("3");
                                this.props.navigation.goBack();
                            }}>
                                <Thumbnail square source={require('./img/3.png')} style={styles.TypeFerruleImgStyle} />
                                <Text>Cable laid</Text>
                                <Text note>According to</Text>
                                <Text note>EM3414</Text>
                            </TouchableOpacity>
                        }
                        {this.state.isTypeOne &&
                            <TouchableOpacity style={stylesGrid.boxContainer} onPress={() => {
                                this.props.navigation.state.params.onGoBack("4");
                                this.props.navigation.goBack();
                            }}>
                                <Thumbnail square source={require('./img/4.png')} style={styles.TypeFerruleImgStyle} />
                                <Text>Metallic core</Text>
                                <Text note>Rotation-resistant</Text>
                                <Text note>round strand</Text>
                            </TouchableOpacity>
                        }
                        {this.state.isTypeOne &&
                            <TouchableOpacity style={stylesGrid.boxContainer} onPress={() => {
                                this.props.navigation.state.params.onGoBack("5");
                                this.props.navigation.goBack();
                            }}>
                                <Thumbnail square source={require('./img/5.png')} style={styles.TypeFerruleImgStyle} />
                                <Text>Metallic core</Text>
                                <Text note>Parallel-closed</Text>
                                <Text note>round strand</Text>
                            </TouchableOpacity>
                        }
                        {this.state.isTypeOne &&
                            <TouchableOpacity style={stylesGrid.boxContainer} onPress={() => {
                                this.props.navigation.state.params.onGoBack("6");
                                this.props.navigation.goBack();
                            }}>
                                <Thumbnail square source={require('./img/6.png')} style={styles.TypeFerruleImgStyle} />
                                <Text>Metallic core</Text>
                                <Text note>Single layer</Text>
                                <Text style={{ color: '#DDDDDD' }}>none</Text>
                            </TouchableOpacity>
                        }
                    </View>
                </ScrollView>
            </Container >
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