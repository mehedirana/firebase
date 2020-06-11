import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Item, Input, Label, Button } from 'native-base';
import Constants from 'expo-constants';
import * as firbase from 'firebase';
import {firebaseConfig} from './config'

firbase.initializeApp(firebaseConfig)
export default function App() {
  return (
    <View style={styles.container}>
      <Item floatingLabel>
        <Label>Enter Iteam</Label>
        <Input />
      </Item>
      {/* <Item floatingLabel last>
        <Label>Password</Label>
        <Input />
      </Item> */}
      <View style={{ flexDirection: "row", padding: 20, justifyContent: 'space-between' }}>
      <Button bordered success style={styles.mbtn}>
            <Text>ADD</Text>
          </Button>
          <Button bordered danger style={styles.mbtn}>
            <Text>DELETE</Text>
          </Button>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
    padding: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  mbtn: {
    padding: 20,
    width: 160,
    justifyContent: 'center',
  }
});
