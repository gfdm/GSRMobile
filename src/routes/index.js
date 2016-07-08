import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Text
} from 'react-native';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authFlag: this.props.authFlag
    };
  }
  doLogin() {
    let authFlag = !this.state.authFlag;
    this.setState({
      authFlag: authFlag
    });
    this.props.authFlagCallback(authFlag);
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
            placeholder="用户名"
          />
          <TextInput
            {...CONFIG.textInput}
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
