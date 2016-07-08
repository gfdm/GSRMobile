import React from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picker: false,
      versionName: 'GITADORA Tri-Boost',
      version: 'gdtb'
    };
  }
  showPicker(version, versionName) {
    this.setState({
      picker: !this.state.picker,
      versionName: versionName ? versionName : this.state.versionName,
      version: version ? version : this.state.version
    });
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity onPress={() => {this.showPicker()}}>
          <View style={styles.picker}>
            <Text>版本：</Text>
            <Text>{this.state.versionName}</Text>
            <Text style={styles.pickerIcon}>▼</Text>
          </View>
        </TouchableOpacity>
        <View style={this.state.picker ? styles.options : {width: 0, height: 0}}>
          <TouchableOpacity
            style={styles.option}
            onPress={() => {this.showPicker('gdtb', 'GITADORA Tri-Boost')}}
          >
            <Text value="gdtb">GITADORA Tri-Boost</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => {this.showPicker('gdod', 'GITADORA Overdrive')}}
          >
            <Text value="gdod">GITADORA Overdrive</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => {this.showPicker('gd', 'GITADORA')}}
          >
            <Text value="gd">GITADORA</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => {this.showPicker('xg3', 'GuitarFreak & Drumania XG3')}}
          >
            <Text value="xg3">GuitarFreak & Drumania XG3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => {this.showPicker('xg2', 'GuitarFreak & Drumania XG2')}}
          >
            <Text value="xg2">GuitarFreak & Drumania XG2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => {this.showPicker('xg', 'GuitarFreak & Drumania XG')}}
          >
            <Text value="xg">GuitarFreak & Drumania XG</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => {this.showPicker('v8', 'GuitarFreak & Drumania V8')}}
          >
            <Text value="v8">GuitarFreak & Drumania V8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => {this.showPicker('v7', 'GuitarFreak & Drumania V7')}}
          >
            <Text value="v7">GuitarFreak & Drumania V7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => {this.showPicker('v6', 'GuitarFreak & Drumania V6')}}
          >
            <Text value="v6">GuitarFreak & Drumania V6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => {this.showPicker('v5', 'GuitarFreak & Drumania V5')}}
          >
            <Text value="v5">GuitarFreak & Drumania V5</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? 54 : 64
  },
  picker: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 4,
    marginBottom: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },
  pickerHide: {
    width: 0,
    height: 0
  },
  pickerIcon: {
    color: '#666',
    fontSize: 10
  },
  options: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)'
  },
  option: {
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 10,
    paddingBottom: 10
  }
});
