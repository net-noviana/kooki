import { StyleSheet, Text, View, TextInput, Alert, Button, Modal, Touchable, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';


export default function HomeScreen() {
  const [org, setrOrg] = useState('');
  const [name, setName] = useState('');
  const [email, resetEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [adress, setAdress] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = useState('first');
    
  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (org && name && email && phone && adress) {
      if (emailRegex.test(email)) {
        setModalVisible(true);
      } else {
        Alert.alert('Invalid Email', 'Please Enter a Valid Email Address')
      }
    } else {
        alert("Please fill all fields!")
    }
  };
  
  const closeModal = () => {
    setModalVisible(false);
  };
    
  return (
    <ScrollView style={{
      display: 'flex', 
      flexDirection: 'column', 
      padding: 30,
      marginTop: 30,
      backgroundColor: '#ddd', 
    }}
    >
      
      <ThemedView style={{
        shadowColor: '', 
        backgroundColor: '',
        display: 'flex',
        marginBottom: 20,
      }}>
        <ThemedText
          type="title"
          style={{
            color: '#0a0a0a',
            fontFamily: 'sans-serif',
          }}
        >Register User Baru</ThemedText>
      </ThemedView>
      
      <Text
          style={styles.subGrouping}
        >Data Organisasi
        </Text>
     
        <Text
          style= {styles.label}
        >Organisasi</Text> 
        <TextInput 
          style={styles.input}
          placeholder='Enter Your Organization'
          value={org}
          onChangeText={setrOrg}
        ></TextInput>

      <View style={{
        marginBottom: 20
      }}/>

      <Text
          style={styles.subGrouping}
        >Data User
      </Text>
      
      <Text
          style= {styles.label}
        >Nama Lengkap</Text> 
        <TextInput 
          style={styles.input}
          placeholder='Enter Your Name'
          value={name}
          onChangeText={setName}
      ></TextInput>

      <Text
          style= {styles.label}
        >Email</Text> 
        <TextInput 
          style={styles.input}
        placeholder='Enter Your Email'
        value={email}
        onChangeText={resetEmail}
        keyboardType='email-address' //Mengatur jenis keyboard agar sesuai dengan kebutuhan input email
        autoCapitalize='none' //menghindari auto kapital pada huruf pertama
        autoCorrect={false} //mengatasi auto-correct
      ></TextInput>

      <Text
          style= {styles.label}
        >No. HP</Text> 
        <TextInput 
          style={styles.input}
          placeholder='Enter Your Number'
          value={phone}
          onChangeText={setPhone}
          keyboardType='phone-pad' //mengatur auto number pada keyboard
          maxLength={13} //membatasi jumlah inputan
      ></TextInput>

      <Text
        style= {styles.label}
        >Alamat</Text> 
        <TextInput 
        style={styles.textArea}
        placeholder='Enter Address'
        value={adress}
        onChangeText={setAdress}        
        multiline={true} //untuk bisa input teks dalam beberapa baris
        numberOfLines={4} //menentukan jumlah baris yang ditampilkan sebagai tinggi awal textarea
      ></TextInput>

      {/* RADIOBUTTON */}
      <View style={{
        padding : 10
      }}>
        <RadioButton.Group onValueChange={newValue => setChecked(newValue)} value={checked}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 2
          }}>
            <RadioButton value='Pria' />
            <Text>Pria</Text>
          </View>

          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 2
          }}>
            <RadioButton value='Wanita' />
            <Text>Wanita</Text>
          </View>
        </RadioButton.Group>
      </View>
    
    {/* <View style={{marginBottom: 0}} /> */}
      <Button title='Register' onPress={handleSubmit} />

      <View style={styles.resultInpuTitle}>
        {/* <View style={styles.resultInput}> */}
        <Text style={styles.label}>Organisasi: {org ? (org) : ('-')}</Text>
        <Text style={styles.label}>Nama: {name ? (name) : ('-')}</Text>
        <Text style={styles.label}>Email: {email ? (email) : ('-')}</Text>
        <Text style={styles.label}>No. HP: {phone ? (phone) : ('-')}</Text>
        <Text style={styles.label}>Alamat: {adress ? (adress) : ('-')}</Text>
        <Text style={styles.label}>Gender: {checked ? (checked) : ('-')}</Text>      

      {/* </View> */}
      </View>
      

      {/* Modal Popup */}
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
      {/* Menampilkan hasil input di modal popup*/}
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.subGrouping}>Data Submitted</Text>
            <Text style={styles.label}>Organisasi: {org}</Text>
            <Text style={styles.label}>Nama: {name}</Text>
            <Text style={styles.label}>Email: {email}</Text>
            <Text style={styles.label}>No. HP: {phone}</Text>
            <Text style={styles.label}>Alamat: {adress}</Text>
            <Text style={styles.label}>Gender: {checked}</Text>
          
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.label}>Close</Text>
      </TouchableOpacity>
          </View>
        </View>        
      </Modal>
      
    
    </ScrollView>  
    

  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#a3a3a3',
    borderWidth: 3,
    marginBottom: 10,
    paddingHorizontal: 5,
    color: '#0a0a0a',    
  },

  label: {
    color: '#0a0a0a',
    fontFamily: 'sans-serif',
    fontSize: 16,
    marginBottom: 5
  },

  subGrouping: {
    color: '#0a0a0a',
    fontFamily: 'sans-serif',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 10
  },

  textArea: {
    height: 100,
    justifyContent: 'center',
    borderColor: '#a3a3a3',
    borderWidth: 3,
    paddingHorizontal: 5,
    paddingTop: 5,
    textAlignVertical: 'top', //teks yang dimasukkan berada di bagian atas area teks
    color: '#0a0a0a',
  },

  email: {
    height: 40,
    borderColor: '#a3a3a3',
    borderWidth: 3,
    marginBottom: 10,
    paddingHorizontal: 5,
    color: '#0a0a0a',
  },

  resultInput: {
    marginTop: 1,
    padding: 5,
    borderColor: '#a3a3a3',
    borderWidth: 3,
    backgroundColor: '#f9f9f9'    
  },

  closeButton: {
    marginTop: 20,
    backgroundColor: '#14b8a6',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,    
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

  resultInpuTitle: {
    marginTop: 10,
    color: '#0a0a0a',
    fontFamily: 'sans-serif',
    fontSize: 20,
    fontWeight: '800'
  },
});
