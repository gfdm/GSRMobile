import React from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Image,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class GSRTabbar extends React.Component {
  render() {
    const CONFIG = {
      touchableHighlight: {
        style: styles.cell,
        underlayColor: '#DDD'
      }
    };
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => {Actions.main()}}
          {...CONFIG.touchableHighlight}
        >
          <View style={styles.tab}>
            <Image style={styles.icon} source={require('../images/home.png')} />
            <Text style={styles.text}>HOME</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {Actions.record()}}
          {...CONFIG.touchableHighlight}
        >
          <View style={styles.tab}>
            <Image style={styles.icon} source={require('../images/edit.png')} />
            <Text style={styles.text}>RECORD</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {Actions.list()}}
          {...CONFIG.touchableHighlight}
        >
          <View style={styles.tab}>
            <Image style={styles.icon} source={require('../images/service.png')} />
            <Text style={styles.text}>LIST</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {Actions.profile()}}
          {...CONFIG.touchableHighlight}
        >
          <View style={styles.tab}>
            <Image style={styles.icon} source={require('../images/person.png')} />
            <Text style={styles.text}>PROFILE</Text>
          </View>
        </TouchableHighlight>
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
    width: 24,
    height: 24
  },
  text: {
    marginTop: 4,
    fontSize: 12
  }
});
