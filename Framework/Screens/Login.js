import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons/faArrowRightToBracket";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useEffect, useState, useCallback, useContext } from "react";
import { Alert, SafeAreaView, TouchableOpacity } from "react-native";
import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import { Theme } from "../Component/Theme";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import * as yup from "yup";
import { AppContext } from "../Component/globalVariables";
import { Formik } from 'formik';
import { auth } from "../Firebase/Settings";
import { signInWithEmailAndPassword } from "firebase/auth";
import { errorMessage } from "../Component/formatErrorMessage";






const validation = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(20).required()
})

export default function Login({ navigation }) {

    const { setUserUID, setPreloader } = useContext(AppContext);

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <ImageBackground source={require("../../assets/news.jpg")} style={{ width: "100%", flex: 1 }}>

                <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(value) => {
                        setPreloader(true)
                        signInWithEmailAndPassword(auth, value.email, value.password)
                            .then((data) => {
                                // console.log(data.user.uid);
                                setPreloader(false)
                                setUserUID(data.user.uid)
                                navigation.replace("News");
                            })
                            .catch(e => {
                                setPreloader(false)
                                console.log(e)
                                Alert.alert("Access denied!", errorMessage(e.code));
                            })

                    }}
                    validationSchema={validation}
                >
                    {(prop) => {
                        return (
                            <View style={styles.shadow}>

                                <View style={styles.container}>
                                    <View style={{ flexDirection: "row", gap: 8, justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ fontSize: 30, fontFamily: Theme.fonts.brand }}>Lexx Media</Text>
                                        <FontAwesomeIcon icon={faArrowRightToBracket} size={30} />
                                    </View>

                                    <View>
                                        {/* <Text style={{ fontFamily: Theme.fonts.text500 }}>Email:</Text> */}
                                        <TextInput
                                            placeholder="Enter Email"
                                            placeholderTextColor={Theme.colors.cyanLight}
                                            style={styles.input}
                                            autoCapitalize='none'
                                            onChangeText={prop.handleChange("email")}
                                            onBlur={prop.handleBlur("email")}
                                            value={prop.values.email}
                                        />
                                        <Text style={{ fontSize: 13, color: Theme.colors.red, fontFamily: Theme.fonts.text400 }}>{prop.touched.email && prop.errors.email}</Text>
                                    </View>

                                    <View>
                                        {/* <Text style={{ fontFamily: Theme.fonts.text500 }}>Password :</Text> */}
                                        <TextInput
                                            placeholder="Enter Password"
                                            placeholderTextColor={Theme.colors.cyanLight}
                                            style={styles.input}
                                            autoCapitalize='none'
                                            autoComplete='off'
                                            autoCorrect={false}
                                            secureTextEntry={true}
                                            keyboardType='default'
                                            onChangeText={prop.handleChange("password")}
                                            onBlur={prop.handleBlur("password")}
                                            value={prop.values.password}
                                        />
                                        <Text style={{ fontSize: 13, color: Theme.colors.red, fontFamily: Theme.fonts.text400 }}>{prop.touched.password && prop.errors.password}</Text>
                                    </View>

                                    <TouchableOpacity onPress={prop.handleSubmit}

                                        // onPress={() => {

                                        //     if (!users.includes(email)) {
                                        //         setUsers([...users, email]);
                                        //         setEmail("");

                                        //         Alert.alert(
                                        //             "Login Status", "Login Successful, Welcome Onboard",
                                        //             [
                                        //                 { text: "activated", onPress: () => alert("Your Account has been Activated") },
                                        //                 // { text: "Delete", style: 'destructive', onPress: () => console.log("Account deleted") }
                                        //             ]
                                        //         )
                                        //     }
                                           
                                        //     navigation.navigate("News")
                                        // }}
                                        >

                                        
                                        <View style={{ flexDirection: "row", backgroundColor: Theme.colors.primary, padding: 10, borderRadius: 20, justifyContent: "center", alignItems: "center" }}>
                                            <Text style={{ fontFamily: Theme.fonts.text900, fontSize: 18 }}>Login </Text>
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </View>
                                    </TouchableOpacity>


                                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop:5}}>
                                        <TouchableOpacity>
                                            <Text style={{ color: "#df0b0b", fontFamily: Theme.fonts.text600, padding: 5 }}>Forgot Password</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => { navigation.navigate("SignUp") }}>
                                            <Text style={{ fontFamily: Theme.fonts.text600, padding: 5 }}>Create Account</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>




                        )
                    }}

                </Formik>
            </ImageBackground>
        </SafeAreaView>
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
        padding: 15,
        borderRadius: 50,
        marginVertical: 10,
        fontSize: 20,
        textAlign: "center",
        color: "#ffffff",
        fontWeight: "800",
        fontFamily: "Pacifico_400Regular",
    },

    signin: {
        backgroundColor: "#f0dd0f",
        color: "#0c0c0c",
        fontSize: 20,
        padding: 5,
        textAlign: "center",
        fontWeight: "bold",
        fontFamily: "Pacifico_400Regular",
        // borderRadius: 100,
        marginVertical: 12,
        marginHorizontal: 20,
        shadowColor: "#0d0e0d",
        shadowOpacity: 0.9,
        shadowRadius: 20,
        shadowOffset: { height: 0, width: 30 },
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
        padding: 8,
        marginVertical: 5,
        borderWidth: 0.5,
        borderColor: '#ebd50f'
    },
    shadow: {
        backgroundColor: "#ffffffb7",
        width: 350,
        height: 400,
        borderRadius: 20,
        marginTop: "70%",
        elevation: 10,
        shadowColor: "#15eeee",
        shadowOpacity: 1,
        shadowRadius: 20,
        shadowOffset: { height: 10, width: 10 },
        alignSelf: "center",
        marginVertical: 20,
    },
});
