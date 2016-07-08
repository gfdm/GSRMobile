import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

import Home from './routes/home';
import List from './routes/list';
import Profile from './routes/profile';
import Record from './routes/record';

export default class GSRRouter extends React.Component {
  render() {
    const CONFIG = {
      common: {
        navigationBarStyle: styles.navigationBarStyle,
        titleStyle: styles.titleStyle,
        duration: 1
      }
    };
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="main"
            initial={true}
            {...CONFIG.common}
          >
            <Scene
              key="main_home"
              component={Home}
              title="首页"
              initial={true}
             />
          </Scene>
          <Scene
            key="record"
            {...CONFIG.common}
          >
            <Scene
              key="record_home"
              component={Record}
              title="记录"
              initial={true}
            />
          </Scene>
          <Scene
            key="list"
            {...CONFIG.common}
          >
            <Scene
              key="list_home"
              component={List}
              title="曲单"
              initial={true}
            />
          </Scene>
          <Scene
            key="profile"
            {...CONFIG.common}
          >
            <Scene
              key="profile_home"
              component={Profile}
              title="信息"
              initial={true}
            />
          </Scene>
        </Scene>
      </Router>
    );
  }
};

const styles = StyleSheet.create({
  navigationBarStyle: {
    borderBottomColor: '#CCC',
    backgroundColor: "#FFF"
  },
  titleStyle: {
    color: "#333"
  }
});
