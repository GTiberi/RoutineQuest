import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SIZES, FONTS, COLORS } from '../../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Currency = ({ amount }) => {
  return (
    <View style={styles.currencyContainer}>
      <View
        style={{
          flex: 1,
              alignItems:'center',
        }}>
        <Text style={styles.currencyText}>
          {`Balance: ${amount}`} <Icon name="gold" style={styles.icon} />
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  currencyContainer: {
    marginTop: 'auto',
    marginBottom: 20,
    flexDirection: 'row',
    width: '100%',
  },
  currencyText: {
    fontSize: SIZES.extraLarge,
    fontFamily: FONTS.regular,
    color: COLORS.white,
    textAlign: 'center',
  },
  icon: {
    fontSize: SIZES.extraLarge,
    color: COLORS.white,
  },
});

export default Currency;
