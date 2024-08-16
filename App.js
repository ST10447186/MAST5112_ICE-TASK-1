import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const hobbies = ['Reading', 'Coding', 'Hiking', 'Cooking'];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to My Personalized App!</Text>
      <Text style={styles.subHeading}>Here are my hobbies for today:</Text>
      {hobbies.map((hobby, index) => (
        <Text key={index} style={styles.hobby}>
          {index + 1}. {hobby}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 18,
    marginBottom: 10,
  },
  hobby: {
    fontSize: 16,
    marginVertical: 5,
  },
});
