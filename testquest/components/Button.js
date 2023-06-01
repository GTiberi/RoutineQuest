import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import GradientBackground from './GradientBackground';

import { COLORS, SIZES, FONTS } from '../constants';

const Button = ({ onPress, buttonName, width, onLongPress, disabled }) => {
  if (!onPress) {
    onPress = () => {
      console.log('On Press');
    };
  }

  if (!onLongPress) {
    onLongPress = () => {
      console.log('On Long Press');
    };
  }

  const buttonStyle = [styles.button];
  if (width) {
    buttonStyle.push({ width });
  }

  return (
    <TouchableOpacity
      disabled={disabled}
      style={buttonStyle}
      onLongPress={onLongPress}
      onPress={onPress}>
      <GradientBackground hasBorder={true} grayedOut={disabled}/>
      <Text style={styles.buttonText}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: SIZES.small,
    marginHorizontal: 8,
  },
  buttonText: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
    zIndex: 1,
    textAlign: 'center',
  },
});

export default Button;
