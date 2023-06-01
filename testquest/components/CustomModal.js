import React from 'react';
import { View, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GradientBackground from './GradientBackground';
import Button from './Button';
import { COLORS } from '../constants';

const CustomModal = ({
  children,
  modalVisible,
  setModalVisible,
  animation,
  closingButton,
}) => {
  return (
    <Modal
      visible={modalVisible}
      animationType={animation}
      transparent={true}
      onRequestClose={() => setModalVisible(false)}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <GradientBackground hasBorder={true} />
          {closingButton === 'top' ? (
            <View style={styles.closeButtonContainer}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={24} color={COLORS.white} />
              </TouchableOpacity>
            </View>
          ) : null}
          <View style={{ padding: 10 }}>{children}</View>
          {closingButton === 'bottom' ? (
            <Button
              buttonName="Fermer"
              onPress={() => setModalVisible(false)}
            />
          ) : null}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    padding: 10,
    width: '80%',
    maxHeight: '80%',
  },
  closeButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  closeButton: {
    zIndex: 1,
  },
});

export default CustomModal;
