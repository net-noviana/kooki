import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar } from 'react-native';


export default function CardList({ name, imageUrl }) {
  return (

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

});
