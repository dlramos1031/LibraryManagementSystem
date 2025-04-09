// app/register.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function RegisterScreen() {
  const [form, setForm] = useState({
    firstName: '',
    middleInitial: '',
    lastName: '',
    email: '',
    gender: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create an Account</Text>

      <TextInput
        placeholder="First Name"
        style={styles.input}
        value={form.firstName}
        onChangeText={(value) => handleChange('firstName', value)}
      />
      <TextInput
        placeholder="Middle Initial"
        style={styles.input}
        maxLength={1}
        value={form.middleInitial}
        onChangeText={(value) => handleChange('middleInitial', value)}
      />
      <TextInput
        placeholder="Last Name"
        style={styles.input}
        value={form.lastName}
        onChangeText={(value) => handleChange('lastName', value)}
      />
      <TextInput
        placeholder="Email Address"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        value={form.email}
        onChangeText={(value) => handleChange('email', value)}
      />
      <TextInput
        placeholder="Gender (M/F/O/N)"
        style={styles.input}
        maxLength={1}
        value={form.gender}
        onChangeText={(value) => handleChange('gender', value)}
      />
      <TextInput
        placeholder="Date of Birth (YYYY-MM-DD)"
        style={styles.input}
        value={form.dateOfBirth}
        onChangeText={(value) => handleChange('dateOfBirth', value)}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={form.password}
        onChangeText={(value) => handleChange('password', value)}
      />
      <TextInput
        placeholder="Confirm Password"
        style={styles.input}
        secureTextEntry
        value={form.confirmPassword}
        onChangeText={(value) => handleChange('confirmPassword', value)}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#0066cc',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 14,
    marginBottom: 16,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#0066cc',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  link: {
    color: '#0066cc',
    textAlign: 'center',
  },
});
