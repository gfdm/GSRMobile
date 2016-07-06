import React from 'react';
import {
  StyleSheet,
  View,
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
    let statusBar = null;
    if (this.state.authFlag) {
      return (
        <View style={styles.container}>
          <GSRStatusBar />
          <GSRRouter />
          <GSRTabbar />
        </View>
      );
    } else {
      return (
        <View style={styles.index}>
          <GSRStatusBar />
          <Text onPress={() => {this.doLogin()}}>go Home!</Text>
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
  }
});
