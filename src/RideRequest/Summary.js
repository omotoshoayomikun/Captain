
import React, { useState } from "react";
import { Modal, StyleSheet, Text, View, Pressable, ScrollView, Image, TextInput } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Summary = ({ navigation }) => {

    const [close, setClose] = useState(true)

    return (
        <Modal
        transparent={true}
        onRequestClose={
            () => {
                navigation.navigate('UserHome')
            }
        }
        >
            <View style={styles.modal}>
                <View style={{ flex: 1 }}>

                </View>
                <View style={styles.wrapper}>
                    <View style={styles.row}>
                        <Text style={[styles.white, { fontSize: 20, flex: 1, textAlign: "center" }]}>Trip Summary</Text>
                        <Pressable style={{ padding: 12, borderRadius: 100, backgroundColor: '#555', alignSelf: "flex-end" }} onPress={() => { navigation.navigate('UserHome'); }}>
                            <MaterialIcons name="close" size={19} color='#fff' />
                        </Pressable>
                    </View>
                    <View style={{ flex: 1, alignContent: 'center', justifyContent: 'space-between', marginBottom: 15 }}>
                        {/* <ScrollView> */}
                        <View>
                            <Text style={{ padding: 20, backgroundColor: '#ffff', borderRadius: 100, alignSelf: 'center' }}>
                                <FontAwesome5 name="check" size={20} color='#000' />
                            </Text>
                            <Text style={[styles.white, { color: '#555', fontSize: 12, textAlign: 'center', marginTop: 20 }]}>RIDE COMPLETED</Text>
                            <Text style={[styles.white, { fontSize: 60, textAlign: 'center' }]}>2,100</Text>
                            <View style={{ paddingLeft: 50, marginTop: 40, marginBottom: 40 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Image source={require('../../assets/Ellipse1.png')} style={styles.img} />
                                    <Text style={[styles.white, { fontSize: 15, marginLeft: 10 }]}>26 Admirality Way, Lekki</Text>
                                </View>

                                <View style={styles.line}></View>
                                <View style={[styles.line, { marginTop: 5, marginBottom: 5 }]}></View>
                                <View style={styles.line}></View>


                                <View style={{ flexDirection: "row" }}>
                                    <Image source={require('../../assets/Ellipse2.png')} style={styles.img} />
                                    <Text style={[styles.white, { fontSize: 15, marginLeft: 10 }]}>13 Abisoya John Street</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{}}>
                            <Text style={[styles.white, { fontSize: 15, textAlign: 'center', marginBottom: 15 }]}>Please rate your rider</Text>
                            <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 20 }}>
                                <Image source={require('../../assets/star2.png')} />
                                <Image source={require('../../assets/star2.png')} />
                                <Image source={require('../../assets/star2.png')} />
                                <Image source={require('../../assets/star.png')} />
                                <Image source={require('../../assets/star.png')} />
                            </View>
                        </View>
                    </View>
                    {/* <View style={{ position: "relative" }}>
                    <TextInput placeholder="Tell us what went wrong" textAlignVertical="top" style={styles.input} multiline={true} />
                    <Pressable
                        style={({ pressed }) => [
                            { backgroundColor: pressed ? '#fff' : '#fff' },
                            styles.bbtn
                        ]}
                    // onPress={handleBack}
                    >
                        <MaterialIcons name={'send'} color='#fff' size={15} />
                    </Pressable>
                </View> */}
                    {/* </ScrollView> */}
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    wrapper: {
        flex: 5,
        backgroundColor: '#0B0A26',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 20,

    },
    white: {
        color: '#fff'
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
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
    bbtn: {
        backgroundColor: '#211E8A',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 30,
        padding: 10,
        alignSelf: "flex-end",
        bottom: 15,
        right: 15,
        position: 'absolute'
    },
    img: {
        width: 20,
        height: 20,
    },
    line: {
        backgroundColor: '#FCF0F2D0',
        height: 8,
        width: 2,
        marginLeft: 9,
    }
})

export default Summary