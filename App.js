import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Home from './screens/Home';
import Credit from './screens/Credit';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Insurance from './screens/Insurance';
import Wealth from './screens/Wealth';
import History from './screens/History';
const App = () => {
  const [index, setIndex] = useState(1);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pageSection}>
        {index == 1 ? (
          <Home />
        ) : index == 2 ? (
          <Credit />
        ) : index == 3 ? (
          <Insurance />
        ) : index == 4 ? (
          <Wealth />
        ) : (
          <History />
        )}
      </View>
      <View style={styles.bottomNavigation}>
        <Pressable style={styles.bottomTab} onPress={() => setIndex(1)}>
          <View
            style={[
              styles.tabIconBg,
              {backgroundColor: index == 1 ? '#faeafd' : '#fff'},
            ]}>
            <MaterialCommunityIcon
              name="home-outline"
              size={25}
              color={index == 1 ? '#482880' : '#666666'}
            />
          </View>
          <Text
            style={[
              styles.bottomTabText,
              index == 1
                ? styles.bottomTabTextHighlight
                : styles.bottomTabTextNormal,
            ]}>
            Home
          </Text>
        </Pressable>
        <Pressable style={styles.bottomTab} onPress={() => setIndex(2)}>
          <View
            style={[
              styles.tabIconBg,
              {backgroundColor: index == 2 ? '#faeafd' : '#fff'},
            ]}>
            <MaterialIcon
              name="currency-rupee"
              size={24}
              color={index == 2 ? '#482880' : '#666666'}
            />
          </View>
          <Text
            style={[
              styles.bottomTabText,
              index == 2
                ? styles.bottomTabTextHighlight
                : styles.bottomTabTextNormal,
            ]}>
            Credit
          </Text>
        </Pressable>
        <Pressable style={styles.bottomTab} onPress={() => setIndex(3)}>
          <View
            style={[
              styles.tabIconBg,
              {backgroundColor: index == 3 ? '#faeafd' : '#fff'},
            ]}>
            <MaterialCommunityIcon
              name="shield-check-outline"
              size={25}
              color={index == 3 ? '#482880' : '#666666'}
            />
          </View>
          <Text
            style={[
              styles.bottomTabText,
              index == 3
                ? styles.bottomTabTextHighlight
                : styles.bottomTabTextNormal,
            ]}>
            Insurance
          </Text>
        </Pressable>
        <Pressable style={styles.bottomTab} onPress={() => setIndex(4)}>
          <View
            style={[
              styles.tabIconBg,
              {backgroundColor: index == 4 ? '#faeafd' : '#fff'},
            ]}>
            <MaterialCommunityIcon
              name="diamond-stone"
              size={25}
              color={index == 4 ? '#482880' : '#666666'}
            />
          </View>
          <Text
            style={[
              styles.bottomTabText,
              index == 4
                ? styles.bottomTabTextHighlight
                : styles.bottomTabTextNormal,
            ]}>
            Wealth
          </Text>
        </Pressable>
        <Pressable style={styles.bottomTab} onPress={() => setIndex(5)}>
          <View
            style={[
              styles.tabIconBg,
              {backgroundColor: index == 5 ? '#faeafd' : '#fff'},
            ]}>
            <MaterialIcon
              name="history"
              size={25}
              color={index == 5 ? '#482880' : '#666666'}
            />
          </View>
          <Text
            style={[
              styles.bottomTabText,
              index == 5
                ? styles.bottomTabTextHighlight
                : styles.bottomTabTextNormal,
            ]}>
            History
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faeafd',
  },
  pageSection: {
    flex: 0.92,
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
  },
  bottomTabTextHighlight: {
    color: '#482880',
    fontWeight: 600,
  },
  bottomTabTextNormal: {
    color: '#666666',
  },
  tabIconBg: {
    width: 50,
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
