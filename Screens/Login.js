import { useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import { Button, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function Login() {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");



    return (
        <View style={{flex:1}}>

            <ImageBackground source={require("./assets/news.jpg")} style={{ width: "100%", flex: 1 }}>
        <ScrollView >

                <View >
                    <Image source={require("./assets/lexmedia.png")} style={styles.logo} />
                    <Text style={styles.description}>
                        LexMedia is a dynamic platform delivering the latest in entertainment, news, and pop culture.
                        Stay informed with trending stories, exclusive updates, and engaging content from around the world.
                    </Text>
                </View>

                <View style={styles.container}>
                    <View>
                        <Text style={styles.label}>Username:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Username"
                            placeholderTextColor={"#0000005e"}
                            onChangeText={(input) => setUserName(input)}
                            value={userName}
                        />
                    </View>

                    <View>
                        <Text style={styles.label}>Email:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Email"
                            placeholderTextColor={"#0000005e"}
                            onChangeText={(input) => setEmail(input)}
                            value={email}
                        />
                    </View>

                    <View>
                        <Text style={styles.label}>Password:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Password"
                            placeholderTextColor={"#00000052"}
                            secureTextEntry={true}
                            onChangeText={(input) => setPassword(input)}
                            value={password}
                        />
                    </View>

                    <TouchableOpacity
                    onPress={()=>{
                        Alert.alert(
                            "Registration Status", "Registration Successful, Welcome Onboard",
                            [
                                {text: "activated",  onPress: ()=> alert("Your Account has been Activated")},
                                {text: "Delete", style: 'destructive', onPress: ()=>console.log("Account deleted")}
                            ]
                        )
                    }}>
                        <Text style={styles.signin}>Sign In</Text>
                    </TouchableOpacity>

                    {/* <Text style={{color:"cyan", alignSelf:"center", marginVertical:5, fontSize:25, fontWeight:700}}>OR</Text> */}
                    {/* <Button title="Create Account"/> */}
                    <View style={{flexDirection:"row", justifyContent: "space-between"}}>
                    <Text style={{color:"#df0b0b", fontWeight:800}}>Forgot Password</Text>
                    <Text style={{color:"#ebd50f", fontWeight:900}}>Create Account</Text>
                    </View>
                </View>

                <Text style={{color:"#09bcf3", fontWeight:900, textAlign:"center", fontSize:15, backgroundColor:"#0a0a01", padding:10}}>Follow us on Socials</Text>
                <View style={styles.socialContainer}>
                <Text style={styles.socialText}>Youtube Logo</Text>
                <Text style={styles.socialText}>Facebook Logo</Text>
                <Text style={styles.socialText}>Instagram Logo</Text>
                </View>
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
        fontSize: 15
    },
    container: {
        marginTop: 20,
        padding: 20,
    },
    label: {
        marginLeft: 10,
        fontSize: 15,
        fontWeight: "900",
        color: "#ebdc17",
    },
    input: {
        backgroundColor: "#12e9e9",
        padding: 6,
        borderRadius: 50,
        marginVertical: 10,
        fontSize: 20,
        textAlign: "center",

    },

    signin: {
        backgroundColor: "#0e0d01", 
        color:"#ebdc17",
         
        padding: 10, 
        textAlign: "center", 
        fontWeight: "800", 
        borderRadius: 50,
        marginVertical:12,
        
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
        }
});
