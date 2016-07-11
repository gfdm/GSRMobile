import React from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>About</Text>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? 54 : 64
  }
});
