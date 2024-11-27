import React, { useEffect, useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScrollView, View, Image, FlatList, TouchableOpacity, Text, StyleSheet, Dimensions, ImageBackground, ActivityIndicator, SafeAreaView } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';
import { doc, onSnapshot, collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '../Firebase/Settings';
import Carousel from 'react-native-reanimated-carousel';
import { AppContext } from '../Component/globalVariables';
import { Ionicons } from '@expo/vector-icons';
import { Politics } from './Politics';
import { Entertainment } from './Entertainment';
import { Sport } from './Sport';
import { Profile } from './Profile';
import { PostNews } from './PostNews';
import { Theme } from '../Component/Theme';

const LeftContent = props => <Avatar.Image {...props} source={require("../../assets/lexmedia.png")} style={{ backgroundColor: "white" }} />;
const { width } = Dimensions.get('screen');

function Home({ navigation }) {
  const { userUID, setPreloader, setUserInfo } = useContext(AppContext);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const carouselLinks = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO821Chq6MWkkjlx6mu_iWW4VGSO8w9VZWsg&s',
    'https://img.freepik.com/premium-vector/sports-news-with-abstract-background-sports-elements_1419-1926.jpg?w=360',
    'https://c8.alamy.com/comp/GXG2Y4/news-concept-political-news-on-digital-background-GXG2Y4.jpg',
  ];

  const [entertainmentNews, setEntertainmentNews] = useState([]);
  const [politicsNews, setPoliticsNews] = useState([]);
  const [sportNews, setSportNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const newsRef = collection(db, 'news');
        const q = query(newsRef, where('category', 'in', ['Entertainment', 'Politics', 'Sport']), orderBy('createdAt', 'desc'));
        
        const querySnapshot = await getDocs(q);
        const allNews = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
  
        // Filter news by category
        setEntertainmentNews(allNews.filter((news) => news.category === 'Entertainment'));
        setPoliticsNews(allNews.filter((news) => news.category === 'Politics'));
        setSportNews(allNews.filter((news) => news.category === 'Sport'));
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchNews();
  }, []);

  const formatDate = (timestamp) => {
    const date = timestamp?.toDate ? timestamp.toDate() : new Date(timestamp);
    const options = { day: 'numeric', weekday: 'long', year: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  if (loading) {
    return (
      <View style={styles.preloaderContainer}>
        <ActivityIndicator size="large" color="#0044cc" />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:"black" }}>
      <ScrollView>
        <ImageBackground source={require('../../assets/lexmedia.png')} style={{ width: '100%', height: '100%' }}>
          <View style={{ padding: 40, paddingHorizontal: 5, backgroundColor: '#0e131346' }}>
            <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
              <Carousel
                loop
                width={width - 30}
                height={250}
                autoPlay={true}
                data={carouselLinks}
                renderItem={({ index }) => (
                  <Image
                    style={{ width: '100%', height: 250, borderRadius: 10 }}
                    source={{ uri: carouselLinks[index] }}
                  />
                )}
              />
            </View>
          </View>

          <View style={{ flex: 1 }}>
            <FlatList
              data={politicsNews}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
              renderItem={({ item }) => (
                <Card style={styles.card}>
                  <Card.Title title="Politics News" left={LeftContent} />
                  <Card.Content>
                    <Text style={styles.title}>{item.title}</Text>
                    <Card.Cover source={{ uri: item.image }} style={{ height: 200 }} />
                    <Text style={styles.description}>
                      {item.description.length > 200
                        ? `${item.description.substring(0, 200)}...`
                        : item.description}
                    </Text>
                  </Card.Content>
                  <Card.Actions>
                    <Text style={{ color: "#0e0d0d" }}>Posted: {formatDate(item.createdAt)}</Text>
                    <Button
                      textColor="black"
                      buttonColor="#dbdbd6"
                      onPress={() => navigation.navigate('Politics')}
                    >
                      Read More
                    </Button>
                  </Card.Actions>
                </Card>
              )}
            />
            <FlatList
              data={entertainmentNews}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
              renderItem={({ item }) => (
                <Card style={styles.cardEnt}>
                  <Card.Title title="Entertainment News" left={LeftContent} />
                  <Card.Content>
                    <Text style={styles.title}>{item.title}</Text>
                    <Card.Cover source={{ uri: item.image }} style={{ height: 200 }} />
                    <Text style={styles.description}>
                      {item.description.length > 200
                        ? `${item.description.substring(0, 200)}...`
                        : item.description}
                    </Text>
                  </Card.Content>
                  <Card.Actions>
                    <Text style={{ color: "#111111" }}>Posted: {formatDate(item.createdAt)}</Text>
                    <Button
                      textColor="white"
                      buttonColor="#0e0d0d"
                      onPress={() => navigation.navigate('Entertainment')}
                    >
                      Read More
                    </Button>
                  </Card.Actions>
                </Card>
              )}
            />
            <FlatList
              data={sportNews}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
              renderItem={({ item }) => (
                <Card style={styles.cardSport}>
                  <Card.Title title="Sport News" left={LeftContent} />
                  <Card.Content>
                    <Text style={styles.title}>{item.title}</Text>
                    <Card.Cover source={{ uri: item.image }} style={{ height: 200 }} />
                    <Text style={styles.description}>
                      {item.description.length > 200
                        ? `${item.description.substring(0, 200)}...`
                        : item.description}
                    </Text>
                  </Card.Content>
                  <Card.Actions>
                    <Text style={{ color: "#0f0f0f" }}>Posted: {formatDate(item.createdAt)}</Text>
                    <Button
                      textColor="black"
                      buttonColor="#23c5e2"
                      onPress={() => navigation.navigate('Sport')}
                    >
                      Read More
                    </Button>
                  </Card.Actions>
                </Card>
              )}
            />
            
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

export function News() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          let size = focused ? 35 : 23;
          if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
          if (route.name === 'Entertainment') iconName = focused ? 'videocam' : 'videocam-outline';
          if (route.name === 'Sport') iconName = focused ? 'football' : 'football-sharp';
          if (route.name === 'Politics') iconName = 'newspaper';
          if (route.name === 'PostNews') iconName = 'add-circle';
          if (route.name === 'Profile') iconName = 'person';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Theme.colors.yellow,
        tabBarInactiveTintColor: Theme.colors.blueDark,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Politics" component={Politics} />
      <Tab.Screen name="Entertainment" component={Entertainment} />
      <Tab.Screen name="Sport" component={Sport} />
      <Tab.Screen name="PostNews" component={PostNews} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    marginHorizontal: 8,
    backgroundColor: "#11ce3aff",
  },
  cardEnt: {
    marginBottom: 20,
    marginHorizontal: 8,
    backgroundColor: "#f128aeff",
  },
  cardSport: {
    marginBottom: 20,
    marginHorizontal: 8,
    backgroundColor: "#ece915ff",
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: "#0f0e0e",
  },
  description: {
    fontSize: 14,
    fontFamily: Theme.fonts.text500,
    color: "#111010",
    marginTop: 10,
  },
  preloaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
});
