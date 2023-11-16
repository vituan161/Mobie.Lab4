import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, FlatList } from "react-native";
import ContactListItem from "./ContactListItem";
import Provider from "react-redux";

const keyExtractor = ({ phone }) => phone;

const fetchContacts = async () => {
    const data = await fetch("https://randomuser.me/api/?results=50");
    const ContactData = await data.json();
    return ContactData.results.map(mapContacts);
};

const  Contacts = ( navigation) => {
    const { contacts } = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        fetchContacts()
            .then(
                contacts => {
                    dispatch(fetchContactsSuccess(contacts));
                }
            )
            .catch(
                e => {
                    console.log(e);
                }
            )

    }, []);

    const renderContacts = ({ item }) => {
        const { name, avatar, phone } = item;
        return <ContactListItem
            name={name}
            avatar={avatar}
            phone={phone}
            onPress={() => navigation.navigate("ProfileContact", { contact: item })}
        />;
    };

    return (
        <View style={{ justifyContent: 'center', flex: 1, paddingLeft: 10, paddingRight: 10}}>
            <FlatList
                data={contacts}
                renderItem={renderContacts}
                keyExtractor={keyExtractor}
            />
        </View>
    );
}

    export default Contacts;
