import React from 'react';
import { Image, StyleSheet } from 'react-native';
import CharacterAnimation from './CharacterAnimation'

const Avatar = ({ id }) => {
  let path = require('../../assets/images/class1.png');
  if (id === "1") {
    path = require('../../assets/images/class1.png');
  } else if (id === "2") {
    path = require('../../assets/images/class2.png');
  } else if (id === "6") {
    path = require('../../assets/images/class6.png');
  }

  return <CharacterAnimation/>;
};

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
  },
});

export default Avatar;
