import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { COLORS, SIZES } from '../constants';

const GradientBackground = ({ hasBorder, grayedOut }) => {
  const colors = grayedOut
    ? ['#AAAFB4', '#AAAFB4', '#AAAFB4', '#AAAFB4', '#AAAFB4']
    : ['#0054f6', '#004bdd', '#0043c5', '#003aad', '#003296'];
  return hasBorder ? (
    <LinearGradient colors={colors} style={styles.gradient} />
  ) : (
    <LinearGradient
      colors={colors}
      style={{ ...StyleSheet.absoluteFillObject }}
    />
  );
};

const styles = StyleSheet.create({
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: SIZES.small,
    borderColor: COLORS.white,
    borderWidth: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
});

export default GradientBackground;
