import { View, StyleSheet, Text, Platform, StatusBar, TouchableOpacity, Image, Modal, Pressable, ScrollView, Alert, RefreshControl, SafeAreaView, Button, ImageBackground } from "react-native";

import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleRight, faArrowRightRotate, faPlusCircle, faUserCircle, faXmark } from "@fortawesome/free-solid-svg-icons";
import { AntDesign, Feather, FontAwesome6, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { AppContext } from "../Component/globalVariables";
import { Theme } from "../Component/Theme";
import { Icon } from "react-native-paper";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export function Profile({ navigation }) {
    const { userUID, userInfo, setPreloader } = useContext(AppContext)
    const [modalVisibility, setModalVisibility] = useState(false);

    const closeModal = () => {
        setModalVisibility(!modalVisibility);
    };

    function logout() {
        setPreloader(true)
        setTimeout(() => {
            setPreloader(false)
            navigation.replace("Intro")
        }, 3000);
    }

    const refreshControl = () => { }
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <ImageBackground source={require("../../assets/pscreen.jpg")} style={{ width: "100%", flex: 1}}>
            <ScrollView refreshControl={
                <RefreshControl refreshing={false} onRefresh={refreshControl} />
            } showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={{ flexDirection: "column", gap: 10, alignItems:"center", borderBottomWidth:4, }}>
                        <Image
                            style={{ width: 70, height: 70, borderRadius: 50, marginTop:50}}
                            source={userInfo.image ? { uri: userInfo.image } : require("../../assets/user.png")}
                        />


                        <View style={{ marginBottom: 10,  }}>
                            <Text style={{ fontSize: 22, fontFamily: Theme.fonts.text700 }}>{userInfo.firstname} {userInfo.lastname}</Text>
                            <Text style={{ fontSize: 15, fontFamily: Theme.fonts.text400, color: Theme.colors.light.bg2 }}>{userInfo.email}</Text>
                            <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}
                                style={{ borderColor: Theme.colors.primary, alignItems: 'center', justifyContent: 'center', position:"absolute", right: -14, top:-6 }}>
                                <Icon source="pen" size={25} color="white"/>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={{ flex: 1, marginTop: 10, paddingTop: 20, }}>

                       

                        <TouchableOpacity style={styles.ProfileBtn}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <AntDesign name="star" size={24} style={{ paddingRight: 10, color: Theme.colors.yellow }} />
                                <Text style={{ fontFamily: Theme.fonts.text600, fontSize: 16, }}>Rate us</Text>
                            </View>
                            <FontAwesomeIcon icon={faAngleRight} size={20} color={Theme.colors.yellow} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.ProfileBtn}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Ionicons name="gift-outline" size={24} style={{ paddingRight: 10, color: Theme.colors.yellow }} />
                                <Text style={{ fontFamily: Theme.fonts.text600, fontSize: 16 }}>Invite a Friend</Text>
                            </View>
                            <FontAwesomeIcon icon={faAngleRight} size={20} color={Theme.colors.yellow} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.ProfileBtn}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <MaterialIcons name="language" size={24} color={Theme.colors.yellow} style={{paddingRight:10}} />
                                <Text style={{ fontFamily: Theme.fonts.text600, fontSize: 16 }}>Language</Text>
                            </View>
                            <FontAwesomeIcon icon={faAngleRight} size={20} color={Theme.colors.yellow} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.ProfileBtn}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <AntDesign name="message1" size={24} style={{ paddingRight: 10, color: Theme.colors.yellow}} />
                                <Text style={{ fontFamily: Theme.fonts.text600, fontSize: 16 }}>Contact Us</Text>
                            </View>
                            <FontAwesomeIcon icon={faAngleRight} size={20} color={Theme.colors.yellow} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate("Web", { uri: "https://www.earlycode.net/privacy-policy" })} style={styles.ProfileBtn}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <AntDesign name="Safety" size={24} style={{ paddingRight: 10, color: Theme.colors.yellow }} />
                                <Text style={{ fontFamily: Theme.fonts.text600, fontSize: 16 }}>Privacy Policy</Text>
                            </View>
                            <FontAwesomeIcon icon={faAngleRight} size={20} color={Theme.colors.yellow} />
                        </TouchableOpacity>

                       
                        <TouchableOpacity style={styles.ProfileBtn}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Ionicons name='trash-outline' size={24} style={{ paddingRight: 10, color: Theme.colors.red, }} />
                                <Text style={{ fontFamily: Theme.fonts.text500, fontSize: 16, color: Theme.colors.red, }}>Delete Account</Text>
                            </View>
                            <FontAwesomeIcon icon={faAngleRight} size={20} color={Theme.colors.red} />
                        </TouchableOpacity>

                    </View>

                    <View style={{ marginTop: 30 }}>
                        <Text onPress={closeModal} style={{ borderColor: Theme.colors.black, borderRadius:20, backgroundColor: Theme.colors.yellow, borderWidth: 3, textAlign:"center", paddingVertical:10 }}>Sign Out</Text>
                        <Text style={{ fontSize: 13, fontFamily: Theme.fonts.text700, textAlign: "center", marginTop: 10 }}>LexxMedia Version: v1.0.1</Text>
                    </View>
                </View>
            </ScrollView>
                    </ImageBackground>


            {/* logout  modal  */}
            <Modal
                visible={modalVisibility}
                animationType="slide"
                transparent={true}
            >
                <View style={{ flex: 1, backgroundColor: "#000000cc" }}>
                    <Pressable style={{ flex: 1 }} onPress={closeModal} >
                    </Pressable>
                    <View style={{ height: 200, backgroundColor: Theme.colors.yellow, borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>
                        <View style={{ alignItems: 'flex-end', margin: 10 }}>
                            <TouchableOpacity onPress={closeModal}>
                                <FontAwesomeIcon
                                    icon={faXmark}
                                    size={24}
                                    color={Theme.colors.light.text2}
                                />
                            </TouchableOpacity>
                        </View>
                        <View>

                            <View style={{ alignItems: 'center', marginBottom: 10 }}>
                                <Text style={{ fontSize: 16, fontFamily: Theme.fonts.text800 }}>Are you sure you want to log out?</Text>
                            </View>

                            <View style={{
                                marginTop: 20, margin: 15,
                            }}>

                                <Text onPress={() => { closeModal(); logout() }} style={{ borderColor: Theme.colors.light.bg, backgroundColor: Theme.colors.blueDark, borderWidth: 3, textAlign:"center", paddingVertical:7, borderRadius:20 }}>Yes, Sign Out</Text>
                            </View>

                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        padding: 20,
    },
    EditProfileBtn: {
        borderWidth: 1,
        paddingHorizontal: 20,
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 10,
        // flex: 1,
        backgroundColor: Theme.colors.primary
    },
    ProfileBtn: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        borderRadius: 10,
        marginBottom: 10,
        borderColor: Theme.colors.light.line,
        borderBottomWidth: 1
    },
})