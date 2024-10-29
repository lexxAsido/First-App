import React, { useCallback, useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { Image } from 'react-native';
import { Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Theme } from '../Component/Theme';

SplashScreen.preventAutoHideAsync();

export default function Intro({navigation}) {
    

    return (
        <View style={{ flex: 1, alignContent:"center" }}>
            <ImageBackground source={require("../../assets/news.jpg")} style={{ flex: 1 }}>

                <View>
                    <Image source={require("../../assets/lexmedia.png")} style={styles.logo} />
                    <Text style={styles.description}>
                        <Text style={{ fontFamily: Theme.fonts.brand, fontSize: 35, color: Theme.colors.primary }}>LexxMedia</Text> is a dynamic platform delivering the latest in entertainment, news, and pop culture.
                        Stay informed with trending stories, exclusive updates, and engaging content from around the world.
                    </Text>
                </View>

                <TouchableOpacity onPress={()=>{navigation.navigate("Login")}}>
                    <Button mode='elevated' textColor='black' buttonColor='cyan' icon="login"  style={{elevation:20, marginTop:90, marginHorizontal:20}}>Login</Button>
                </TouchableOpacity>

                <TouchableOpacity style={{alignContent:"center"}} onPress={()=>{navigation.navigate("SignUp")}}>
                    
                    <Button mode='elevated' textColor='black' buttonColor='#f3ef15'  style={{elevation:20, marginTop:10, marginHorizontal:20,}}>
                    <FontAwesomeIcon icon={faUser}/>
                        Create Account</Button>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    logo: {
        width: 367,
        height: 300,
        marginLeft: 11,
        marginTop: 50,
        // borderWidth:3,
        // borderColor:"red"

    },
    description: {
        color: "#d8e0e6",
        fontFamily:Theme.fonts.text500,
        paddingHorizontal: 10,
        textAlign: "center",
        fontSize: 20,

    },

})