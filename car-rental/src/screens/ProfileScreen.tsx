import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, TextInput, ScrollView, Dimensions } from 'react-native';
import { IconButton } from 'react-native-paper';
import { AuthContext } from '../../store/auth-context';
import Icon from 'react-native-vector-icons/FontAwesome';

const window = Dimensions.get('window');
const screenHeight = window.height;

const ProfileScreen = ({ navigation }) => {
  const authCtx = useContext(AuthContext);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editedName, setEditedName] = useState(authCtx.user?.name || '');
  const [editedEmail, setEditedEmail] = useState(authCtx.user?.email || '');
  const [editedBio, setEditedBio] = useState(authCtx.user?.bio || '');

  const handleLogout = () => {
    authCtx.logout(navigation);
  };

  const handleEdit = () => {
    setIsEditModalVisible(true);
  };

  const handleSave = () => {
    // Assuming updateUser function in auth context takes an object with updated fields
    const updatedUser = {
      name: editedName,
      email: editedEmail,
      bio: editedBio,
      // Add other fields as needed
    };
  
    // Update user information in your authentication context or data storage
    authCtx.updateUser(updatedUser);
  
    // Close the edit modal
    setIsEditModalVisible(false);
  };

  const handleCancelEdit = () => {
    // Reset edited values
    setEditedName(authCtx.user?.name || '');
    setEditedEmail(authCtx.user?.email || '');
    setEditedBio(authCtx.user?.bio || '');

    // Close the edit modal
    setIsEditModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
          <Icon name="pencil" size={20} color="#fff" />
        </TouchableOpacity>  
      {/* Profile information */}
      <Image source={require('../../assets/profile-pictures/pfp1.jpeg')} style={styles.profilePicture} />
      <Text style={styles.name}>{authCtx.user?.name || ''}</Text>
      <Text style={styles.email}>{authCtx.user?.email || ''}</Text>
      <Text style={styles.bio}>{authCtx.user?.bio || ''}</Text>

      {/* Logout button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <IconButton icon="exit-to-app" color="#fff" size={24} />
        </TouchableOpacity>
      </View>

      {/* Edit Modal */}
      <Modal visible={isEditModalVisible} transparent animationType="slide">
        <View style={styles.editModalContainer}>
        <ScrollView contentContainerStyle={[styles.editModalContent, { marginTop: screenHeight / 4 }]}>
            <Text>Edit Profile</Text>
            <TextInput style={styles.input} placeholder="Name" value={editedName} onChangeText={(text) => setEditedName(text)} />
            <TextInput style={styles.input} placeholder="Email" value={editedEmail} onChangeText={(text) => setEditedEmail(text)} />
            <TextInput
              style={styles.input}
              placeholder="Bio"
              multiline
              numberOfLines={4}
              value={editedBio}
              onChangeText={(text) => setEditedBio(text)}
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={handleCancelEdit}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
  },
  bio: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  editButton: {
    backgroundColor: '#007bff',
    borderRadius: 30,
    padding: 10,
    position: 'absolute',
    top: 64,
    right: 16,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#007bff',
    borderRadius: 30,
    padding: 10,
  },
  editModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  editModalContent: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  saveButton: {
    backgroundColor: '#007bff',
    borderRadius: 30,
    padding: 10,
    alignItems: 'center',
    marginBottom: 8,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#ccc',
    borderRadius: 30,
    padding: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#333',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
