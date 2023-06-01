import { useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import Button from '../Button';
import CustomModal from '../CustomModal';
import { SIZES, FONTS, COLORS } from '../../constants';
import InventoryItem from './InventoryItem';

const Inventory = ({ inventory }) => {
  const [modalVisible, setModalVisible] = useState(false);

  // Limit the inventory items to a maximum of 4
  const limitedInventory = inventory.slice(0, 3);

  const renderInventoryItem = ({ item }) => <InventoryItem item={item} />;

  return (
    <View style={styles.inventoryContainer}>
      <View style={{ flex: 1 }}>
        <Text style={styles.inventoryName}>Inventaire</Text>
        <FlatList
          data={limitedInventory}
          renderItem={renderInventoryItem}
          keyExtractor={(item) => item.item.id}
          showsVerticalScrollIndicator={false}
        />
        {inventory.length > 3 && (
          <Button
            buttonName="Afficher Tous"
            onPress={() => setModalVisible(true)}
          />
        )}
        <CustomModal
          animation="slide"
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
          closingButton="bottom">
          <View style={{ minHeight: 300 }}>
            <FlatList
              data={inventory}
              renderItem={renderInventoryItem}
              keyExtractor={(item) => item.item.id}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </CustomModal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inventoryContainer: {
    flexDirection: 'row',
    width: '100%',
    marginLeft: 6,
    paddingRight: 6,
  },
  inventoryName: {
    fontSize: SIZES.extraLarge,
    fontFamily: FONTS.light,
    color: COLORS.white,
    textAlign: 'center',
    marginBottom: 6,
  },
});

export default Inventory;
