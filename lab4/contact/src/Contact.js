import 'react-native-gesture-handler';
import React from 'react';
import {Navigation} from 'react-native-navigation';
import { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { View, FlatList,Text } from "react-native";
import ContactListItem from "./ContactListItem";
import { mapContacts } from './Store';
import { fetchContactsSuccess } from './Store';
import _ from 'lodash';

const keyExtractor = ({ phone }) => phone;

const fetchContacts = async () => {
    const data = await fetch("https://randomuser.me/api/?results=50");
    const ContactData = await data.json();
    return ContactData.results.map(mapContacts);
};

const Contacts = ({navigation}) => {
    const  {contacts}  = useSelector(state => state, shallowEqual);

    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        fetchContacts()
            .then(
                contacts => {
                    dispatch(fetchContactsSuccess(contacts));
                    setLoading(false);
                },
            )
            .catch(
                e => {
                    console.log(e);
                    setLoading(false);
                }
            )

    },[]);

    if (loading) {
        return <Text>Loading...</Text>;
    }

    const renderContacts = ({ item }) => {
        const { name, picture, phone } = item;
        return <ContactListItem
            name={name}
            avatar={picture}
            phone={phone}
            onPress={() => navigation.navigate('ProfileContact', { contact:item })}
        />;
        
    };

    return (
        <View style={{ justifyContent: 'center', flex: 1, paddingLeft: 10, paddingRight: 10 }}>
            <FlatList
                data={contacts}
                renderItem={renderContacts}
                keyExtractor={keyExtractor}
            />
        </View>
    );
}

export default Contacts;
