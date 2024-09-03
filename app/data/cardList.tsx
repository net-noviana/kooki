import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, Modal } from 'react-native';
import React, { useState } from 'react';

export default function CardList({ name, imageUrl }) {
  const [modalVisible, setModalVisible] = useState(false);
  const closeModal = () => {
    setModalVisible(false);
  };
  const trueModal = () => { setModalVisible(true) };
  return (
<TouchableOpacity onPress={trueModal}>

    <View style={styles.containerParent}>
      <View style={styles.card}>
        <View style={styles.container}>
          <View style={styles.imgSection}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
          </View>
          <View style={styles.sectionContentText}>
            <Text style={styles.title}>{name}</Text>
            {/* <Text style={styles.description}>{url}</Text>  */}

          </View>
        
        </View>
      </View>
      </View>
      <Modal
      animationType='slide'
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
        <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.label}>Close</Text>
          </TouchableOpacity>
          </View>
          </View>
</Modal>
</TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',  // Mengatur layout untuk menempatkan konten secara horizontal
  },
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
    padding: 3,
    marginVertical: 2,
    marginHorizontal: 10,
    borderRadius: 10,
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
    width: '60%',
    height: 70,
    borderRadius: 8,
    padding: 10

  },
  sectionContentText: {
    // backgroundColor: '#f97316',
    // width: 100,
    padding: 10,
    flex: 1, // Mengambil sisa ruang yang tersedia
  },
  imgSection: {
    // backgroundColor: '#facc15',
    padding: 10,
    width:150
  },
  containerParent: {
    paddingTop: StatusBar.currentHeight,
    // display: 'flex',
    flex: 1,
    // backgroundColor: '#facc15',
    // marginTop: 40
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#14b8a6',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,    
  },
  label: {
    color: '#0a0a0a',
    fontFamily: 'sans-serif',
    fontSize: 16,
    marginBottom: 5
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',   
  },
  modalContent: {
    width: 350,
    padding: 30,
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'flex-start',
  },

});
