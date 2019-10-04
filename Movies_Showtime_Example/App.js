import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MovieNavigation from './component/navigations/MovieNavigation';

export default function App() {

  return (
    <View style={styles.container}>
      {/* <MovieNavigation /> */}
      <Text style={{marginTop: 50, alignSelf: 'center'}}>Example Movies Showtime</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});