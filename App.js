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
        <Label>Username</Label>
        <Input />
      </Item>
      <Item floatingLabel last>
        <Label>Password</Label>
        <Input />
      </Item>
      <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
      <Button rounded success>
            <Text>Success</Text>
          </Button>
          <Button rounded danger>
            <Text>Danger</Text>
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
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
