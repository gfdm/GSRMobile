import React from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Image,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import homeIcon from '../images/home.png';
import recordIcon from '../images/edit.png';
import listIcon from '../images/service.png';
import profileIcon from '../images/person.png';

export default class GSRTabbar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {
          CONFIG.tabs.map((tab, index) => {
              return (
                <TouchableHighlight
                  key={index}
                  onPress={() => {Actions[tab.onPress]()}}
                  {...CONFIG.touchableHighlight}
                >
                  <View style={styles.tab}>
                    <Image style={styles.icon} source={tab.icon} />
                    <Text style={styles.text}>{tab.name}</Text>
                  </View>
                </TouchableHighlight>
              );
          })
        }
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  cell: {
    height: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  tab: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    marginTop: 2,
    width: 24,
    height: 24
  },
  text: {
    marginTop: 4,
    fontSize: 12
  }
});

const CONFIG = {
  touchableHighlight: {
    style: styles.cell,
    underlayColor: '#DDD'
  },
  tabs: [
    {
      name: '首页',
      icon: homeIcon,
      onPress: 'main'
    },
    {
      name: '记录',
      icon: recordIcon,
      onPress: 'record'
    },
    {
      name: '曲单',
      icon: listIcon,
      onPress: 'list'
    },
    {
      name: '信息',
      icon: profileIcon,
      onPress: 'profile'
    },
  ]
};
