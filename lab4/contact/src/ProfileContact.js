import { StyleSheet, View, Text, Alert } from "react-native";
import ContactThum from "./ContactThum";
import ContactListItem from "./ContactListItem";
import { IconButton } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ProfileContact = ({ route }) => {
    const { contact } = route.params;
    const { id, picture, name, email, phone, cell, favorite } = contact;
    const DetailItem = ({ iconName, title, content }) => (
        <View style={styles.detailsSectionItem}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Icon name={iconName} size={30} color="black" />
          </View>
          <View style={{ flex: 4 }}>
            <Text style={styles.detailsSectionItemContent1}>{title}</Text>
            <Text style={styles.detailsSectionItemContent2}>{content}</Text>
          </View>
        </View>
      );
    return (
        <View style={styles.container}>
            <View style={styles.avatarSection}>
                <ContactThum avatar={picture} name={name} phone={phone} />
            </View>
            <View style={styles.detailsSection}>
                <DetailItem iconName="email" title="Email" content={email} />
                <DetailItem iconName="phone" title="Phone" content={phone} />
                <DetailItem iconName="cellphone" title="Cell" content={cell} />
                <View style={{alignitems : 'center'}}>
                    <IconButton
                        icon={favorite == true ? "star-check" : "star-check-outline"}
                        iconColor="#663399"
                        style={{alignSelf: 'center'}}
                        size={20}
                        onPress={() => Alert.alert('updatefavorite')}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatarSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
    },
    detailsSection: {
        flex: 1,
        backgroundColor: 'white',
    },
    detailsSectionItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'grey',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    detailsSectionItemContent1: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        padding: 4,
    },
    detailsSectionItemContent2: {
        color: 'blue',
        fontSize: 16,
        padding: 4,
    },
});

export default ProfileContact;