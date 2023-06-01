import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SIZES, FONTS, COLORS } from '../../constants';

const ProfileInfo = ({ name, level, type }) => {
  return (
    <View>
      <Text style={styles.profileInfoText}>{name}</Text>
      <Text style={styles.profileInfoText}>Level: {level}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileInfoText: {
    fontSize: SIZES.large,
    fontFamily: FONTS.regular,
    color: COLORS.white,
  },
});

export default ProfileInfo;
