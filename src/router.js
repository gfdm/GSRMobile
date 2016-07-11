import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

import Home from './routes/home';
import List from './routes/list';
import Record from './routes/record';
import Profile from './routes/profile';
import Setting from './routes/profile/setting.js';
import Help from './routes/profile/help.js';
import About from './routes/profile/about.js';

export default class GSRRouter extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          {
            CONFIG.scenes.map((scene, index) => {
              return (
                <Scene
                  key={scene.key}
                  initial={scene.initial}
                  {...CONFIG.common}
                >
                  {
                    scene.scenes.map((scene, index) => {
                      return (
                        <Scene
                          {...scene}
                         />
                      );
                    })
                  }
                </Scene>
              );
            })
          }
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

const CONFIG = {
  common: {
    navigationBarStyle: styles.navigationBarStyle,
    titleStyle: styles.titleStyle,
    duration: 1
  },
  scenes: [
    {
      key: 'main',
      initial: true,
      scenes: [
        {
          key: 'main_home',
          initial: true,
          title: '首页',
          component: Home
        }
      ]
    },
    {
      key: 'record',
      scenes: [
        {
          key: 'record_home',
          initial: true,
          title: '记录',
          component: Record
        }
      ]
    },
    {
      key: 'list',
      scenes: [
        {
          key: 'list_home',
          initial: true,
          title: '曲单',
          component: List,
        }
      ]
    },
    {
      key: 'profile',
      scenes: [
        {
          key: 'profile_home',
          initial: true,
          title: '信息',
          component: Profile
        },
        {
          key: 'profile_setting',
          title: '设置',
          component: Setting
        },
        {
          key: 'profile_help',
          title: '帮助',
          component: Help
        },
        {
          key: 'profile_about',
          title: '关于',
          component: About
        },
      ]
    },
  ]
};
