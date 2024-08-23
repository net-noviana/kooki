import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import Card from './cardList';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // URL API untuk data
        // const dataUrl = 'https://jsonplaceholder.typicode.com/posts';
        // // URL API untuk gambar
        // const imageUrl = 'https://jsonplaceholder.typicode.com/photos'; 
        const dataUrl = 'https://pokeapi.co/api/v2/pokemon/';
        const imageUrl = 'https://ui-avatars.com/api/?background=0D8ABC&color=fff';

        // Ambil data dari kedua API
        const [dataResponse, imageResponse] = await Promise.all([
          axios.get(dataUrl),
          axios.get(imageUrl),
        ]);

        // Gabungkan data berdasarkan id yang sama
        const combinedData = dataResponse.data.slice(0, 20).map((item) => ({
          // id: item.id,
          name: item.name,
          url: item.url,
          imageUrl: imageResponse,
        }));

        setData(combinedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <Card name={item.title} url={item.description} imageUrl={item.imageUrl} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
