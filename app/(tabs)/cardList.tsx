import { StyleSheet, Text, View, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';


export default function CardList({ name, url, imageUrl }) {
    return (
      <View style={styles.card}>
      <Image source={{uri: imageUrl}} style={styles.image}/>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description}>{url}</Text> 
      </View>
  )
}

const styles = StyleSheet.create({
  subGrouping: {
    color: '#fafafa',
    fontFamily: 'sans-serif',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 10,
    marginTop: 40
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 3, // for shadow on Android
    shadowColor: '#000', // for shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginTop: 8,
  },
  image: {
    width: '50%',
    height: 200,
    borderRadius: 8,
  },

});
