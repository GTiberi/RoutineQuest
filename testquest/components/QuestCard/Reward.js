import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Reward = ({ reward }) => {
  return (
    <View>
      <Text style={styles.mediumText}>Récompense</Text>
      <Text style={styles.smallText}>
        <Icon name="award" style={styles.icon} />
        {`${reward} points d'aptitudes`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mediumText: {
    fontSize: SIZES.font,
    marginBottom: 8,
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
    textDecorationLine: 'underline',
  },
  smallText: {
    fontSize: SIZES.small,
    marginBottom: 8,
    fontFamily: FONTS.regular,
    color: COLORS.white,
  },
  icon: {
    fontSize: SIZES.font,
    marginRight:5
  },
});

export default Reward;
