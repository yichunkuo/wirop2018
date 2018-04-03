import React, { Component } from 'react';
import { Platform, StyleSheet, View, StatusBar, Dimensions } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Form, Item, Input, Label, Text, Content, List, ListItem, Thumbnail } from 'native-base';
import { StackNavigator } from 'react-navigation';
import { Image, Animated, Easing, } from 'react-native';

import home from './src/home';
import LeftPage from './src/LeftPage';
import styles from './src/styles';
import TypeFerrule from './src/TypeFerrule';
import TypeRope from './src/TypeRope';
import About from './src/About';
import Contact from './src/Contact';

import Factors from './src/Factors';
import Factor from './src/Factor';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),          // 透明度初始值设为0
    };
  }

  componentDidMount() {
    Animated.timing(                            // 随时间变化而执行的动画类型
      this.state.fadeAnim,                      // 动画中的变量值
      {
        toValue: 1,// 透明度最终变为1，即完全不透明
        duration: 3000,
        easing: Easing.bezier(0.15, 0.73, 0.37, 1.2)  //缓动函数

      }
    ).start();
    // 开始执行动画
    setTimeout(() => {
      this.props.navigation.navigate('home');
    }, 3000);
  }


  render() {
    return (
      <Image source={require('./src/img/00Start.png')} style={styles2.container}></Image>
    );
  }

}
var styles2 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: Image.resizeMode.stretch,
    width: this.windowWidth,
    height: this.windowHeight
  }
});

const App = StackNavigator({
  Page1: { screen: Page1 },
  home: { screen: home },
  LeftPage: { screen: LeftPage },
  TypeFerrule: { screen: TypeFerrule },
  TypeRope: { screen: TypeRope },
  About: { screen: About },
  Contact: { screen: Contact },
  Factors: { screen: Factors },
  Factor: { screen: Factor }
}, { headerMode: 'none' });

export default App;