
import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView, Image, TextInput, Pressable } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Profile = ({ navigation }) => {

    const [identity, setIdentity] = useState('')

    return (
        <ScrollView style={styles.body}>
            <View style={styles.head_wrapper}>
                <View><Text style={[styles.black, { fontSize: 20 }]}>My Profile</Text></View>
                <View>
                    <Text style={[styles.black, { fontSize: 13 }]} onPress={() => navigation.navigate('Login')}>Sign Out</Text>
                </View>
            </View>
            <View style={{ alignItems: "center", marginBottom: 20 }}>
                <Image source={require('../../assets/user.png')} style={styles.img} resizeMode='cover' />
                <Text style={[{ color: '#211E8A', fontWeight: 'bold', fontSize: 11, marginTop: 5 }]}> <FontAwesome5 name="crown" color='#EEBC1D' /> Gold Member</Text>
            </View>
            <View style={{ flex: 1 }}>
                <TextInput style={[styles.input]} placeholder='Sofia Williams' editable={false}   placeholderTextColor='rgb(174, 174, 174)'/>
                <TextInput style={[styles.input]} placeholder='Sofiawilliams@gmail.com' editable={false}  placeholderTextColor='rgb(174, 174, 174)' />
                <TextInput style={[styles.input]} placeholder='+234 907 229 770' editable={false}  placeholderTextColor='rgb(174, 174, 174)' />
                <View>
                    <TextInput style={[styles.input]} placeholder='...........' secureTextEntry   placeholderTextColor='rgb(174, 174, 174)'/>
                    <Pressable style={({ pressed }) => [
                        { backgroundColor: '#0F0F0F6A', }, styles.btn
                    ]}><Text style={[styles.white, { fontSize: 11 }]}>Change</Text></Pressable>
                </View>
                <View>
                    <TextInput style={[styles.input]} placeholder='Add National Identity Number' keyboardType="phone-pad"  placeholderTextColor='rgb(174, 174, 174)' defaultValue={identity} onChangeText={(value) => setIdentity(value)} />
                    {identity !== '' && (
                        <Pressable style={({ pressed }) => [
                            { backgroundColor: '#0F0F0F6A' }, styles.btn
                        ]}><Text style={[styles.white, { fontSize: 10 }]}>Verify</Text></Pressable>
                    )}
                </View>
                <View>
                    <TextInput style={[styles.input]} placeholder='Add Bank Account'   placeholderTextColor='rgb(174, 174, 174)'/>
                    <Pressable style={({ pressed }) => [
                        { backgroundColor: '#0F0F0F6A' }, styles.btn
                    ]}><Text style={[styles.white, { fontSize: 11 }]}>Add Account</Text></Pressable>
                </View>
                <Pressable style={styles.press} onPress={() => navigation.navigate('MyCar')}>
                        <Text style={styles.black}>My Car</Text>
                        <FontAwesome5 name="angle-right" size={18} />
                </Pressable>
                <Pressable
                    style={styles.press}
                    onPress={() => navigation.navigate('WynkPass')}
                    >
                    <Text style={styles.black}>Wynk Pass</Text>
                    <FontAwesome5 name="angle-right" size={18} />
                </Pressable>
            </View>
            <View style={{ marginBottom: 60, }}></View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#FAFAFA',
        padding: 30,
    },
    head_wrapper: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 30,
    },
    black: {
        color: '#000',
    },
    img: {
        width: 110,
        height: 110,
        borderRadius: 100,
        borderWidth: 1.5,
        borderColor: '#29238A'
    },
    input: {
        borderWidth: 1.5,
        borderColor: '#0E0E241A',
        borderRadius: 5,
        color: '#211E8A',
        paddingLeft: 25,
        paddingRight: 25,
        fontSize: 18,
        marginBottom: 15,
        backgroundColor: '#0E0E240D',
    },
    btn: {
        padding: 8,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 50,
        alignSelf: "flex-start",
        position: 'absolute',
        bottom: 25,
        right: 15,
    },
    white: {
        color: '#fff',
    },
    press: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        padding: 12,
        paddingLeft: 0,
        paddingRight: 0,
    }
})

export default Profile