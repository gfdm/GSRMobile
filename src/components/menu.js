import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native';

export default class GSRMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      versionName: this.props.versionName,
      version: this.props.version
    };
  }
  showPicker(version, versionName) {
    this.setState({
      versionName: versionName ? versionName : this.state.versionName,
      version: version ? version : this.state.version
    });
    this.props.showPickerCallback(
      !this.props.pickerFlag,
      version,
      versionName
    );
  }
  render() {
    return (
      <View style={this.props.pickerFlag ? styles.options : {width: 0, height: 0}}>
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
    );
  }
};

const styles = StyleSheet.create({
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
