import { View, Text } from 'react-native';
import Button from '../Button';
import { SIZES, FONTS, COLORS } from '../../constants';

const ItemInfo = ({ item, quantity, gold, onUseItem, onBuyItem }) => {
  const canUseItem = quantity > 0;
  const canBuyItem = gold >= item.price;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>

      <View style={styles.buttonContainer}>
        <Button
          buttonName="Utiliser"
          onPress={onUseItem}
          disabled={!canUseItem}
          width={100}
        />

        <Button
          buttonName="Acheter"
          onPress={onBuyItem}
          disabled={!canBuyItem}
          width={100}
        />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    minHeight:300,
  },
  title: {
    fontSize: SIZES.extraLarge,
    fontFamily: FONTS.regular,
    color: COLORS.white,
    marginBottom: 10,
  },
  description: {
    marginBottom: 20,
    fontSize: SIZES.medium,
    fontFamily: FONTS.light,
    color: COLORS.white,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 'auto',
  },
};

export default ItemInfo;
