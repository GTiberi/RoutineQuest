import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { SIZES, FONTS, COLORS } from '../../constants';

const CharacterStats = ({ stats }) => {
    if (!stats) {
    return null;
  }
  return (
    <View style={styles.statContainer}>
      <View style={styles.statGroup}>
        <Text style={styles.stat}>STR:</Text>
        <Text style={styles.statValue}>{stats.str}</Text>
      </View>
      <View style={styles.statGroup}>
        <Text style={styles.stat}>AGL:</Text>
        <Text style={styles.statValue}>{stats.agl}</Text>
      </View>
      <View style={styles.statGroup}>
        <Text style={styles.stat}>INT:</Text>
        <Text style={styles.statValue}>{stats.int}</Text>
      </View>
      <View style={styles.statGroup}>
        <Text style={styles.stat}>LCK:</Text>
        <Text style={styles.statValue}>{stats.lck}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statContainer: { alignItems: 'flex-end', flex: 1 },
  statGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  stat: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.light,
    color: COLORS.white,
    textAlign: 'left',
    paddingHorizontal: 6,
    paddingVertical: 3,
    width: 45,
  },
  statValue: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.light,
    color: COLORS.white,
    paddingVertical: 3,
    marginLeft: 6,
    width: 45,
  },
});

export default CharacterStats;
