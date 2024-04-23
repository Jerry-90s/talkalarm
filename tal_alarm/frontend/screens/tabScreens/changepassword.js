import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const ChangePassword = ({ navigation }) => {
  const [currentPasswordVisible, setCurrentPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        
        <Text style={styles.headerText}>Change Password</Text>
        <View style={{ width: 24 }} />  
      </View>

      
      <Text style={styles.label}>Current Password</Text>
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="lock-outline" size={24} color="black" />
        <TextInput 
          style={styles.input} 
          placeholder="Password"
          secureTextEntry={!currentPasswordVisible}
        />
        <TouchableOpacity onPress={() => setCurrentPasswordVisible(!currentPasswordVisible)}>
          <MaterialIcons name={currentPasswordVisible ? "visibility" : "visibility-off"} size={24} color="black" />
        </TouchableOpacity>
      </View>

      
      <Text style={styles.label1}>New Password</Text>
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="lock-outline" size={24} color="black" />
        <TextInput 
          style={styles.input} 
          placeholder="New Password"
          secureTextEntry={!newPasswordVisible}
        />
        <TouchableOpacity onPress={() => setNewPasswordVisible(!newPasswordVisible)}>
          <MaterialIcons name={newPasswordVisible ? "visibility" : "visibility-off"} size={24} color="black" />
        </TouchableOpacity>
      </View>

      
      <TouchableOpacity style={styles.saveButton} onPress={() => navigation.navigate('#')}>
        <Text style={styles.saveButtonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 70,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    top: 35,
    left: 0,
    right: 0,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'white',
  },
  backButton: {
    marginLeft: 10,
    color: '#184E77',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    color: '#184E77',
  },
  label: {
    alignSelf: 'flex-start',
    width: '100%',
    marginLeft: 20,
    marginBottom: 5,
    marginTop: 180,
    color: '#00000058',
  },
  label1: {
    alignSelf: 'flex-start',
    width: '100%',
    marginLeft: 20,
    marginBottom: 5,
    marginTop: 1,
    color: '#00000058',
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    marginBottom: 10,
    color: 'blue',
    marginLeft: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    padding: 15,
    borderWidth: 1.6,
    borderColor: '#184E77', 
    borderRadius: 25,  
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,

  },
  saveButton: {
    backgroundColor: '#184E77', 
    borderRadius: 25,
    width: '90%',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  saveButtonText: {
    color: 'white', 
    fontSize: 16,
    fontWeight: '500',
  }
});

export default ChangePassword;
