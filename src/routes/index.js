import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Text
} from 'react-native';

import Storage from '../storage';
import Fetch from '../fetch';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authFlag: this.props.authFlag,
      username: '',
      password: ''
    };
  }
  doLogin() {
    Fetch(
      'http://gsr.asaki.me/api/account/login',
      {
        username: this.state.username,
        password: this.state.password
      },
      (data) => {
        Storage.save({
          key: 'uid',
          rawData: {
            uid: data.uid
          },
          expires: null
        });
        let authFlag = !this.state.authFlag;
        this.setState({
          authFlag: authFlag
        });
        this.props.authFlagCallback(authFlag);
      },
      'POST'
    );
  }
  render() {
    const CONFIG = {
      textInput: {
        style: styles.input,
        underlineColorAndroid: 'transparent',
        selectionColor: '#CCC',
        placeholderTextColor: '#999',
        clearButtonMode: 'while-editing'
      }
    };
    return (
      <View style={styles.index}>
        <Text style={styles.title}>GITADORA SKILL RECORDER Mobile</Text>
        <Text style={styles.subtitle}>Version 0.0.1 Next</Text>
        <View>
          <TextInput
            {...CONFIG.textInput}
            onChangeText={(username) => this.setState({...this.state, username})}
            value={this.state.username}
            placeholder="用户名"
          />
          <TextInput
            {...CONFIG.textInput}
            onChangeText={(password) => this.setState({...this.state, password})}
            value={this.state.password}
            password={true}
            placeholder="密码"
          />
        </View>
        <View style={styles.signin}>
          <TouchableOpacity onPress={() => {this.doLogin()}}>
            <Text style={styles.signinText}>
              SIGN IN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
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
