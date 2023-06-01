import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SIZES, FONTS, COLORS } from '../../constants';
import CustomModal from '../CustomModal';
import ItemInfo from './ItemInfo'

const InventoryItem = ({ item:{item,quantity} }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.tableRow}>
      <Icon name="gift" style={styles.icon} />
      <View style={styles.itemInfo}>
        <TouchableOpacity onPress={()=> setModalVisible(true)}>
          <Text style={styles.itemName}>{item.name}</Text>
        </TouchableOpacity>
        <Text style={styles.itemQuantity}>x {quantity}</Text>
        <CustomModal animation='fade' setModalVisible={setModalVisible} modalVisible={modalVisible} closingButton='top'>
        <ItemInfo item={item} quantity={0} gold={100}/>
        </CustomModal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  icon: {
    fontSize: SIZES.medium,
    marginRight: 5,
    color: COLORS.white,
  },
  itemInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  itemName: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.light,
    color: COLORS.white,
    marginLeft: 10,
  },
  itemQuantity: {
    fontSize: SIZES.light,
    fontFamily: FONTS.regular,
    color: COLORS.white,
  },
});

export default InventoryItem;
