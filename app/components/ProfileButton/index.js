import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ProfileButton extends Component {
  render() {
    return (
      <Icon.Button name="user" size={25} backgroundColor="transparent" underlayColor="transparent" onPress={() => this.props.navigation.navigate('Profile')}></Icon.Button>
    );
  }
};
