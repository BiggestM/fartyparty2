import React from 'react';
import { View, StyleSheet, Modal, Button, FlatList } from 'react-native';
import Person from '../components/Person';

export default function Invitations({ route, navigation }) {
  const { people } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button onPress={() => navigation.navigate('Notifications')} title="Notifications" />
        <Button onPress={() => navigation.goBack()} title="Close" />
      </View>
      <FlatList
        data={people}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Person person={item} notPressable={true} />}
        contentContainerStyle={styles.container}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    paddingBottom: 25,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 300,
    marginTop: 20,
  },
});
