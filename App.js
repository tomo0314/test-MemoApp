import React from 'react';
import { StyleSheet, View } from 'react-native';
import Appbar from './src/components/Appbar.js';
import MemoList from './src/components/MemoList.js';
import CircleButton from './src/elements/CircleButton.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar />
      <MemoList />
      <CircleButton>+</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
});
