import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SIZES, FONTS, COLORS } from '../../constants';
import Avatar from './Avatar';

const BaseInfo = ({ name, level, classRole,id }) => {
  return (
    <View style={styles.baseInfoOuterContainer}>
      <Avatar id={id} />
      <View style={styles.baseInfoInnerContainer}>
        <View>
          <Text style={styles.baseInfoText}>{name}</Text>
          <Text style={styles.baseInfoText}>Niveau: {level}</Text>
        </View>
        <Text style={styles.baseInfoText}>{classRole}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  baseInfoOuterContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  baseInfoInnerContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  baseInfoText: {
    fontSize: SIZES.large,
    fontFamily: FONTS.regular,
    color: COLORS.white,
  },
});

export default BaseInfo;
