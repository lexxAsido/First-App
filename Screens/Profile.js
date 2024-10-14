import { StyleSheet, TouchableOpacity } from "react-native";
import { Image, Text, View } from "react-native";




export default function Profile() {
    return (
        <View style={{flex:1, backgroundColor:"#66b6b6"}}>
            <View style={{ alignItems:"center", backgroundColor:"#15eeee", height:100}}>
                <Text style={{ marginTop:60, fontSize:20, fontWeight:900}}>My Profile</Text>
            </View>

            <View style={{backgroundColor:"#ffffff"}}>
                <Image source={require("./assets/profilepic.jpg")} style={{ width:"40%", height:200, marginTop:10, borderColor:"#fad504", borderWidth:3, borderRadius:70, alignSelf:"center"}}/>
                <View style={{alignSelf:"center"}}>
                <Text style={{fontWeight:600, fontSize:20}}>Welcome Guest</Text>
                <TouchableOpacity style={{backgroundColor:"#fad504", borderRadius:20, marginVertical:10}}>
                    <Text style={{textAlign:"center", padding:10, fontWeight:600}}>LOGIN / SIGNUP</Text>
                </TouchableOpacity>
                </View>
            </View>

            <View style={{flexDirection:"row", justifyContent:"space-between",  paddingVertical:10, paddingHorizontal:10, backgroundColor:"#ffffff", marginVertical:20,}}>
                <Text>City</Text>
                <Text>Language</Text>
            </View>

            <View style={{backgroundColor:"#ffffff", paddingVertical:10}}>
                <TouchableOpacity>
                <Text style={{textAlign:"center"}}>😊Share our App 🧑‍🤝‍🧑</Text>
                </TouchableOpacity>
            </View>

            <View style={{backgroundColor:"#ffffff", marginTop:23, padding:10,}}>
                <Text style={style.linkText}>Settings🕸️</Text>
                <Text style={style.linkText}>Change Password</Text>
                <Text style={style.linkText}>Refer Friends👨‍👩‍👧‍👦</Text>
                <Text style={style.linkText}>Leave Feedbacks🗣️</Text>
                <Text style={style.linkText}>Terms & Conditions</Text>
                <Text style={style.linkText}>About Us</Text>
            </View>

        </View>
    )
};

const style = StyleSheet.create({
    linkText: {
     marginVertical:10,
     borderBottomColor:"#111010",
     borderBottomWidth:1,
     paddingBottom:3,
     fontStyle:"italic",
    fontWeight:"600"
     
    }
})