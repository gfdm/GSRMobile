import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native';

export default class GSRSelector extends React.Component {
  constructor(props) {
    super(props);
  }
  showPicker() {
    this.props.showPickerCallback(!this.props.pickerFlag);
  }
  render() {
    return (
      <TouchableOpacity onPress={() => {this.showPicker()}}>
        <View style={styles.picker}>
          <Text>版本：</Text>
          <Text>{this.props.versionName}</Text>
          <Text style={styles.pickerIcon}>▼</Text>
        </View>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
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
  }
});
