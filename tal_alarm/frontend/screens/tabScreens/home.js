import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, ImageBackground, Alert } from 'react-native';
import axios from 'axios';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const Home = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://172.20.10.4:8081/api/tasks');
        console.log(response.data); // Log to see what is returned
        if (Array.isArray(response.data)) { // Check if the data is an array
          setTasks(response.data);
        } else {
          throw new Error('Data fetched is not an array');
        }
      } catch (error) {
        Alert.alert('Error', 'Unable to fetch tasks: ' + error.message);
        console.error('Fetch error:', error); // More detailed error logging
      }
    };
    fetchTasks();
  }, []);
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/logo2.png')} style={styles.logo} />
        <TouchableOpacity onPress={() => navigation.navigate('Notification')} style={styles.notify}>
          <MaterialIcons name="notifications" size={30} color="#184E77" />
        </TouchableOpacity>
      </View>
      <Text style={styles.greeting}>Hey, Ifeoluwa</Text>
      <Text style={styles.subheader}>What's your plan?</Text>
      <ImageBackground 
        source={require('../assets/rectangle.png')} 
        style={styles.dateBox}
        imageStyle={styles.dateBoxImage}
      >
        <View style={styles.dateColumn}>
          <Text style={styles.dateDay}>Mon 10</Text>
          <Text style={styles.dateMonth}>January</Text>
        </View>
        <View style={styles.timeColumn}>
          <Text style={styles.time}>10:00</Text>
          <Text style={styles.period}>AM</Text>
        </View>
      </ImageBackground>
      <Text style={styles.upcoming}>Upcoming tasks</Text>
      <View style={styles.taskLine}>
        <View style={styles.line} />
        <View style={styles.tasksContainer}>
          {tasks.map((task, index) => (
            <View key={index} style={styles.task}>
              <View style={[styles.circle, { backgroundColor: task.color }]} />
              <View style={styles.taskContent}>
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                  <Text style={styles.taskTitle}>{task.title}</Text>
                  <View style={[styles.circles, { backgroundColor: task.color }]}/>
                </View>
                <Text style={styles.taskDescription}>{task.description}</Text>
                <View style={styles.taskDetails}>
                  <MaterialIcons name="access-time" size={14} color="black" />
                  <Text style={styles.taskTime}>{task.time}</Text>
                  <MaterialCommunityIcons name="calendar" size={14} color="black" />
                  <Text style={styles.taskDate}>{task.date}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 100,
    alignSelf: 'center',
    marginTop: -1,
    marginBottom: -21,
    resizeMode: 'contain',
  },
  notify: {
    marginTop: 8,
  },
  greeting: {
    fontSize: 19,
    marginTop: 20,
    marginBottom: -12,
  },
  subheader: {
    fontSize: 30,
    fontWeight: '600',
    marginTop: 10,
    color: '#184E77',
  },
  dateBox: {
    flexDirection: 'row',
    width: 335,
    height: 150,
    padding: 15,
    borderRadius: 10,
    borderWidth: 0,
    marginTop: 15,
    overflow: 'hidden',
  },
  dateBoxImage: {
    resizeMode: 'cover',
  },
  dateColumn: {
    marginTop: 20,
    flex: 2,
  },
  timeColumn: {
    marginTop: 20,
    flex: 1,
  },
  dateDay: {
    fontSize: 35,
    fontWeight: '400',
    color: 'white',
  },
  dateMonth: {
    fontWeight: '600',
    fontSize: 34,
    color: 'white',
  },
  time: {
    fontSize: 35,
    fontWeight: '600',
    color: 'white',
  },
  period: {
    fontSize: 34,
    fontWeight: '600',
    color: 'white',
  },
  upcoming: {
    fontSize: 23,
    fontWeight: '500',
    color: '#184E77',
    marginTop: 20,
  },
  taskLine: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  line: {
    width: 2,
    backgroundColor: 'grey',
    flex: 1,
    height: "100%",
    position: "absolute",
    left: 3.5
  },
  tasksContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  circle: {
    width: 9,
    height: 8,
    borderRadius: 12,
    position: 'absolute',
    top: 0,
  },
  circles: {
    width: 9,
    height: 8,
    borderRadius: 12,
  },
  task: {
    paddingLeft: 10,
    marginBottom: 20
  },
  taskContent: {
    marginLeft: 10,
    backgroundColor: "#F6FAFD",
    padding: 15,
    borderRadius: 13,
    fontWeight: "500"
  },
  taskTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 23.46,
    color: "#184E77",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  taskDescription: {
    fontSize: 14,
  },
  taskDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  taskTime: {
    marginLeft: 2,
    marginRight: 12
  },
  taskDate: {
    marginLeft: 2,
  },
});

export default Home;
