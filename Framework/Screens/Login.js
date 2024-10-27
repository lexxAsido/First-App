import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons/faArrowRightToBracket";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useEffect, useState, useCallback } from "react";
import { Alert, FlatList, TouchableOpacity } from "react-native";
import { Button, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import {Button as Btn} from "react-native-paper"
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {Pacifico_400Regular} from '@expo-google-fonts/pacifico';


SplashScreen.preventAutoHideAsync();

export default function Login({navigation}) {
    const [email, setEmail] = useState("");
    const [users, setUsers] = useState(["alex@gmail.com", "ben@gmail.com", "lex@gmail.com", "maldini@gmail.com", "eto@gmail.com", "honcho@gmail.com"]);
    
    const [password, setPassword] = useState("");


    const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        
        await Font.loadAsync({Pacifico_400Regular});
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
      
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

    return (
        <View style={{flex:1}}>

            <ImageBackground source={require("../../assets/news.jpg")} style={{ width: "100%", flex: 1 }}>
        <ScrollView >

               

            <View style={styles.shadow}>

                <View style={styles.container}>
                    <View style={{flexDirection:"row", gap:8, justifyContent:"center", alignItems:"center"}}>
                        <FontAwesomeIcon icon={faArrowRightToBracket} size={30} />
                        <Text style={{ fontSize:30, fontFamily:"Pacifico_400Regular" }}>Lexx Media</Text>
                    </View>
                    <View>
                       
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Email"
                            placeholderTextColor={"#15eeee85"}
                            onChangeText={(input) => setEmail(input)}
                            value={email}
                        />
                    </View>

                    <View>
                        {/* <Text style={styles.label}>Password:</Text> */}
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Password"
                            placeholderTextColor={"#15eeee8a"}
                            secureTextEntry={true}
                            onChangeText={(input) => setPassword(input)}
                            // value={password}
                        />
                    </View>

                    <TouchableOpacity
                    onPress={()=>{
                        
                        if (!users.includes(email)) {
                            setUsers([...users, email]);
                            setEmail("");

                            Alert.alert(
                                "Login Status", "Login Successful, Welcome Onboard",
                                [
                                    {text: "activated",  onPress: ()=> alert("Your Account has been Activated")},
                                    {text: "Delete", style: 'destructive', onPress: ()=>console.log("Account deleted")}
                                ]
                            )
                        } 
                        else {
                            Alert.alert("Error", "This email is already registered" )
                        }
                        navigation.navigate("News")
                        }}>
                        
                        <Btn mode='elevated' textColor='black' buttonColor='#f3ef15'  style={{elevation:20, marginTop:10, marginHorizontal:20,}} >SignIn</Btn>
                    </TouchableOpacity>

                    
                    <View style={{flexDirection:"row", justifyContent: "space-between"}}>
                    <TouchableOpacity>
                    <Text style={{color:"#df0b0b", fontWeight:800, padding:5}}>Forgot Password</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{navigation.navigate("SignUp")}}>
                    <Text style={{ fontWeight:900, padding:5}}>Create Account</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                </View>

                <FlatList horizontal
                    data={users}
                    renderItem={({item}) => {
                        return (
                            <View style={styles.item}>
                                <Text style={{color:"#ffffff", paddingHorizontal:9}}>{item}</Text>
                                <Text style={{backgroundColor:"#eb0707", padding:1, paddingHorizontal:3, color:"white", position:"absolute", top:0, right:0}}>Delete</Text>
                            </View>
                        )
                    }}
                    />

                    {/* <Btn mode="contained" icon="file" buttonColor="cyan" textColor="black" style={{shadowColor:"#eeede3",
            shadowOpacity:0.9,
            shadowRadius: 20,
            shadowOffset: {height:0, width: 30},}}>Upload Image</Btn> */}

        </ScrollView>
            </ImageBackground>
</View>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 367,
        height: 200,
        marginLeft: 11,
        marginTop: 10,
        
    },
    description: {
        color: "#d8e0e6",
        fontWeight: "800",
        paddingHorizontal: 10,
        textAlign: "center",
        fontSize: 15,
        
    },
    container: {
        marginTop: 0,
        padding: 10,
    },
    label: {
        marginLeft: 10,
        fontSize: 15,
        fontWeight: "900",
        color: "#ebdc17",
    },
    input: {
        backgroundColor: "#0d0e0e",
        padding: 6,
        borderRadius: 50,
        marginVertical: 10,
        fontSize: 20,
        textAlign: "center",
        color:"#ffffff",
        fontWeight:"800",
        fontFamily:"Pacifico_400Regular",
    },

    signin: {
        backgroundColor: "#f0dd0f",
        color:"#0c0c0c",
        fontSize:20,
        padding: 5, 
        textAlign: "center", 
        fontWeight: "bold", 
        fontFamily:"Pacifico_400Regular",
        // borderRadius: 100,
        marginVertical:12,
        marginHorizontal:20,
        shadowColor:"#0d0e0d",
        shadowOpacity:0.9,
        shadowRadius: 20,
        shadowOffset: {height:0, width: 30},
    },
        socialContainer: {
            flexDirection: "row",        
            justifyContent: "center",    
            alignItems: "center",        
            marginVertical: 10,          
        },
    
        socialText: {
            color: "#ebd50f",            
            marginHorizontal: 10,        
            fontWeight: "bold",          
            fontSize: 16,                
        },
        item: {
            padding:8,
            marginVertical: 5,
            borderWidth:0.5,
            borderColor:'#ebd50f'
        },
        shadow: {
            backgroundColor:"#ffffffb7",
            width: 350,
            height: 300,
            borderRadius: 20,
            marginTop:"70%",
            elevation: 10,
            shadowColor:"#15eeee",
            shadowOpacity:1,
            shadowRadius: 20,
            shadowOffset: {height:10, width: 10},
            alignSelf:"center",
            marginVertical: 20,
        },
});
