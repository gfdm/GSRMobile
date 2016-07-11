import React from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import headerIcon from '../images/header.png';

export default class Profile extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.headerLeft} source={headerIcon} />
          <View style={styles.headerRight}>
            <Text style={styles.headerRightTitle}>测试测试帐号</Text>
            <Text style={styles.headerRightSubtitle}>maxskill</Text>
          </View>
        </View>

        <View style={styles.main}>
          <TouchableOpacity
            onPress={Actions.profile_setting}
            style={styles.mainLine}
          >
            <Text>设置</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.main}>
          <TouchableOpacity
            onPress={Actions.profile_help}
            style={styles.mainLine}
          >
            <Text>帮助</Text>
          </TouchableOpacity>
          <View style={styles.mainBorder}></View>
          <TouchableOpacity
            onPress={Actions.profile_about}
            style={styles.mainLine}
          >
            <Text>关于</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? 54 : 64
  },
  header: {
    height: 70,
    marginTop: 16,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerLeft: {
    width: 48,
    height: 48,
    marginLeft: 16
  },
  headerRight: {
    marginLeft: 16
  },
  headerRightTitle: {
    fontWeight: 'bold',
    marginBottom: 4
  },
  headerRightSubtitle: {
    color: '#666'
  },
  main: {
    marginTop: 16,
    backgroundColor: '#FFF'
  },
  mainBorder: {
    height: 0.5,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: '#EFEFEF'
  },
  mainLine: {
    height: 36,
    paddingLeft: 16,
    justifyContent: 'center'
  }
});
