// screens/Dashboard.js
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Button, StatusBar, SafeAreaView } from 'react-native';
import axios from 'axios';
import Spinner from '../components/Spinner';
import Person from '../components/Person';
import PersonModal from '../components/PersonModal';

const personsUrl = 'https://api.gigischool.com/api/people';

const Dashboard = ({ navigation }) => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState({});
  const [personModal, setPersonModal] = useState(false);
  const [invitedPersons, setInvitedPersons] = useState([]);
  const [invitesModal, setInvitesModal] = useState(false);
  const [notificationsModal, setNotificationsModal] = useState(false);

  const getPeople = async () => {
    setLoading(true);
    const result = await axios.get(personsUrl);
    setPeople(result.data);
    setLoading(false);
  };

  const addInvite = (newPerson) => {
    setInvitedPersons((prevPersons) => {
      const existingPerson = prevPersons.find(
        (person) => person.id == newPerson.id
      );
      if (!existingPerson) {
        return [...prevPersons, newPerson];
      }
      return prevPersons;
    });
  };

  const cleanInvites = () => {
    setInvitedPersons([]);
  };

  useEffect(() => {
    getPeople();
  }, []);

  if (loading) return <Spinner />;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Button onPress={() => navigation.navigate('Invitations', { people: invitedPersons })} title="Invited Persons" />
        <FlatList
          data={people}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Person person={item} modalOn={() => setPersonModal(true)} setPerson={() => setPerson(item)} />
          )}
          contentContainerStyle={styles.flatListContent}
        />
        <PersonModal
          visible={personModal}
          person={person}
          closeModal={() => setPersonModal(false)}
          addInvite={() => addInvite(person)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  flatListContent: {
    paddingBottom: 100,
  },
});
