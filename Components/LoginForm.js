/*import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'react-native';
export default class LoginForm extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}*/


import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen'
import { HeaderTitle } from 'react-navigation-stack'

export default class LoginForm extends React.Component {
  static navigationOptions = {
    title: 'Login',
    headerStyle: {
      backgroundColor: 'blue',
    },
    headerTintColor: '',
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'right'
      
    },
    
  };


  state = {
    username: '', password: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signIn = async () => {
    const { username, password} = this.state
    try {
      // here place your signup logic
      console.log('user successfully signed in!: ', success)
    } catch (err) {
      console.log('error sign in: ', err)
    }
  }
 
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
        


        
        
        
        <Button
          title='SignIn'
          onPress={this.signIn}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})



