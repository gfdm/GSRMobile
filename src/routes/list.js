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
        <View>
        </View>
        <View style={this.state.picker ? styles.options : {width: 0, height: 0}}>
          {
            CONFIG.options.map((option, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.option}
                  onPress={() => {this.showPicker(option.value, option.title)}}
                >
                  <Text value={option.value}>{option.title}</Text>
                </TouchableOpacity>
              );
            })
          }
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
    position: 'absolute',
    top: 44,
    right: 0,
    borderWidth: 0.5,
    borderColor: '#CCC',
    backgroundColor: 'rgba(255, 255, 255, 0.9)'
  },
  option: {
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 10,
    paddingBottom: 10
  }
});

const CONFIG = {
  options: [
    {
      title: 'GITADORA Tri-Boost',
      value: 'gdtb'
    },
    {
      title: 'GITADORA Overdrive',
      value: 'gdod'
    },
    {
      title: 'GITADORA',
      value: 'gd'
    },
    {
      title: 'GuitarFreak & Drumania XG3',
      value: 'xg3'
    },
    {
      title: 'GuitarFreak & Drumania XG2',
      value: 'xg2'
    },
    {
      title: 'GuitarFreak & Drumania XG',
      value: 'xg'
    },
    {
      title: 'GuitarFreak & Drumania V8',
      value: 'v8'
    },
    {
      title: 'GuitarFreak & Drumania V7',
      value: 'v7'
    },
    {
      title: 'GuitarFreak & Drumania V6',
      value: 'v6'
    },
    {
      title: 'GuitarFreak & Drumania V5',
      value: 'v5'
    },
  ]
};
