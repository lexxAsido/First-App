import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";


export default function Login(){
    const [email, setEmail] = useState("alexandaras2015@gmail.com")
    return (
            <View style={styles.container}>
                <Text>This is just a Login screen</Text>
                <TextInput
                style={styles.input}
                placeholder="Enter Email"
                placeholderTextColor={"#000000"}
                onChangeText={(input) => setEmail}
                />
                
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop:60,
        padding:20
    },
    input:{
        backgroundColor:"#12e9e9",
        padding:12,
        borderRadius:50,
        marginVertical: 10,
        fontSize:20,
        textAlign:"center"
    }
})