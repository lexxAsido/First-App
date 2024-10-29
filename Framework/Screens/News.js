import { Image, ImageBackground, ScrollView, Text, View, StyleSheet, Linking } from 'react-native';
import { Avatar, Button, Card, } from 'react-native-paper';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {Pacifico_400Regular} from '@expo-google-fonts/pacifico';
import { useCallback, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import { Theme } from '../Component/Theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile';




const LeftContent = props => <Avatar.Image {...props} source={require("../../assets/lexmedia.png")} style={{ backgroundColor: "black" }} />

function Home({navigation}) {

 

  const handleReadMore = () => {
    Linking.openURL('https://punchng.com/nigerians-react-as-verydarkman-shares-another-alleged-call-recording-of-bobrisky/#:~:text=Bobrisky,%20on%20Monday,%20found%20himself%20at%20the%20centre%20of%20another');
  };
  const handleReadMore2 = () => {
    Linking.openURL('https://www.tvcnews.tv/2024/10/breaking-fubara-allegedly-voids-police-attempt-to-seal-off-rsiec-headquarters/#:~:text=Rivers%20State%20governor,%20Siminalayi%20Fubara%20said%20he%20foiled%20an');
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground source={require("../../assets/lexmedia.png")} style={{ width: "100%" }}>
        <View style={{ padding: 40, paddingHorizontal: 5, backgroundColor: "#0e131346" }}>
          <Button mode='elevated' textColor='black' buttonColor='#eed80f' uppercase style={{ marginHorizontal: 10, }} labelStyle={{ fontSize: 20, fontFamily:Theme.fonts.text800}}>Lexx Media</Button>

          <View style={{ margin: 10 }}>

            <TouchableOpacity 
            onPress={()=>{navigation.navigate("Profile")}}
            style={{alignSelf:"flex-end", marginVertical:5}}>
              <Button textColor='cyan'  buttonColor='black' > Welcome!
              <FontAwesomeIcon icon={faUserPen} color='white'/>
                  </Button>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{navigation.navigate("Login")}}>
            <Text style={{alignSelf:"flex-end", fontWeight:800, fontFamily:"Pacifico_400Regular",fontSize:15}}>LogOut</Text>
            </TouchableOpacity>

            {/* <Button textColor='yellow' style={{alignSelf:"flex-end", fontWeight:"bold"}} onPress={()=>{navigation.navigate("Login")}}>LogOut</Button> */}

            <Card>
              <Card.Title  title="Politics Today" left={LeftContent} />
              <Card.Content>
                <Text variant="titleLarge" style={{ fontSize: 20, marginBottom: 20, fontFamily:Theme.fonts.text700 }}>Gov Fubara stops police attempt to takeover RSIEC Office in PortHarcourt</Text>
                <Card.Cover source={require("../../assets/fubara.jpg")} />
                <Text variant="bodyMedium" style={{ marginTop: 15,  fontSize:15, fontFamily:Theme.fonts.text500 }}> The incident led to a faceoff between the Governor, his supporters and suspected police officers in the early hours of the morning.

                  The Governor said he stormed the RSIEC office after getting reports that a new team of police officers had arrived to take over the complex on Aba Road in Port Harcourt.

                  Speaking in front of the RSIEC Office, Gov Fubara condemned the conduct of the policemen accusing them of acting out a script from his political opponents.</Text>
              </Card.Content>
              <Card.Actions>
                <TouchableOpacity>
                <Button mode="elevated" textColor='cyan' buttonColor="black">ReadMore</Button>
                </TouchableOpacity>

                <TouchableOpacity>
                <Button buttonColor='#eed80f' textColor='black'>share</Button>
                </TouchableOpacity>
              </Card.Actions>
            </Card>


            <Card style={{ marginTop: 30 }}>
              <Card.Title title="Entertainment" left={LeftContent} />
              <Card.Content>
                <Text variant="titleLarge" style={{ fontSize: 20, marginBottom: 20, fontFamily: Theme.fonts.text700}}>VeryDarkBlackMan releases another voice recording of Bobrisky</Text>
                <Card.Cover source={require("../../assets/bob.jpg")} />

                <Text variant="bodyMedium" style={{ marginTop: 15, fontFamily:Theme.fonts.text500}}>Nigerians have taken to social media to express their thoughts on the latest leaked call recording
                  allegedly featuring controversial crossdresser,
                  Idris Okuneye, popularly known as Bobrisky.
                  Bobrisky, on Monday, found himself at the centre of another controversy following the release of an alleged call recording by social media influencer, Martins Otse, aka VeryDarkMan.
                  {'\n'}{'\n'}
                  In the recording, Bobrisky purportedly admitted to not being in prison but rather in a well-furnished apartment near the prison, amongst other claims.
                </Text>
              </Card.Content>
              <Card.Actions>
                <TouchableOpacity>
                <Button mode="elevated" textColor='cyan' buttonColor="black">ReadMore</Button>
                </TouchableOpacity>

                <TouchableOpacity>
                <Button buttonColor='#eed80f' textColor='black'>share</Button>
                </TouchableOpacity>
              </Card.Actions>
            </Card>


            <Card style={{ marginTop: 30 }}>
              <Card.Title title="Sports" left={LeftContent} />
              <Card.Content>
                <Text variant="titleLarge" style={{ fontSize: 20, marginBottom: 20, fontFamily:Theme.fonts.text700 }}>Stones heads last-gasp winner as Man City come back to beat Wolves</Text>
                <Card.Cover source={require("../../assets/wolman.jpg")} />
                <Text variant="bodyMedium" style={{ marginTop: 15, fontFamily:Theme.fonts.text500}}>John Stones' dramatic stoppage-time winner kept Manchester City in touch with Premier League leaders
                  Liverpool as the champions beat battling Wolves.

                  The defender's header - in the fifth minute of injury time - was given
                  when referee Chris Kavanagh awarded the goal on review, to the hosts' fury, after it was initially ruled out for offside.

                  Josko Gvardiol had earlier cancelled out Jorgen Strand Larsen's opener for Wolves,
                  who remain winless this season and are bottom of the Premier League.

                  City made the early running at Molineux but were stunned on seven minutes when neat build-up play
                  sent Nelson Semedo away and his brilliant cross, which bypassed four visiting defenders, was tapped in by Strand Larsen.

                  The recalled Jose Sa, replacing the injured Sam Johnstone in goal,
                  denied Bernardo Silva soon after as City controlled the game, but they had to wait until the 33rd minute to level when Gvardiol found the top corner from 20 yards.</Text>
              </Card.Content>
              <Card.Actions>
                <TouchableOpacity>
                <Button mode="elevated" textColor='cyan' buttonColor="black">ReadMore</Button>
                </TouchableOpacity>

                <TouchableOpacity>
                <Button buttonColor='#eed80f' textColor='black'>share</Button>
                </TouchableOpacity>
              </Card.Actions>
            </Card>

          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

export function News() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      {/* <Tab.Screen name="Cart" component={Cart} /> */}
      {/* <Tab.Screen name="Profile" component={Profile} /> */}
    </Tab.Navigator>
  );
}