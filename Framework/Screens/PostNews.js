import React, { useContext, useEffect, useState } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    TouchableOpacity,
    Modal,
    FlatList,
    Alert,
    SafeAreaView,
    ScrollView,
    Pressable,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { AppContext } from '../Component/globalVariables';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../Firebase/Settings';
import { Theme } from '../Component/Theme';

export function PostNews({ navigation }) {
    const { setPreloader, userUID } = useContext(AppContext);

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [titleError, setTitleError] = useState(false);

    const categories = [
        { name: 'Entertainment', icon: 'video' },
        { name: 'Sport', icon: 'basketball-ball' },
        { name: 'Politics', icon: 'newspaper' },
        { name: 'Others', icon: 'home' },
    ];

    const handleCategorySelect = (selectedCategory) => {
        setCategory(selectedCategory);
        setModalVisible(false);
    };

    const handleTitleChange = (text) => {
        setTitle(text);
        if (text.trim()) {
            setTitleError(false);
        }
    };

    const postNews = () => {
        if (!title || !category || !description || !imageURL) {
            Alert.alert('Error', 'All fields are required!');
            return;
        }

        setPreloader(true);

        addDoc(collection(db, 'news'), {
            title,
            category,
            description,
            image: imageURL,
            userId: userUID,
            createdAt: Date.now(),
        })
            .then(() => {
                setPreloader(false);
                Alert.alert('Success', 'News posted successfully!');
                setTitle('');
                setCategory('');
                setDescription('');
                setImageURL('');
                navigation.navigate('Home');
            })
            .catch((error) => {
                console.error(error);
                setPreloader(false);
                Alert.alert('Error', 'Failed to post news.');
            });
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Theme.colors.gray, padding: 20 }}>
            <ScrollView>
                <View style={styles.container}>
                    <TextInput
                        style={[styles.input, titleError && { borderColor: 'red' }]}
                        placeholder="Title*"
                        value={title}
                        onChangeText={handleTitleChange}
                        onBlur={() => {
                            if (!title.trim()) setTitleError(true);
                        }}
                    />
                    {titleError && <Text style={styles.errorText}>This field is required</Text>}

                    <TouchableOpacity style={styles.selectInput} onPress={() => setModalVisible(true)}>
                        <Text>{category || 'Category*'}</Text>
                    </TouchableOpacity>

                    <TextInput
                        style={styles.input}
                        placeholder="Image URL*"
                        value={imageURL}
                        onChangeText={setImageURL}
                    />
                    <TextInput
                        style={styles.descriptionInput}
                        placeholder="Description*"
                        placeholderTextColor={category ? "#000" : "#7d7d7d"}
                        value={description}
                        onChangeText={setDescription}
                        editable={!!category}
                        multiline={true} // Allows multiline input
                        numberOfLines={10} // Sets a reasonable height for the box
                        textAlignVertical="top" // Ensures text starts at the top
                    />

                    <TouchableOpacity style={styles.button} onPress={postNews}>
                        <Text style={styles.buttonText}>Post News</Text>
                    </TouchableOpacity>

                    <Modal
                        animationType="slide"
                        transparent
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}
                    >
                        <View style={styles.modalOverlay}>
                            <Pressable onPress={() => setModalVisible(false)} style={{ flex: 1 }}></Pressable>
                            <View style={styles.modalContent}>
                                <Text style={styles.modalTitle}>Select Category</Text>
                                <FlatList
                                    data={categories}
                                    keyExtractor={(item) => item.name}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity
                                            style={styles.categoryItem}
                                            onPress={() => handleCategorySelect(item.name)}
                                        >
                                            <FontAwesome5 name={item.icon} size={24} color={Theme.colors.yellow} />
                                            <Text style={styles.categoryText}>{item.name}</Text>
                                        </TouchableOpacity>
                                    )}
                                />
                            </View>
                        </View>
                    </Modal>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 20,
        marginTop: 120,
        elevation: 4,
        borderRadius: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },

    descriptionInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        height: 120
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginBottom: 10,
    },
    selectInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
    button: {
        backgroundColor: Theme.colors.blueDark,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        // color: 'white',
        fontSize: 16,
        fontFamily: Theme.fonts.text800
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
    categoryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    categoryText: {
        marginLeft: 10,
        fontSize: 16,
    },
});
