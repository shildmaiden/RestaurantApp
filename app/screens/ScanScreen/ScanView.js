import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CityItem, ProfileButton, Error, Loading, Alert } from '../../components';
import {View, ScrollView, StatusBar, Dimensions, Text} from 'react-native';
import constants from '../../config/constants';
const { width, height } = Dimensions.get('window');
import QRCodeScanner from 'react-native-qrcode-scanner';

class ScanView extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
    headerRight: (
      <ProfileButton navigation={navigation}/>
    ),
  }};

  onSuccess(e) {
    alert("rezultat" + e.data)
  }


  render() {
    return (
      <View  style={{ backgroundColor: constants.PRIMARY_BG_COLOR, width, height:(height-45)}}>
      <QRCodeScanner 
        containerStyle={{width: width -30, height:(height-40)}}
        onRead={this.onSuccess.bind(this)}
        fadeIn = {true}
        reactivate={true}
        showMarker = {true}
        topContent={
          <Text style={{fontSize: 18, color: '#777'}}> Please scan QR code to open aplication </Text>
        }
      />
      </View>
    );
  }
}

export default ScanView;