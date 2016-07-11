import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Text
} from 'react-native';

import Storage from './storage';

import GSRRouter from './router';
import GSRStatusBar from './components/statusbar';
import GSRTabbar from './components/tabbar';

import Index from './routes/index';

import bg from './images/bg.png';

export default class GSRMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authFlag: false
    };
    Storage.load({
      key: 'uid',
      autoSync: true,
      syncInBackground: true
    }).then(data => {
      this.setState({
        authFlag: !!data.uid
      });
    }).catch(err => {
    });
  }
  doLogin(authFlag) {
    this.setState({
      authFlag: authFlag
    });
  }
  render() {
    if (!this.state.authFlag) {
      return (
        <View style={styles.index}>
          <Image style={styles.index} source={bg}>
            <GSRStatusBar />
            <Index authFlag={this.state.authFlag} authFlagCallback={this.doLogin.bind(this)} />
          </Image>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <GSRStatusBar backgroundColor="#CCC" />
          <GSRRouter />
          <GSRTabbar />
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
