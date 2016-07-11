import React from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Help extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Help</Text>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? 54 : 64
  }
});
