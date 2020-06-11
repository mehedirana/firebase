import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Item, Input, Label, Button } from 'native-base';
import Constants from 'expo-constants';
import * as firbase from 'firebase';
import { firebaseConfig } from './config'

firbase.initializeApp(firebaseConfig)

export default class App extends React.Component {

  state={
    text: "",
    myList:[],

  }

  componentDidMount(){
    const onData = firbase.database().ref("items")
    onData.on("value",dataShanp=>{
      console.log(dataShanp.val())
    })
  }
  saveData(){
    const inData = firbase.database().ref("users")
    inData.push().set({
      text: this.state.text,
      time: Date.now()
    })

  }

  render() {

    return (
      <View style={styles.container}>
        <Item floatingLabel>
          <Label>Enter Iteam</Label>
          <Input 
           value={this.state.text}
           onChangeText={(input)=>{this.setState({text:input})}}
          />
        </Item>
        {/* <Item floatingLabel last>
        <Label>Password</Label>
        <Input />
      </Item> */}
        <View style={{ flexDirection: "row", padding: 20, justifyContent: 'space-between' }}>
          <Button bordered success style={styles.mbtn}
          onPress={()=>{this.saveData()}}
          >
            <Text>ADD</Text>
          </Button>
          <Button bordered danger style={styles.mbtn}
          
          >
            <Text>DELETE</Text>
          </Button>

        </View>
      </View>
    );
  }
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
