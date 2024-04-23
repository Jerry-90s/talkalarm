import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Notification = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <MaterialIcons name="arrow-back" size={24} color="#184E77" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notification</Text>
        <View style={{ width: 24 }} /> 
      </View>

      <Text style={styles.timeLabel}>Today</Text>
      <View style={styles.notificationContainer}>
        <Text style={styles.title}>Gym Time</Text>
        <Text style={styles.subtitle}>Gym in 10 minutes</Text>
      </View>

      <View style={styles.notificationContainer}>
        <Text style={styles.title}>Ball Time</Text>
        <Text style={styles.subtitle}>Ball time tasks was successfully completed</Text>
      </View>

      <Text style={styles.timeLabel}>This week</Text>
      <View style={styles.notificationContainer}>
        <Text style={styles.title}>Gym Time</Text>
        <Text style={styles.subtitle}>Gym time in 10 minutes</Text>
      </View>

      <View style={styles.notificationContainer}>
        <Text style={styles.title}>Work Time</Text>
        <Text style={styles.subtitle}>Work time is now!</Text>
      </View>

      <Text style={styles.timeLabel}>Last week</Text>
      <View style={styles.notificationContainer}>
        <Text style={styles.title}>Study Time</Text>
        <Text style={styles.subtitle}>Study time was not completed</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
    marginBottom: 20,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#184E77',
  },
  timeLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#184E773E',
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  notificationContainer: {
    backgroundColor: '#0E97FF1E', 
    borderRadius: 20,
    padding: 15,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#184E77C6',
  },
  subtitle: {
    fontSize: 14,
    color: 'black'
  }
});

export default Notification;
