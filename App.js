import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Item, Input, Label, Button, ListItem, List } from 'native-base';
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
    const onData = firbase.database().ref("users")
    onData.on("value",dataShanp=>{
      console.log(dataShanp.val())
      if(dataShanp.val()){
        this.setState({myList: Object.values(dataShanp.val())})
      }   
    })
  }
  saveData(){
    const inData = firbase.database().ref("users")
    inData.push().set({
      text: this.state.text,
      time: Date.now()
    })
    this.setState({text: ""})
  }


  removeData(){
    firbase.database().ref("users").remove()
    this.setState({myList:[{text: "remove successfully", time:"0"}]})
  }

  render() {
    console.log(this.state)
    const myMap = this.state.myList.map((item)=>{
      return(
        <ListItem style={{justifyContent:'space-between'}} key={item.time}>
          <Text>{item.text}</Text>
          <Text>{new Date(item.time).toDateString()}</Text>
        </ListItem>
      )
    })
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
          onPress={()=>{this.removeData()}}
          >
            <Text>DELETE</Text>
          </Button>

        </View>
        <List style={{justifyContent:'space-between'}}>
          {myMap}
        </List>
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
