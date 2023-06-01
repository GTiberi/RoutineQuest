import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SIZES, FONTS, COLORS } from '../../constants';

const ProfileContainer = ({ children }) => {
  return <View style={styles.statsContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  statsContainer: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row',
    width: '100%',
  },
});

export default ProfileContainer;
