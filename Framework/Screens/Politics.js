import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView } from 'react-native';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../Firebase/Settings';
import { Card, Button } from 'react-native-paper';
import { Theme } from '../Component/Theme';
import { AppContext } from '../Component/globalVariables';

export function Politics() {
    const [politicalNews, setPoliticalNews] = useState([]);
    const { setPreloader, userUID } = useContext(AppContext);

    useEffect(() => {
        const fetchPoliticalNews = () => {
            setPreloader(true)
            const newsRef = collection(db, 'news');
            const q = query(newsRef, where('category', '==', 'Politics'));

            const unsubscribe = onSnapshot(q, (snapshot) => {
                const news = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setPoliticalNews(news);
            });

            return unsubscribe; // Cleanup listener on unmount
        };

        fetchPoliticalNews();
        setPreloader(false);
    }, []);

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const options = { day: 'numeric', weekday: 'long', year: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    };

    return (
        <View style={styles.container}>


            <Text style={styles.header}>Political News</Text>
            <FlatList
                data={politicalNews}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Card style={styles.card}>
                        <Card.Content>
                            <Text style={styles.title}>{item.title}</Text>
                            <Card.Cover source={{ uri: item.image }} style={{ height: 200 }} />
                            <Text style={styles.description}>{item.description}</Text>
                        </Card.Content>
                        <Card.Actions>

                            <Text style={{color: "#ffffff"}}>Posted: {formatDate(item.createdAt)}</Text>
                            <Button textColor="black" buttonColor="#eed80f">
                                Share
                            </Button>

                        </Card.Actions>
                    </Card>
                )}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#e4e0125d"
    },
    header: {
        fontSize: 24,
        fontFamily: Theme.fonts.text800,
        marginBottom: 10,
        marginTop: 30,
        color: Theme.colors.dark

    },
    card: {
        marginBottom: 20,
        marginHorizontal: 8,
        backgroundColor: "#0c0c0cfb"
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        color: "#ffffff"
    },
    description: {
        fontSize: 14,
        fontFamily: Theme.fonts.text500,
        color: "#ffffff",
        marginTop:10
    },
})


