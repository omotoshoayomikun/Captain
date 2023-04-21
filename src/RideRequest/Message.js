
import React from "react";
import { Image, Modal, StyleSheet, Text, TextInput, View, Pressable, ScrollView } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Btn2 } from "../../Componet/Btn";

const Message = ({ navigation }) => {
    return (
        <Modal
            transparent={true}
            onRequestClose={() => navigation.navigate('RideStatus')}
        >
            <View style={styles.model}>
                <View style={[styles.header, {}]}>
                    <Pressable style={styles.move}></Pressable>
                    <View style={{ marginBottom: 8, paddingHorizontal: 20 }}>
                        <Pressable style={{ padding: 12, borderRadius: 100, backgroundColor: '#555', alignSelf: "flex-end" }} onPress={() => { navigation.navigate('RideStatus'); }}>
                            <MaterialIcons name="close" size={19} color='#fff' />
                        </Pressable>
                    </View>
                    <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
                        <View style={styles.row}>
                            <Image source={require('../../assets/endcall.png')} style={styles.image} resizeMode='stretch' />
                            <View style={{ marginLeft: 10, width: '65%', }}>
                                <Text style={[styles.text]}>Hello, you requiested for a ride</Text>
                                <Text style={{ fontSize: 10, color: '#555', marginTop: 5 }}>Today, 8:00pm</Text>
                            </View>
                        </View>
                        <View style={styles.revrow}>
                            <Image source={require('../../assets/endcall.png')} style={styles.image} resizeMode='stretch' />
                            <View style={{ marginRight: 10, width: '65%', }}>
                                <Text style={[styles.text]}>Hello, you requiested for a ride</Text>
                                <Text style={{ fontSize: 10, color: '#555', marginTop: 5, textAlign: 'right' }}>Today, 8:00pm</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={{ flexDirection: "row", padding: 20, paddingTop: 10, }}>
                        <TextInput style={styles.textinput} placeholder='Type your mesage here'  placeholderTextColor='rgb(174, 174, 174)' />
                        <Pressable
                            style={({ pressed }) => [
                                { backgroundColor: pressed ? '#fff' : '#fff' },
                                styles.bbtn
                            ]}
                        // onPress={handleBack}
                        >
                            <MaterialIcons name={'send'} color='#fff' size={15} />
                        </Pressable>
                    </View>

                    {/* <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 30, }}>
                        <Image source={require('../../assets/profile.png')} style={styles.image} resizeMode='stretch' />
                        <Text style={[{ color: '#000', fontSize: 18, marginLeft: 15 }]}>Message Adesewa</Text>
                    </View>
                    <View style={{ marginBottom: 40 }}>
                        <TextInput placeholder="Tell us what went wrong" textAlignVertical="top" style={styles.input} multiline={true} />
                    </View>
                    <Btn2 title='Send Message' /> */}
                </View>
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    model: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.534)',
        justifyContent: 'flex-end'
    },
    header: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingTop: 10,
        backgroundColor: '#fff',
        flex: 1,
    },
    move: {
        paddingVertical: 3,
        paddingHorizontal: 25,
        backgroundColor: '#E6E6E6',
        alignSelf: "center",
        borderRadius: 40,
    },
    row: {
        flexDirection: 'row',
        alignItems: "center",
    },
    revrow: {
        flexDirection: 'row-reverse',
        alignItems: "center",
    },
    bbtn: {
        backgroundColor: '#211E8A',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 30,
        padding: 15,
        // alignSelf: "flex-end",
    },
    textinput: {
        borderWidth: 1.5,
        borderColor: '#0F0F0F',
        borderRadius: 5,
        color: '#000',
        paddingLeft: 12,
        paddingRight: 12,
        fontSize: 15,
        // textAlign: "center",
        backgroundColor: '#0E0E240D',
        flex: 1,
        marginRight: 10,
    },
    text: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        padding: 15,
        backgroundColor: '#F0F0F0',
        borderRadius: 5,
        color: '#000',
        fontSize: 15,
    },
    image: {
        width: 40,
        height: 40,
    },
    input: {
        borderWidth: 1.5,
        borderColor: '#0E0E241A',
        borderRadius: 5,
        color: '#211E8A',
        padding: 15,
        fontSize: 18,
        // marginBottom: 15,
        backgroundColor: '#fff',
        height: 150,
    },
})

export default Message