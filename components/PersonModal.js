import React from 'react';
import { View, Text, StyleSheet, Image, Modal, Button } from 'react-native';

export default function PersonModal({ visible, person, closeModal, addInvite }) {
  const invite = () => {
    addInvite();
    closeModal();
  };

  const string = `https://api.gigischool.com/images/${person.avatar}.jpg`;

  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <Text style={styles.heading}>Detailed information about the person:</Text>
        <Text style={styles.text}>First Name: {person.firstName}</Text>
        <Text style={styles.text}>Last Name: {person.lastName}</Text>
        <Text style={styles.text}>Interests: {person.interests}</Text>
        <Text style={styles.text}>Age: {person.age}</Text>
        <Text style={styles.text}>Gender: {person.gender}</Text>
        <Image source={{ uri: string }} style={styles.image} />
        <View style={styles.buttons}>
          <Button onPress={invite} title="Invite" />
          <Button onPress={closeModal} title="Close" />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 300,
  },
});
