import React, { Component } from 'react';
import { Platform, StyleSheet, View, StatusBar, Alert, TextInput } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Form, Item, Input, Label, Text, Content, List, ListItem, Thumbnail } from 'native-base';
import { StackNavigator } from 'react-navigation';

import styles from './styles';
import TypeFerrule from './TypeFerrule';
import TypeRope from './TypeRope';

import { storage } from './storage/index';

export default class home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            FerruleTypeNum: '0', RopeTypeNum: '0', RopeDiameterNum: '0(mm)', FactorsNum: 'tap to select',
            strFerruletype: 'tap to select', imgFerruletype: require('./img/white.png'),
            strTypeRope: 'tap to select', imgTypeRope: require('./img/white.png'),
            factorsTitle: 'Factors',
            Resule: '0', FurruleCode: '0', ARTNo: '0', DiaAfterSwage: '0', Max: '0',
        };
    }

    render() {
        let imgFerruletypeItem = null;
        if (this.state.strFerruletype != 'tap to select') {
            imgFerruletypeItem =
                <Left style={{ flex: 0.1 }}>
                    {<Thumbnail square source={this.state.imgFerruletype} style={{ width: 50, height: 50, resizeMode: "contain" }} />}
                </Left>
        }
        let imgTypeRopeItem = null;
        if (this.state.strTypeRope != 'tap to select' && this.state.strTypeRope != 'tap to select') {
            imgTypeRopeItem =
                <Left style={{ flex: 0.1 }}>
                    {<Thumbnail square source={this.state.imgTypeRope} style={{ width: 50, height: 50, resizeMode: "contain" }} />}
                </Left>
        }

        return (
            <Container style={styles.BGGray} >
                <StatusBar translucent={false} hidden={true} />
                <Header style={styles.BGYellow}>
                    <Left></Left>
                    <Body>
                        <Thumbnail square source={require('./img/wirop.png')} style={{ marginLeft: 15, width: 200, height: 35, resizeMode: "contain" }} />
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.navigate('LeftPage')}>
                            <Icon name='menu' style={styles.IconWhite} />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <List>
                        <ListItem style={styles.ListItemStyle}
                            onPress={() => this.props.navigation.navigate('TypeFerrule', { onGoBack: this.setFerruletypeStatus.bind(this) })}>
                            {imgFerruletypeItem}
                            <Body>
                                <Text style={styles.ListItemTextStyle}>Ferrule type </Text>
                                <Text style={styles.ListItemTextNoteStyle}>
                                    {this.state.strFerruletype}
                                </Text>
                            </Body>
                        </ListItem>
                        <ListItem style={styles.ListItemStyle}
                            onPress={() =>
                                this.state.strFerruletype == '' || this.state.strFerruletype == 'tap to select'
                                    ? Alert.alert("select Ferrule first")
                                    : this.props.navigation.navigate('TypeRope', { onGoBack: this.setTypeRopeStatus.bind(this) })}>
                            {imgTypeRopeItem}
                            <Body>
                                <Text style={styles.ListItemTextStyle}>Wire rope type </Text>
                                <Text style={styles.ListItemTextNoteStyle}>
                                    {this.state.strTypeRope}
                                </Text>
                            </Body>
                        </ListItem>
                        <ListItem style={styles.ListItemStyle}>
                            <Body>
                                <Text style={styles.ListItemTextStyle}>Rope Measured Diameter</Text>
                                <TextInput keyboardType='numeric' placeholder={this.state.RopeDiameterNum} textAlign={'center'} underlineColorAndroid='transparent'
                                    onChangeText={(text) => this.setRopeDiameter(text)}
                                />
                            </Body>
                        </ListItem>
                        <ListItem style={styles.ListItemStyle} onPress={() => this.gotoFactors()}>
                            <Body>
                                <Text style={styles.ListItemTextStyle}>{this.state.factorsTitle}</Text>
                                <Text style={styles.ListItemTextNoteStyle}>tap to select</Text>
                            </Body>
                        </ListItem>
                        {/* <ListItem style={styles.ListItemStyle}
                            onPress={() => this.gotoFactors()}>
                            <Body>
                                <Text style={styles.ListItemTextStyle}>{this.state.factorsTitle}</Text>
                                <Text style={styles.ListItemTextNoteStyle}>{this.state.FactorsNum}</Text>
                            </Body>
                        </ListItem> */}
                    </List>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Button full rounded style={styles.HomePageBtnStyle} onPress={() => this.Calculate()}>
                            <Text>Calculate</Text>
                        </Button>
                        <Button full rounded style={styles.HomePageBtnStyle} onPress={() => this.props.navigation.navigate('Result')}>
                            <Text>More Information</Text>
                        </Button>
                    </View>
                </Content>
            </Container >
        );
    }

    createData() {
        let obj = {}
        obj.Ferruletype = this.state.FerruleTypeNum
        obj.RopeType = this.state.RopeTypeNum
        obj.RopeDiameter = this.state.RopeDiameterNum + '(mm)'
        obj.Factors = this.state.FactorsNum
        storage.save('DataAll', obj)
    }
    //fun TypeFerrule Callback
    setFerruletypeStatus(num) {
        this.state.FerruleTypeNum = num;
        if (num == '1') { this.setState({ strFerruletype: 'W901 EN 13411-3', imgFerruletype: require('./img/w901.png') }) }
        else if (num == '2') { this.setState({ strFerruletype: 'W901C EN 13411-3 From C', imgFerruletype: require('./img/w901c.png') }); }
        else if (num == '3') { this.setState({ strFerruletype: 'W901C EN 13411-3 From C With Hole', imgFerruletype: require('./img/w901cHole.png') }); }
        else if (num == '4') { this.setState({ strFerruletype: 'W902 Flemish Eye Steel', imgFerruletype: require('./img/w902.png') }); }
        else if (num == '5') { this.setState({ strFerruletype: 'W903 Duplex Oval Steel', imgFerruletype: require('./img/w903.png') }); }
        else if (num == '6') { this.setState({ strFerruletype: 'W905 Copper Ferrules', imgFerruletype: require('./img/w905.png') }); }

        this.createData();
    }

    //fun TypeRope Callback
    setTypeRopeStatus(num) {
        this.state.RopeTypeNum = num;
        if (num == '1') { this.setState({ strTypeRope: 'Fiber core', imgTypeRope: require('./img/1.png') }); }
        else if (num == '2') { this.setState({ strTypeRope: 'Metallic core (IWRC)', imgTypeRope: require('./img/2.png') }); }
        else if (num == '3') { this.setState({ strTypeRope: 'Cable laid', imgTypeRope: require('./img/3.png') }); }
        else if (num == '4') { this.setState({ strTypeRope: 'Metallic core Rotation-resistant', imgTypeRope: require('./img/4.png') }); }
        else if (num == '5') { this.setState({ strTypeRope: 'Metallic core Parallel-closed', imgTypeRope: require('./img/5.png') }); }
        else if (num == '6') { this.setState({ strTypeRope: 'Metallic core Single layer', imgTypeRope: require('./img/6.png') }); }

        this.createData();
    }

    setRopeDiameter(num) {
        this.state.RopeDiameterNum = num; this.createData();
    }
    setFactorsValues(num) {
        this.setState({ factorsTitle: 'Cross-sectional factor', FactorsNum: num });
        this.createData();
    }
    gotoFactors() {
        //this.props.navigation.navigate('Factors', { onGoBack: this.setFactorsValues.bind(this) });
        if (this.state.strTypeRope == 'tap to select') {
            Alert.alert("select TypeRope first");
        } else {
            this.props.navigation.navigate('Factor', { onGoBack: this.setFactorsValues.bind(this) });
        }
    }
    Calculate() {
        if (this.state.FerruleTypeNum == '0' || this.state.RopeTypeNum == '0' ||
            this.state.RopeDiameterNum == '0(mm)' || this.state.FactorsNum == 'tap to select') { Alert.alert('Information is not complete') }
        else if (this.state.FerruleTypeNum == '4') {
            if (this.state.RopeDiameterNum < 6 || this.state.RopeDiameterNum > 154) { Alert.alert('value has be between 6 and 154') }
            else { this.checkW902() }
        }
    }
    // checkW902() {
    //     var count = 0;
    //     for (let dataObject of data) {
    //         if (data[count].RopeSize == '6') {
    //             console.warn(JSON.stringify(data[count].ARTNO));
    //         }
    //         count++;
    //     }

    // }

}
