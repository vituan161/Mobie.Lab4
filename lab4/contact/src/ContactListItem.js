import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';

const ContactListItem = ({ name, avatar, phone, onPress }) => {
    return (
        <TouchableHighlight underlayColor={'grey'} onPress={onPress} style = {styles.container}>
            <View style={styles.contactInfo}>
                <Image style={styles.avatar} source={{ uri: avatar }} />
                <View style={styles.details}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subtitle}>{phone}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 50,
        marginTop: 0,
    },
    contactInfo:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 24,
        paddingBottom: 24,
        borderBottomColor: 'grey',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    details:{
        justifyContent: 'center',
        flex: 1,
        marginLeft: 20,
    },
    title:{
        color: 'black',
        fontweight: 'bold',
        fontSize: 16,
    },
    subtitle: {
        color: 'blue',
        fontSize: 14,
        marginTop: 4,
    },
})

export default ContactListItem;