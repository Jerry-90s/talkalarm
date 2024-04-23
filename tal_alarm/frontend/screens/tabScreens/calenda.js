import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Card, Avatar } from 'react-native-paper';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Calenda = ({ route }) => {
  const [items, setItems] = useState({});

  const { title, description, date } = route.params || {};

  React.useEffect(() => {
    if (title && date) {
      addTalk(title, description, date);
    }
  }, [title, description, date]);

  const loadItems = (day) => {
    setTimeout(() => {
      const currentDate = new Date();
      const endDate = new Date(2041, 6, 31); // July 31, 2041
      const diffDays = Math.round((endDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));
  
      for (let i = -15; i < diffDays; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
  
        if (!items[strTime]) {
          items[strTime] = [];
        }
      }
  
      setItems({ ...items }); // Update the state with the existing items
    }, 1000);
  };

  const addTalk = (title, description, date) => {
    if (!items[date]) {
      items[date] = [];
    }
    items[date].push({ title, description, height: 80 }); // Increase the height for the description
    setItems({ ...items });
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
        <Card>
          <Card.Content>
          <View
            style={{
              ...styles.taskContent,
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}
                >
              <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  // Get the current date
  const currentDate = new Date().toISOString().split('T')[0];

  return (
    <View style={{ flex: 1 }}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={currentDate}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  taskContent: {
    marginLeft: 10,
    backgroundColor: "#F6FAFD",
    padding: 15,
    borderRadius: 13,
    fontWeight: "500"
  },
})

export default Calenda;