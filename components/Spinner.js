import React from 'react';
import { View, StyleSheet, Modal, ActivityIndicator } from 'react-native';

const Spinner = () => (
  <Modal visible={true} transparent={true}>
    <View style={styles.container}>
      <ActivityIndicator color='red' size='large' />
    </View>
  </Modal>
);

export default Spinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
