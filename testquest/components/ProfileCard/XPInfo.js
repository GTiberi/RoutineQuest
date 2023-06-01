import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SIZES, FONTS, COLORS } from '../../constants';

const XPInfo = ({ currentExp, nextLevelExp }) => {
  return (
    <View style={styles.column}>
      <Text style={styles.xpInfo}>EXP actuelle</Text>
      <Text style={styles.xpValue}>{currentExp}</Text>
      <Text style={styles.xpInfo}>Prochain Niveau</Text>
      <Text style={styles.xpValue}>{nextLevelExp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  column: {
    flex: 1,
  },
  xpInfo: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.light,
    color: COLORS.white,
    marginLeft: 6,
  },
  xpValue: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.light,
    color: COLORS.white,
    alignSelf: 'flex-end',
  },
});

export default XPInfo;
