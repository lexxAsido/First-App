import React from 'react'
import { ImageBackground, Text, View } from 'react-native'

export default function SignUp() {
  return (
    <View style={{flex:1, backgroundColor:"#11ecec5e"}}>
        <ImageBackground source={require("../../assets/lexmedia.png")} style={{flex:1, marginHorizontal:2}}>
        <Text>SignUp</Text>

        </ImageBackground>
    </View>
  )
}

