import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import GSRRouter from './router';
import GSRStatusBar from './components/statusbar';
import GSRTabbar from './components/tabbar.js';

export default class GSRMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authFlag: false
    };
  }
  doLogin() {
    this.setState({
      authFlag: !this.state.authFlag
    });
  }
  render() {
    if (this.state.authFlag) {
      // Inner Page
      return (
        <View style={styles.container}>
          <GSRStatusBar />
          <GSRRouter />
          <GSRTabbar />
        </View>
      );
    } else {
      // Login Page
      let textInput = {
        style: styles.input,
        underlineColorAndroid: 'transparent',
        selectionColor: '#CCC',
        placeholderTextColor: '#999',
        clearButtonMode: 'while-editing'
      };
      return (
        <View style={styles.index}>
          <Image style={styles.index} source={require('./images/bg.png')}>
            <GSRStatusBar />
            <Text style={styles.title}>GITADORA SKILL RECORDER Mobile</Text>
            <Text style={styles.subtitle}>Version 0.0.1 Next</Text>
            <View>
              <TextInput
                {...textInput}
                placeholder="用户名"
              />
              <TextInput
                {...textInput}
                password={true}
                placeholder="密码"
              />
            </View>
            <View style={styles.signin}>
              <Text
                onPress={() => {this.doLogin()}}
                style={styles.signinText}
              >
                SIGN IN
              </Text>
            </View>
          </Image>
        </View>
      );
    }
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  index: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: '#FFF',
    fontSize: 20
  },
  subtitle: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    marginTop: 16,
    marginBottom: 80,
    color: '#BDBDBD',
    fontSize: 16
  },
  input: {
    width: 200,
    height: 38,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 0,
    color: '#FFF',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    fontSize: 16
  },
  signin: {
    width: 90,
    height: 40,
    marginTop: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  signinText: {
    color: '#CCC',
    fontSize: 16
  }
});
