import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { SIZES, FONTS, COLORS } from '../../constants';

const Description = ({ text }) => {
  return <Text style={styles.description}>{text}</Text>;
};

const styles = StyleSheet.create({
  description: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.light,
    color: COLORS.white,
    textAlign: 'left',
    marginLeft: 6,
  },
});

export default Description;
