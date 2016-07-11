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

import GSRSelector from '../components/selector';
import GSRMenu from '../components/menu';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickerFlag: false,
      versionName: 'GITADORA Tri-Boost',
      version: 'gdtb'
    };
  }
  showPicker(pickerFlag, version, versionName) {
    this.setState({
      pickerFlag: pickerFlag,
      versionName: versionName ? versionName : this.state.versionName,
      version: version ? version : this.state.version
    });
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <GSRSelector
          pickerFlag={this.state.pickerFlag}
          versionName={this.state.versionName}
          showPickerCallback={this.showPicker.bind(this)}
        />

        <View>
        </View>

        <GSRMenu
          pickerFlag={this.state.pickerFlag}
          versionName={this.state.versionName}
          version={this.state.version}
          showPickerCallback={this.showPicker.bind(this)}
        />
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? 54 : 64
  }
});
