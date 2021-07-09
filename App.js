
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import useFetchData from './CustomHook/useFetchData';
const App = () => {
  const url ='https://reactnative.dev/movies.json'
  const {movies}  = useFetchData(url) || {};
  
  return (
    <SafeAreaView >
      <Text style={{ textAlign: 'center', marginTop: 30 }}>Example Custom Hook</Text>
      
        {
          movies?.map((item) => {
            return (
              <View key={item.id} style={{height:50,backgroundColor:'green',marginHorizontal:10,justifyContent:'center',alignItems:'center',marginTop:20}}>
                <Text>{item.id}</Text>
                <Text>{item.title}</Text>
              </View>
            )
          })
        }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
