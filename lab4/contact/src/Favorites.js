import 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ContactThum from './ContactThum';

const keyExtractor = ({ phone }) => phone;

const Favorites = ({ navigation }) => {
    const {contacts} = useSelector(state => state);
    const renderFavoriteThumbnail = ({ item }) => {
        const { avatar } = item;
        return <ContactThum
            avatar={item.picture}
            onPress={() => navigation.navigate("ProfileContact", { contact: item })}
        />;
    };
    const favorites = contacts.filter(contact => contact.favorite);
    return (
        <View style={styles.container}>
            <FlatList
                data={favorites}
                numColumns={3}
                contentContainerStyle={styles.list}
                renderItem={renderFavoriteThumbnail}
                keyExtractor={keyExtractor}
            />
        </View>
    );
};

const styles = StyleSheet.create({ 
    container: {
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'white',
    },
    list: {
        alignItems: 'center'
    }
});

export default Favorites;