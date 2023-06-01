import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import GradientBackground from '../GradientBackground';
import { COLORS, SIZES, FONTS } from '../../constants';
import Quest from '../QuestCard/Quest';

const QuestLogItem = ({ item, index, isExpanded, toggleExpansion }) => (
  <TouchableOpacity onPress={() => toggleExpansion(index)}>
    {isExpanded ? (
      <Quest quest={item} />
    ) : (
      <View style={styles.questListContainer}>
        <View style={styles.questItem}>
          <GradientBackground hasBorder={true} />
          <Text style={styles.questName}>{item.name}</Text>
          <View style={styles.questDetailsContainer}>
            <Text style={styles.questDetailText}>
              {`Expiration: ${item.expiration}`}
            </Text>
            <Text style={styles.questDetailText}>
              {`Récompense: ${item.reward} pts`}
            </Text>
          </View>
        </View>
      </View>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  questListContainer: {
    paddingHorizontal: 16,
  },
  questItem: {
    padding: 16,
    marginBottom: 6,
  },
  questName: {
    fontSize: SIZES.large,
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
    marginBottom: 8,
    textDecorationLine: 'underline',
    zIndex: 1,
  },
  questDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  questDetailText: {
    color: COLORS.white,
    fontSize: SIZES.font,
    fontFamily: FONTS.regular,
  },
});

export default QuestLogItem;
