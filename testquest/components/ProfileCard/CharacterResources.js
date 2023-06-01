import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { SIZES, FONTS, COLORS } from '../../constants';

const CharacterResources = ({ resources }) => {
  if (!resources) {
    return null;
  }
  return (
    <>
      <View style={styles.resourceGroup}>
        <Text style={styles.resource}>HP:</Text>
        <Text
          style={
            styles.resourceValue
          }>{`${resources.hp.current}/${resources.hp.max}`}</Text>
      </View>
      <View style={styles.resourceGroup}>
        <Text style={styles.resource}>MP:</Text>
        <Text
          style={
            styles.resourceValue
          }>{`${resources.mp.current}/${resources.mp.max}`}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  resourceValue: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.light,
    color: COLORS.white,
    textAlign: 'center',
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
  resourceGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  resource: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.light,
    color: COLORS.white,
    textAlign: 'left',
    paddingHorizontal: 6,
    paddingVertical: 3,
    width: 45,
  },
});

export default CharacterResources;
