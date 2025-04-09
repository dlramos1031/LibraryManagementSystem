// app/profile.jsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function ProfileScreen() {
  // Placeholder user data
  const user = {
    firstName: 'Juan',
    middleInitial: 'D',
    lastName: 'Dela Cruz',
    email: 'juan@example.com',
    gender: 'M',
    dateOfBirth: '2000-01-01',
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Name:</Text>
        <Text>{`${user.firstName} ${user.middleInitial}. ${user.lastName}`}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text>{user.email}</Text>

        <Text style={styles.label}>Gender:</Text>
        <Text>{user.gender}</Text>

        <Text style={styles.label}>Date of Birth:</Text>
        <Text>{user.dateOfBirth}</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0066cc',
    marginBottom: 24,
    textAlign: 'center',
  },
  infoBox: {
    gap: 12,
    marginBottom: 48,
  },
  label: {
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#ff4d4d',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
