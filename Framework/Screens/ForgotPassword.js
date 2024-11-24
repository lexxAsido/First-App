import { Alert, Modal, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState,  } from 'react'
import { Theme } from '../Component/Theme';
import { errorMessage } from '../Component/formatErrorMessage';
import { AppContext } from '../Component/globalVariables';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../Firebase/Settings';


export function ForgotPassword({ navigation, }) {
    const { setPreloader } = useContext(AppContext)
    const [email, setEmail] = useState("")


    function sendEmail() {
        setPreloader(true);
        sendPasswordResetEmail(auth, email)
            .then((a) => {
                console.log(a);
                setPreloader(false);
                Alert.alert("Password Reset", "A password reset email has been sent to your mail.");
            })
            .catch(e => {
                setPreloader(false);
                Alert.alert("Error!", errorMessage(e.code));
            })
    }


    return (
        <SafeAreaView style={{ flex: 1, }} >
            <View style={styles.container}>

                <View style={styles.form}>
                    <Text style={styles.header}>Forgot Account Password</Text>
                    {/* <Text style={[styles.header, { marginBottom: 20 }]}>Password?</Text> */}
                    <Text style={styles.text}>Please enter your account email, and a password reset link will be sent to your email.</Text>

                    <Text style={styles.placeholder}>Email Address</Text>
                    <TextInput
                        style={[styles.input, { marginBottom: 10,}]}
                        autoCapitalize="none"
                        onChangeText={(inp) => setEmail(inp)}
                    />

                    <TouchableOpacity disabled={email === ""} onPress={sendEmail} style={styles.appBTN}>
                        <Text style={{ fontSize: 16,  fontFamily: Theme.fonts.text800 }}>Send Link</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Login")} style={{ alignItems: "center", marginTop: 10, backgroundColor:"black", padding:7, borderRadius:20}}>
                    <Text style={{ fontSize: 16, color: Theme.colors.blueDark, fontFamily: Theme.fonts.text600 }}>Remember your password?</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        
        justifyContent:"center"
    },
    form: {
        // flex: 1,
        justifyContent: "center",
        // alignItems: "center"
    },
    header: {
        fontSize: 23,
        fontFamily: Theme.fonts.text800,
        color: Theme.colors.blueDark,
        marginBottom:20,
        textAlign:"center",
        borderBottomWidth:3
    },
    text: {
        fontSize: 16,
        fontFamily: Theme.fonts.text400,
        color: Theme.colors.text2
    },
    input: {
        borderColor: "gray",
        borderWidth: 1,
        padding: 8,
        marginBottom: 10,
        borderRadius: 10,
        width: "100%",
        fontSize: 18,
        borderColor:Theme.colors.dark
    },
    placeholder: {
        fontFamily: Theme.fonts.text700,
        marginTop: 10
    },
    error: {
        fontFamily: Theme.fonts.text400,
        color: "#d70000",
        marginStart: 7
    },
    appBTN: {
        borderWidth: 1,
        borderColor: Theme.colors.dark,
        padding: 12,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 40,
        backgroundColor: Theme.colors.yellow
    }
})