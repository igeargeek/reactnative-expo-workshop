import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import axios from 'axios'

export default class App extends Component {
  state = {
    input: '',
    name: '',
    data: '',
  }

  getDataApi = () => {
    axios.get(`https://react-native-workshop-api.igeargeek.com/hola?tel=${this.state.input}`)
    .then((res) => {
      console.log('res.data.data.totalNumberMeaning.data',res.data.data.totalNumberMeaning.data)
      const { name='', data='' } = res.data.data.totalNumberMeaning.data
      this.setState({
        name,
        data,
      })
    })
    .catch((error) => {
      console.error(res.data.data.totalNumberMeaning.data)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.input}
          onChangeText={(text) => { this.setState({ input: text }) }}
          style={{ borderWidth: 1, width: 200, marginTop: 20, marginBottom: 20 }}
        />
        <Button
          onPress={this.getDataApi} 
          title="ดูคำทำนายเบอร์"
        />
        <View style={{ marginTop: 20, width: '100%' }} >
          <Text>ผลลัพธ์ : {this.state.name}</Text>
          <Text style={{ height:'70%' }} >คำอธิบาย : {this.state.data}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
