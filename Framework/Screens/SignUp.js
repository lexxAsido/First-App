import React, { useState } from 'react'
import { ImageBackground, Text, View, TextInput, StyleSheet } from 'react-native'
import { Theme } from '../Component/Theme'
import * as Animatable from 'react-native-animatable';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TouchableOpacity } from 'react-native';
import { faArrowDown, faArrowRightToBracket, faThumbsUp, faUser } from '@fortawesome/free-solid-svg-icons';

// import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

export default function SignUp({navigation}) {
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={{flex:1, backgroundColor:Theme.colors.cyanLight, justifyContent: "center"}}>
        
        
        <View>
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 4, borderWidth: 4, marginHorizontal: 20, marginVertical: 15, backgroundColor:Theme.colors.black, borderRadius:20 }}>
          <Text style={{ fontSize: 30, fontFamily:Theme.fonts.brand, textAlign: "center", color:Theme.colors.yellow }}>SignUp Here</Text>

          <Animatable.View animation="bounce" iterationCount="infinite" >
            <FontAwesomeIcon icon={faArrowDown} size={30} style={{ color: Theme.colors.yellow }} />
          </Animatable.View>
        </View>

        <View style={{ marginHorizontal: 10 }}>
          <TextInput
            style={styles.inputButton}
            placeholder="Enter UserName"
            placeholderTextColor={Theme.colors.greenDark}
            onChangeText={(input) => setUserName(input)}
            value={userName}
          />

          <TextInput
            style={styles.inputButton}
            placeholder="Enter Email"
            placeholderTextColor={Theme.colors.greenDark}
            onChangeText={(input) => setEmail(input)}
            value={email}
          />

          <TextInput
            style={styles.inputButton}
            placeholder="Create New Password"
            placeholderTextColor={Theme.colors.greenDark}
            onChangeText={(input) => setPassword(input)}
            value={password}
          />

          <TouchableOpacity
            onPress={() =>{ navigation.navigate("News")}}
            style={{ flexDirection: "row", backgroundColor: Theme.colors.yellow, padding: 15, justifyContent: "center", marginTop: 15, borderRadius: 30, gap: 5, alignItems: "center" }}>
            <Text style={{ fontFamily:Theme.fonts.text800, fontSize: 18 }}>Create Account</Text>
            <FontAwesomeIcon icon={faUser} style={{ color: Theme.colors.cyanLight }} />
          </TouchableOpacity>
        </View>


      </View>
        
      <View style={{ marginHorizontal: 20, marginTop: 130, }}>
        <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", gap:6}}>
          <Text style={{ fontFamily:Theme.fonts.text800 }}>Already have an Account? Login Here</Text>
          <Animatable.View animation="flash" iterationCount="infinite">
            <FontAwesomeIcon icon={faThumbsUp} size={25} style={{ color: Theme.colors.yellow, alignItems:"center" }} />
          </Animatable.View>
        </View>

        <TouchableOpacity
          onPress={() => { navigation.navigate("Login") }}
          style={{ flexDirection: "row", backgroundColor: Theme.colors.black, padding: 15, justifyContent: "center", marginTop: 0, borderRadius: 30, gap: 5, alignItems: "center" }}>
          <Text style={{ fontFamily:Theme.fonts.text900, fontSize: 18, color:Theme.colors.yellow }}>Login</Text>
          
          <FontAwesomeIcon icon={faArrowRightToBracket} size={25} color={Theme.colors.yellow} />
        </TouchableOpacity>
      </View>



    </View>
  )
};
const styles = StyleSheet.create({
  inputButton: {
    backgroundColor: "white",
    borderWidth: 2,
    borderEndEndRadius: 30,
    borderBottomLeftRadius: 30,
    borderColor: Theme.colors.dark,
    padding: 20,
    marginVertical: 6,

  },
})
