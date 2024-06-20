// screens/Notifications.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Modal, Button, TextInput, Alert } from 'react-native';
import axios from 'axios';

export default function Notifications({ route, navigation }) {
  const { invitedPersons } = route.params || {};

  const [eventTitle, setEventTitle] = useState('');
  const [eventDateTime, setEventDateTime] = useState('');

  useEffect(() => {
    if (!invitedPersons || invitedPersons.length === 0) {
      Alert.alert(
        "No Users Selected",
        "You haven't selected any users to invite.",
        [
          { text: "OK", onPress: () => navigation.navigate('Dashboard') }
        ]
      );
    }
  }, [invitedPersons]);

  const sendInvite = async () => {
    try {
      const apiUrl = 'https://api.gigischool.com/api/invite';
      const invitedPeopleIds = invitedPersons.map(person => person.id);
      const requestData = {
        eventTitle,
        eventDateTime,
        invitedPeopleIds,
      };
      const response = await axios.post(apiUrl, requestData);
      console.log(response.data);
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Notifications</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Event Title"
          value={eventTitle}
          onChangeText={setEventTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Event Date/Time"
          value={eventDateTime}
          onChangeText={setEventDateTime}
        />
        <Button onPress={sendInvite} title="Invite" />
        <View style={styles.closeButton}>
          <Button onPress={() => navigation.goBack()} title="Close Modal" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  closeButton: {
    marginTop: 30,
  },
});
