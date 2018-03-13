import React, {Component}  from 'react';
import {View , Text, Image,TextInput} from 'react-native';
import images from '../Themes/Images'


export default class Login extends Component{
	render(){
	  return(
      <View style={{flex:1,alignItems: 'center',justifyContent:'center'}}>
        <View style={{flex: 0.2}}>
          <Image
            source={images.duoLogo}
          />
        </View>
        <View style={{flex:0.2,flexDirection: 'row'}}>
          <View style={{flex:0.8}}>
            <Text>EMAIL</Text>
            <TextInput
              style={{height: 40}}
              placeholder=""
              onChangeText={(text) => this.setState({text})}
            />
          </View>
        </View>
        <View style={{flex:0.2,flexDirection: 'row'}}>
          <View style={{flex:0.8}}>
            <Text>PASSWORD</Text>
            <TextInput
              style={{height: 40}}
              placeholder=""
              onChangeText={(text) => this.setState({text})}
            />
          </View>
        </View>
      </View>
	  )
	}

}