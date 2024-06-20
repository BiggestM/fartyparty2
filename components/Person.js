import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default function Person({ person, modalOn, setPerson, notPressable }) {
  const string = `https://api.gigischool.com/images/${person.avatar}.jpg`;

  const onPres = () => {
    if (notPressable) return;
    setPerson();
    modalOn();
  };

  return (
    <Pressable onPress={onPres}>
      <View style={styles.container}>
        <Image source={{ uri: string }} style={styles.image} />
        <View style={styles.textHeading}>
          <Text style={styles.text}>First Name: {person.firstName}</Text>
          <Text style={styles.text}>Last Name: {person.lastName}</Text>
          <Text style={styles.text}>Gender: {person.gender}</Text>
          <Text style={styles.text}>Age: {person.age}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 120,
    borderWidth: 1,
    borderColor: '#2A30FF',
    flexDirection: 'row',
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    margin: 20,
  },
  text: {
    fontSize: 15,
  },
  textHeading: {
    margin: 10,
  },
});
