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

import dataNGDTB from '../data/gdtb_new';
import dataOGDTB from '../data/gdtb_old';
import dataNGD from '../data/gd_new';
import dataOGD from '../data/gd_old';
import dataNXG2 from '../data/xg2_new';
import dataOXG2 from '../data/xg2_old';
import dataNXG from '../data/xg_new';
import dataOXG from '../data/xg_old';
import dataNV7 from '../data/v7_new';
import dataOV7 from '../data/v7_old';
import dataLV7 from '../data/v7_long';
import dataNV6 from '../data/v6_new';
import dataOV6 from '../data/v6_old';
import dataLV6 from '../data/v6_long';
import dataNV5 from '../data/v5_new';
import dataOV5 from '../data/v5_old';
import dataLV5 from '../data/v5_long';

import GSRSelector from '../components/selector';
import GSRMenu from '../components/menu';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickerFlag: false,
      versionName: 'GITADORA',
      version: 'gd',
      record: dataNGD.record
    };
  }
  showPicker(pickerFlag, version, versionName) {
    versionName = versionName ? versionName : this.state.versionName;
    version = version ? version : this.state.version;
    let record = [];
    switch (version) {
      case 'gdtb':
        record = dataNGDTB.record;
        break;
      case 'gd':
        record = dataNGD.record;
        break;
      case 'xg2':
        record = dataNXG2.record;
        break;
      case 'xg':
        record = dataNXG.record;
        break;
      case 'v7':
        record = dataNV7.record;
        break;
      case 'v6':
        record = dataNV6.record;
        break;
      case 'v5':
        record = dataNV5.record;
        break;
    }
    this.setState({
      pickerFlag: pickerFlag,
      versionName: versionName,
      version: version,
      record: record
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

        {
          this.state.record.map((record, index) => {
            return (
              <View style={styles.list} key={index}>
                <View style={styles.listRow}>
                  <Text>{record.title}</Text>
                </View>
                <View style={styles.listRow}>
                  <Text>{record.artist} / {record.bpm}</Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.listBox}>D: {record['nov-d'] ? record['nov-d'] : '----'}</Text>
                  <Text style={styles.listBox}>D: {record['reg-d'] ? record['reg-d'] : '----'}</Text>
                  <Text style={styles.listBox}>D: {record['exp-d'] ? record['exp-d'] : '----'}</Text>
                  <Text style={styles.listBox}>D: {record['mas-d'] ? record['mas-d'] : '----'}</Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.listBox}>G: {record['nov-g'] ? record['nov-g'] : '----'}</Text>
                  <Text style={styles.listBox}>G: {record['reg-g'] ? record['reg-g'] : '----'}</Text>
                  <Text style={styles.listBox}>G: {record['exp-g'] ? record['exp-g'] : '----'}</Text>
                  <Text style={styles.listBox}>G: {record['mas-g'] ? record['mas-g'] : '----'}</Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.listBox}>B: {record['nov-b'] ? record['nov-b'] : '----'}</Text>
                  <Text style={styles.listBox}>B: {record['reg-b'] ? record['reg-b'] : '----'}</Text>
                  <Text style={styles.listBox}>B: {record['exp-b'] ? record['exp-b'] : '----'}</Text>
                  <Text style={styles.listBox}>B: {record['mas-b'] ? record['mas-b'] : '----'}</Text>
                </View>
              </View>
            );
          })
        }

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
  },
  list: {
    marginBottom: 8,
    backgroundColor: '#FFF'
  },
  listRow: {
    height: 28,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  listBox: {
    flex: 1,
    textAlign: 'center'
  }
});
