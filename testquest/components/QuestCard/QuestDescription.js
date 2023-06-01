import { Text, ScrollView, StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../constants';

const QuestDescription = ({ description }) => {
  return (
    <ScrollView
      style={styles.descriptionContainer}
      showsVerticalScrollIndicator={false}>
      <Text style={styles.description}>{description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    maxHeight: 105,
    marginBottom: 8,
  },
  description: {
    fontSize: SIZES.font,
    color: COLORS.white,
    fontFamily: FONTS.light,
  },
});

export default QuestDescription;
