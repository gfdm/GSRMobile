import React from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Home extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.cell}>Version</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.cell}>Skill</Text>
            <Text style={styles.cell}>Total</Text>
            <Text style={styles.cell}>new</Text>
            <Text style={styles.cell}>old</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.cell}>0000.00</Text>
            <Text style={styles.cell}>00000.00</Text>
            <Text style={styles.cell}>0000.00</Text>
            <Text style={styles.cell}>0000.00</Text>
          </View>
        </View>
        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.cell}>Version</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.cell}>Skill</Text>
            <Text style={styles.cell}>Total</Text>
            <Text style={styles.cell}>new</Text>
            <Text style={styles.cell}>old</Text>
            <Text style={styles.cell}>long</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.cell}>0000.00</Text>
            <Text style={styles.cell}>00000.00</Text>
            <Text style={styles.cell}>0000.00</Text>
            <Text style={styles.cell}>0000.00</Text>
            <Text style={styles.cell}>0000.00</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? 54 : 64
  },
  table: {
    marginTop: 4,
    backgroundColor: '#FFF'
  },
  row: {
    flexDirection: 'row'
  },
  cell: {
    flex: 1,
    textAlign: 'center'
  },
});
