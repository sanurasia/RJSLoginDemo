/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import  React, { Component,useState, useEffect} from 'react';
import {Button, View, Text,Animated} from 'react-native';
import { createAppContainer } from 'react-navigation';
import{ createStackNavigator } from 'react-navigation-stack';
import SignUp from './Components/SignUp';
import LoginForm from './Components/LoginForm';

//import { Animated} from 'react-native';

const FadeInView = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0))  // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 10000,
      }
    ).start();
  }, [])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}



class HomeScreen extends React.Component {
  render(){
    return (
      <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
      
       <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
      </FadeInView>
       <Button
       title = "SignUp"
       //onPress={() => this.props.navigation.navigate('Details', { data: { title: 'Home Screen'}
       onPress={() => this.props.navigation.navigate('SignUp', { data: { title: 'SignUp Screen'}
       })}
       />

      <Button
       title = "Sign In"
       //onPress={() => this.props.navigation.navigate('Details', { data: { title: 'Home Screen'}
       onPress={() => this.props.navigation.navigate('Login', { data: { title: 'Login Screen'}
       })}
       />
       
       </View>
    );
  }
}

class DetailsScreen extends React.Component {
   render(){
    var { title } = this.props.navigation.state.params.data
     return (
       <View style = {{flex:1, alignItems:'center', justifyContent:'center'}}>
         <Text> Coming from {title}</Text>
         <Button
         title = "Go to Details   yo to  again.. "
         onPress= {() => this.props.navigation.push('Details')}
         />
         <Button
         title = "Go To Home"
         onPress = {() => this.props.navigation.navigate('Home')}
         />
         <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
       </View>
     );
   }
}


class A extends React.Component{
  render(){
    var { title } = this.props.navigation.state.params.data
     return (
       <View style = {{flex:1, alignItems:'center', justifyContent:'center'}}>
         <Text> Coming from {title}</Text>
        
       </View>
     );
   }
}


const AppNavigator = createStackNavigator( {
  Home: HomeScreen,
  //Details: DetailsScreen,
  SignUp : SignUp,
  Login : LoginForm,
},
{headerLayoutPreset: 'center'},
{
  initialRouteName: 'Home',
  navigationOptions: ({navigation}) => ({
    
  header: <AppBar title={navigation.getParam('appBar', {title: ''}).title}/>,
   // headerTitleStyle: { flex: 1, textAlign: 'center'},
    
}),
cardStyle: {
    backgroundColor: 'white'
}
}
);

export default createAppContainer(AppNavigator);
