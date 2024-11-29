import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons/faArrowRightToBracket";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useEffect, useState, useCallback, useContext } from "react";
import { Alert, SafeAreaView, TouchableOpacity } from "react-native";
import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Theme } from "../Component/Theme";
import { faArrowRight, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import * as yup from "yup";
import { AppContext } from "../Component/globalVariables";
import { Formik } from "formik";
import { auth } from "../Firebase/Settings";
import { signInWithEmailAndPassword } from "firebase/auth";
import { errorMessage } from "../Component/formatErrorMessage";

const validation = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(20).required(),
});

export default function Login({ navigation }) {
    const { setUserUID, setPreloader } = useContext(AppContext);
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <ImageBackground source={require("../../assets/news.jpg")} style={{ width: "100%", flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(value) => {
                        setPreloader(true);
                        signInWithEmailAndPassword(auth, value.email, value.password)
                            .then((data) => {
                                setPreloader(false);
                                setUserUID(data.user.uid);
                                navigation.replace("News");
                            })
                            .catch((e) => {
                                setPreloader(false);
                                Alert.alert("Access denied!", errorMessage(e.code));
                            });
                    }}
                    validationSchema={validation}
                >
                    {(prop) => (
                        <View style={styles.shadow}>
                            <View style={styles.container}>
                                <View style={styles.header}>
                                    <Text style={styles.title}>Lexx Media</Text>
                                    <FontAwesomeIcon icon={faArrowRightToBracket} size={30} />
                                </View>

                                {/* Email Input */}
                                <View>
                                    <Text style={styles.label}>Email:</Text>
                                    <View style={{marginHorizontal:5, backgroundColor:"white",  borderRadius:20, padding:10}}>
                                        <TextInput
                                            style={{marginVertical:6}}
                                            autoCapitalize="none"
                                            onChangeText={prop.handleChange("email")}
                                            onBlur={prop.handleBlur("email")}
                                            value={prop.values.email}
                                            placeholder="Enter your email"
                                            placeholderTextColor="#7f7f7f"
                                        />
                                    </View>
                                    <Text style={styles.errorText}>
                                        {prop.touched.email && prop.errors.email}
                                    </Text>
                                </View>

                                {/* Password Input */}
                                <View>
                                    <Text style={styles.label}>Password:</Text>
                                    <View style={{flexDirection:"row", justifyContent:"space-between", marginHorizontal:5, backgroundColor:"white", alignItems:"center", borderRadius:20, paddingHorizontal:8, paddingVertical:5}}>
                                        <TextInput
                                            style={{marginVertical:12}}
                                            autoCapitalize="none"
                                            secureTextEntry={!passwordVisible}
                                            onChangeText={prop.handleChange("password")}
                                            onBlur={prop.handleBlur("password")}
                                            value={prop.values.password}
                                            placeholder="Enter your password"
                                            placeholderTextColor="#7f7f7f"
                                        />
                                        <TouchableOpacity
                                            onPress={() => setPasswordVisible(!passwordVisible)}
                                            style={styles.eyeIcon}
                                        >
                                            <FontAwesomeIcon
                                                icon={passwordVisible ? faEye : faEyeSlash}
                                                size={20}
                                                color={Theme.colors.black}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={styles.errorText}>
                                        {prop.touched.password && prop.errors.password}
                                    </Text>
                                </View>

                                {/* Login Button */}
                                <TouchableOpacity onPress={prop.handleSubmit}>
                                    <View style={styles.loginButton}>
                                        <Text style={styles.loginButtonText}>Login</Text>
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </View>
                                </TouchableOpacity>

                                {/* Links */}
                                <View style={styles.links}>
                                    <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
                                        <Text style={styles.linkText}>Forgot Password</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                                        <Text style={styles.linkText}>Create Account</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                </Formik>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
        backgroundColor:Theme.colors.blueDark,
        borderWidth:4
    },
    title: {
        fontSize: 30,
        fontFamily: Theme.fonts.text900,
        // backgroundColor:Theme.colors.blueDark
    },
    label: {
        fontFamily: Theme.fonts.text800,
        marginBottom: 5,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        // borderWidth: 1,
        borderColor: "#cccccc",
        // borderRadius: 30,
        paddingHorizontal: 15,
        marginVertical: 6,
    },
    input: {
        flex: 1,
        fontSize: 16,
        fontFamily: Theme.fonts.text800,
        paddingVertical: 10,
        color: "#000000",
        backgroundColor: "#ffffff",
    },
    eyeIcon: {
        padding: 5,
        // backgroundColor: "#ffffff",
    },
    errorText: {
        fontSize: 13,
        color: Theme.colors.red,
        fontFamily: Theme.fonts.text400,
    },
    loginButton: {
        flexDirection: "row",
        backgroundColor: Theme.colors.primary,
        padding: 12,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
    },
    loginButtonText: {
        fontFamily: Theme.fonts.text900,
        fontSize: 18,
        marginRight: 8,
    },
    links: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
    },
    linkText: {
        color: "#df0b0b",
        fontFamily: Theme.fonts.text600,
        padding: 5,
    },
    shadow: {
        backgroundColor: "#ffffffb7",
        width: 350,
        borderRadius: 20,
        marginTop: "40%",
        elevation: 10,
        shadowColor: "#15eeee",
        shadowOpacity: 1,
        shadowRadius: 20,
        shadowOffset: { height: 10, width: 10 },
        alignSelf: "center",
        padding: 10,
        borderColor:Theme.colors.black,
        borderWidth:4
    },
});
