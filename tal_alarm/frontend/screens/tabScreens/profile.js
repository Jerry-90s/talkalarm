import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={{ width: 24 }} />  
      </View>

      <Image 
        source={require('../assets/prof.png')} 
        style={styles.profileImage}
      />
      <Text style={styles.nameText}>Ifeoluwa Oladeni</Text>
      <Text style={styles.usernameText}>@ifeday</Text>
      <TouchableOpacity 
        style={styles.editButton} 
        onPress={() => navigation.navigate('EditProfile')} 
      >
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Option Buttons Container */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('Verification')}>
          <MaterialIcons name="account-circle" size={24} color="black" />
          <Text style={styles.optionText}>Verification</Text>
          <MaterialIcons name="chevron-right" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('ChangePassword')}>
          <MaterialIcons name="lock-outline" size={24} color="black" />
          <Text style={styles.optionText}>Change Password</Text>
          <MaterialIcons name="chevron-right" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('ReferFriend')}>
          <MaterialIcons name="card-giftcard" size={24} color="black" />
          <Text style={styles.optionText}>Refer a Friend</Text>
          <MaterialIcons name="chevron-right" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 29,
    fontWeight: '600',
    color: '#184E77',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    alignSelf: 'center',
  },
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 4,
  },
  usernameText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    alignSelf: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginLeft: 20,
    marginTop: 10,
  },
  editButton: {
    backgroundColor: '#184E77',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 30,
    alignSelf: 'center',
    width: 130,
  },
  editButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  optionsContainer: {
    backgroundColor: '#F6FAFD', 
    width: '100%',
    borderRadius: 20,
    marginTop: 13,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    marginBottom: 10,
    marginLeft: 15,
  },
  optionText: {
    flex: 1,
    marginLeft: 35,
    fontSize: 20,
    fontWeight: '600',
    color: '#184E77',
  }
});


export default Profile;
