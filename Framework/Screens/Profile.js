import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Image, Text, View } from "react-native";
import { Button } from "react-native-paper";

import { faGear, faLock, faShareNodes, faUserPen } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard, faCommentDots } from "@fortawesome/free-regular-svg-icons";



export default function Profile() {
    return (
        <View style={{ flex: 1, backgroundColor: "#15eeee" }}>
            <ScrollView>

                <View style={{ alignItems: "center", backgroundColor: "#15eeee", height: 100 }}>
                    <Text style={{ marginTop: 60, fontSize: 20, fontWeight: 900 }}>My Profile</Text>
                </View>

                <View style={{ backgroundColor: "#f3eeee" }}>


                   

                    <View style={{ marginTop: 10,alignItems: "center" }}>
                        <Image
                            source={require("../../assets/profilepic.jpg")}
                            style={{
                                width: "40%",
                                height: 200,
                                borderColor: "#fad504",
                                borderWidth: 3,
                                borderRadius: 0,
                            }}
                        />
                        <TouchableOpacity>
                        <Text style={{ position: "absolute", bottom: 0, left:5 }}>
                            <Button mode="elevated" icon="camera" textColor="black">Upload image</Button>
                        </Text>
                        </TouchableOpacity>
                    </View>







                    <View style={{ alignSelf: "center" }}>
                        <Text style={{ fontWeight: 600, fontSize: 20 }}>Welcome Guest</Text>
                        <TouchableOpacity style={{ backgroundColor: "#fad504", borderRadius: 20, marginVertical: 10, flexDirection: "row", gap: 4, 
                            justifyContent:"center", padding: 10, alignItems:"center",shadowColor:"#0a0a0a3d", shadowOffset: {height:10, width:10}, shadowOpacity:0.8, shadowRadius:20 }}>
                            <Text style={{ fontWeight: 600 }}>
                                Edit profile</Text>
                            <FontAwesomeIcon icon={faUserPen} size={20} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 10, paddingHorizontal: 10, backgroundColor: "#ffffff", marginVertical: 20, }}>
                    <Text>City</Text>
                    <Text>Language</Text>
                </View>

                <View style={{ backgroundColor: "#ffffff", paddingVertical: 10,}}>
                    <TouchableOpacity style={{flexDirection:"row", alignItems:"center", gap:2, justifyContent:"center" }}>
                        <Text>😊Share our App </Text>
                        <FontAwesomeIcon icon={faShareNodes} size={30}/>
                    </TouchableOpacity>
                </View>

                <View style={{ backgroundColor: "#ffffff", marginTop: 23, padding: 10, }}>
                    <View style={{ borderBottomWidth: 1, flexDirection:"row", alignItems:"center", gap:2 }}>
                        <Text style={style.linkText}>Settings</Text>
                        <FontAwesomeIcon icon={faGear}/>
                    </View>

                    <View style={{ borderBottomWidth: 1, flexDirection:"row", alignItems:"center", gap:2 }}>
                        <Text style={style.linkText}>Change Password</Text>
                        <FontAwesomeIcon icon={faLock}/>
                    </View>

                    <View style={{ borderBottomWidth: 1 }}>
                        <Text style={style.linkText}>Refer Friends👨‍👩‍👧‍👦</Text>
                    </View>


                    <View style={{ borderBottomWidth: 1, flexDirection:"row", alignItems:"center", gap:2  }}>
                        <Text style={style.linkText}>Leave Feedbacks</Text>
                        <FontAwesomeIcon icon={faCommentDots} size={20}/>
                    </View>

                    <View style={{ borderBottomWidth: 1 }}>
                        <Text style={style.linkText}>Terms & Conditions</Text>
                    </View>

                    <View style={{ borderBottomWidth: 1,flexDirection:"row", alignItems:"center", gap:2  }}>
                        <Text style={style.linkText}>About Us</Text>
                        <FontAwesomeIcon icon={faAddressCard}/>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
};

const style = StyleSheet.create({
    linkText: {
        marginVertical: 10,


        paddingBottom: 3,
        fontStyle: "italic",
        fontWeight: "600"

    }
})