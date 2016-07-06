import React from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
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
          <Text>HOME</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {Actions.record()}}
          {...CONFIG.touchableHighlight}
        >
          <Text>RECORD</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {Actions.list()}}
          {...CONFIG.touchableHighlight}
        >
          <Text>LIST</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {Actions.profile()}}
          {...CONFIG.touchableHighlight}
        >
          <Text>PROFILE</Text>
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
    flex: 1,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CCC'
  }
});
