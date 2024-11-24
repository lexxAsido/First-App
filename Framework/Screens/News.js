import { Image, ImageBackground, ScrollView, Text, View, StyleSheet, Linking, Dimensions } from 'react-native';
import { Avatar, Button, Card, } from 'react-native-paper';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { useCallback, useContext, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import { Theme } from '../Component/Theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import Carousel from 'react-native-reanimated-carousel';
import { Profile } from './Profile';
import { AppContext } from '../Component/globalVariables';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../Firebase/Settings';
import { PostNews } from './PostNews';
import { Politics } from './Politics';
import { Sport } from './Sport';
import { Entertainment } from './Entertainment';






const LeftContent = props => <Avatar.Image {...props} source={require("../../assets/lexmedia.png")} style={{ backgroundColor: "black" }} />
const { width, height } = Dimensions.get("screen")
function Home({ navigation }) {
  const { userUID, userInfo, setDoc, setPreloader, setUserInfo } = useContext(AppContext)

  const carouselLinks = [
    // "https://media.istockphoto.com/id/140054736/photo/media-technologies-concept.jpg?s=612x612&w=0&k=20&c=PZrkQkRwVmD3RysYIfHROQFQEidr7k9G2M9rtQGays0=",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO821Chq6MWkkjlx6mu_iWW4VGSO8w9VZWsg&s",
    "https://img.freepik.com/premium-vector/sports-news-with-abstract-background-sports-elements_1419-1926.jpg?w=360",
    "https://c8.alamy.com/comp/GXG2Y4/news-concept-political-news-on-digital-background-GXG2Y4.jpg",
  ];

  function getUserInfo() {
    setPreloader(true);
    onSnapshot(doc(db, "users", userUID), (snapShot) => {
        setPreloader(false);
        snapShot.exists() ? setUserInfo(snapShot.data()) : null;
    });
} 
useEffect(() => {
  getUserInfo();
  
}, []);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground source={require("../../assets/lexmedia.png")} style={{ width: "100%" }}>
        <View style={{ padding: 40, paddingHorizontal: 5, backgroundColor: "#0e131346" }}>
         
          <View style={{ marginVertical: 10, marginHorizontal:10 }}>
            <Carousel
              loop
              width={width - 30}
              height={250}
              autoPlay={true}
              data={carouselLinks}
              style={{ borderRadius: 10 }}
              scrollAnimationDuration={9000}
              renderItem={({ index }) => (
                <Image style={{ width: '100%', height: 250, borderRadius: 10, }} source={{ uri: carouselLinks[index] }} />
              )}
            />
          </View>

          <View style={{ margin: 10 }}>
            <Card>
              <Card.Title title="Politics Today" left={LeftContent} />
              <Card.Content>
                <Text variant="titleLarge" style={{ fontSize: 20, marginBottom: 20, fontFamily: Theme.fonts.text700 }}>Gov Fubara stops police attempt to takeover RSIEC Office in PortHarcourt</Text>
                <Card.Cover source={require("../../assets/fubara.jpg")} />
                <Text variant="bodyMedium" style={{ marginTop: 15, fontSize: 15, fontFamily: Theme.fonts.text500 }}> The incident led to a faceoff between the Governor, his supporters and suspected police officers in the early hours of the morning.

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
                <Text variant="titleLarge" style={{ fontSize: 20, marginBottom: 20, fontFamily: Theme.fonts.text700 }}>VeryDarkBlackMan releases another voice recording of Bobrisky</Text>
                <Card.Cover source={require("../../assets/bob.jpg")} />

                <Text variant="bodyMedium" style={{ marginTop: 15, fontFamily: Theme.fonts.text500 }}>Nigerians have taken to social media to express their thoughts on the latest leaked call recording
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
                <Text variant="titleLarge" style={{ fontSize: 20, marginBottom: 20, fontFamily: Theme.fonts.text700 }}>Stones heads last-gasp winner as Man City come back to beat Wolves</Text>
                <Card.Cover source={require("../../assets/wolman.jpg")} />
                <Text variant="bodyMedium" style={{ marginTop: 15, fontFamily: Theme.fonts.text500 }}>John Stones' dramatic stoppage-time winner kept Manchester City in touch with Premier League leaders
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
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          let size;
          if (route.name === 'Home') {
            size = focused ? 35 : 23
            iconName = focused ? 'home' : 'home-outline';
          }
          if (route.name === 'Entertainment') {
              size = focused ? 35 : 23
              iconName = focused ? 'videocam' : 'videocam-outline';
          }
          if (route.name === 'Sport') {
              size = focused ? 35 : 23
              iconName = focused ? 'football' : 'football-sharp';
          }
          if (route.name === 'Politics') {
              size = focused ? 35 : 23
              iconName = focused ? 'newspaper' : 'newspaper';
          }
          if (route.name === 'PostNews') {
              size = focused ? 35 : 23
              iconName = focused ? 'add-circle' : 'add-circle';
          }


          else if (route.name === 'Profile') {
            size = focused ? 35 : 23
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Theme.colors.blueDark,
        tabBarInactiveTintColor: Theme.colors.black,
        // tabBarInactiveBackgroundColor: "black",
        // tabBarActiveBackgroundColor: "black",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Entertainment" component={Entertainment} />
      <Tab.Screen name="Sport" component={Sport} />
      <Tab.Screen name="Politics" component={Politics} />
      <Tab.Screen name="PostNews" component={PostNews} />
      <Tab.Screen name="Profile" component={Profile} />

    </Tab.Navigator>
  );
}