import { View, StyleSheet, Text, Pressable, Button, TextInput} from 'react-native';
import React, { useState } from 'react';

export default function Profile() {

    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'JohnDoe@gmail.com'
    });
    const [modalVisible, setModalVisible] = useState(false);
    const [newName, setNewName] = useState('');

    const handleSave = () => {
        setUser(prevUser => ({ ...prevUser, name: newName }));
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <Text style={styles.text}>Welcome to your profile</Text>
            <Text style={styles.text}>Name: {user.name}</Text>

            <Pressable style={styles.pressable} onPress={() => setModalVisible(true)}>
                <Text style={styles.pressableText}>Edit Name</Text>
            </Pressable>


            {modalVisible && (
                <View style={styles.modal}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter new name"
                        value={newName}
                        onChangeText={setNewName}
                    />
                    <Button title="Save" onPress={handleSave} />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    text: {
        fontSize: 16,
        margin: 5,
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
    },
    input: {
        width: '80%',
        height: 40,
        backgroundColor: 'white',
        marginBottom: 16,
        paddingHorizontal: 10,
    },
    pressable: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
        margin: 5,
        //marginTop: 16,
        marginEnd: 20,
    },
    pressableText: {
        color: 'white',
    },
});