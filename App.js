import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const App = () => {
  const [index, setIndex] = useState(1);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.bottomTab} onPress={() => setIndex(1)}>
          <MaterialCommunityIcon
            name="home-outline"
            size={25}
            color={index == 1 ? '#482880' : '#666666'}
          />
          <Text style={styles.bottomTabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab} onPress={() => setIndex(2)}>
          <MaterialIcon
            name="currency-rupee"
            size={24}
            color={index == 2 ? '#482880' : '#666666'}
          />
          <Text style={styles.bottomTabText}>Credit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab} onPress={() => setIndex(3)}>
          <MaterialCommunityIcon
            name="shield-check-outline"
            size={25}
            color={index == 3 ? '#482880' : '#666666'}
          />
          <Text style={styles.bottomTabText}>Insurance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab} onPress={() => setIndex(4)}>
          <MaterialCommunityIcon
            name="diamond-stone"
            size={25}
            color={index == 4 ? '#482880' : '#666666'}
          />
          <Text style={styles.bottomTabText}>Wealth</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab} onPress={() => setIndex(5)}>
          <MaterialIcon
            name="history"
            size={25}
            color={index == 5 ? '#482880' : '#666666'}
          />
          <Text style={styles.bottomTabText}>History</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faeafd',
  },
  bottomNavigation: {
    flex: 0.08,
    backgroundColor: '#fff',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  bottomTab: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomTabText: {
    fontSize: 12,
    color: '#666666',
  },
  header: {
    flex: 0.92,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
