
import React, { useState } from "react";
import { Image, Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import MapView from "react-native-maps";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const RideStatus = ({ navigation }) => {

    const [red, setRed] = useState(false)

    const [inp1, setInp1] = useState('');
    const [inp2, setInp2] = useState('');
    const [inp3, setInp3] = useState('');
    const [inp4, setInp4] = useState('');

    const ref1 = React.useRef();
    const ref2 = React.useRef();
    const ref3 = React.useRef();
    const ref4 = React.useRef();


    const [exhuast, setExhuast] = useState(false)
    const [requestPIn, setRequestPIn] = useState(false)
    const [num, setNum] = useState(0)
    const [summary, setSummary] = useState(false)

    const [status, setStatus] = useState(['ARRIVED', 'START TRIP', 'END RIDE'])

    const handleStatus = () => {
        if (num < status.length - 1) {
            setNum((number) => number + 1)
        }
        if (num === 0) {
            setRequestPIn(true);
        }
        if (num === 1) {
            setRed(true)
            setSummary(true);
            setTimeout(() => {
                navigation.navigate('Summary');
            }, 200)
        }


    }

    return (
        <View style={styles.body}>
            <View style={styles.map}>
                <MapView
                    style={{ flex: 1, height: '60%' }}
                    initialRegion={{
                        latitude: 27.2046,
                        longitude: 77.4977,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
            <View style={[styles.header, { backgroundColor: '#0B0A26' }]}>
                <View>
                    <Text style={[{ color: '#fff', fontSize: 25, marginTop: 5 }]}>1 min - 0.2km</Text>
                    <Text style={[{ color: '#fff', fontSize: 18, marginTop: 5 }]}>Rider Request</Text>
                </View>
                <View>
                    <Image source={require('../../assets/profile.png')} style={styles.image} resizeMode='stretch' />
                    <Text style={{ fontSize: 13, color: '#fff', textAlign: "center" }}>Adesewa</Text>
                </View>
            </View>
            <Pressable style={[styles.header, { marginTop: -6, backgroundColor: red? '#E54955':'#29238A', }]} onPress={handleStatus}>
                <View style={{ justifyContent: "center" }}>
                    <Text style={{ color: '#fff', fontSize: 14, }}>
                        <FontAwesome5 name="angle-right" size={28} />
                        <FontAwesome5 name="angle-right" size={28} />
                        <FontAwesome5 name="angle-right" size={28} />
                    </Text>
                </View>
                <View style={{ justifyContent: "center" }}>
                    <Text style={{ color: '#FFF', fontSize: 18, }}>{status[num]}</Text>
                </View>
                <View style={{ justifyContent: "center" }}>
                    <Text style={{ color: '#fff', fontSize: 14, }}>
                        <FontAwesome5 name="angle-right" size={28} />
                        <FontAwesome5 name="angle-right" size={28} />
                        <FontAwesome5 name="angle-right" size={28} />
                    </Text>
                </View>
            </Pressable>
            <View style={[styles.header, { backgroundColor: '#fff', marginTop: -6, justifyContent: 'space-around' }]}>
                <Pressable style={({ pressed }) => [{ borderColor: pressed ? 'teal' : 'teal' }, styles.icons]} onPress={() => navigation.navigate('Call')}>
                    <FontAwesome5 name="phone" size={15} color='teal' />
                </Pressable>
                <Pressable style={({ pressed }) => [{ borderColor: pressed ? '#000' : '#000' }, styles.icons]} onPress={() => navigation.navigate('Message')} >
                    <FontAwesome5 name="comment" size={15} color='#000' />
                </Pressable>
                <Pressable style={({ pressed }) => [{ borderColor: pressed ? '#d1411e' : 'crimson' }, styles.icons]} onPress={() => setExhuast(true)}>
                    <MaterialIcons name="close" size={19} color='crimson' />
                </Pressable>
            </View>
            {/* THIS MODAL IS USE TO DISPLAY WHEN RIDER IS EXHAUSTED */}
            <Modal
                transparent={true}
                animationType='fade'
                visible={exhuast}
                onRequestClose={() => setExhuast(false)}
            >
                <View style={styles.modal}>
                    <View style={styles.modal_box}>
                        <Text style={[{ color: '#000', fontSize: 16, textAlign: 'center' }]}>Rider has exhausted waiting period</Text>
                        {/* <Text style={[{ color: '#000', fontSize: 15, textAlign: 'center' }]}>his </Text> */}
                        <Pressable
                            style={({ pressed }) => [
                                { backgroundColor: pressed ? '' : '#E54955', marginTop: 30 },
                                styles.modal_btn
                            ]}
                            onPress={() => {
                                navigation.navigate('HomeTabScreen')
                                setExhuast(false)
                            }}
                        >
                            <Text style={{ color: '#fff', textAlign: "center" }}>Cancel Ride</Text>
                        </Pressable>
                        <Pressable
                            style={({ pressed }) => [

                                styles.modal_btn
                            ]}
                            onPress={() => setExhuast(false)}
                        >
                            <Text style={{ color: '#000', textAlign: "center" }} >continue waiting</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            {/* THIS MODAL IS USE TO DISPLAY ENTER TRIP PIN */}
            <Modal
                transparent={true}
                animationType='fade'
                visible={requestPIn}
                onRequestClose={() => setRequestPIn(false)}
            >
                <View style={[styles.modal]}>
                    <Pressable style={{ padding: 9, backgroundColor: '#fff', borderRadius: 100, marginBottom: 10 }} onPress={() => setRequestPIn(false)}>
                        <MaterialIcons name="close" size={19} color='#000' />
                    </Pressable>
                    <View style={[styles.modal_box, { paddingLeft: 20, paddingRight: 20 }]}>
                        <Text style={[{ color: '#000', fontSize: 16, textAlign: 'center' }]}>Enter trip PIN</Text>
                        <Text style={[{ color: '#000', fontSize: 11, textAlign: 'center' }]}>Please ask rider for his secure pin </Text>
                        <View style={[styles.wrapper, { marginBottom: 20 }]}>
                            <TextInput
                                style={[styles.input, { borderColor: inp1.length < 1 ? '#0E0E241A' : '#3EA57B' }]}
                                maxLength={1}
                                defaultValue={inp1}
                                keyboardType="number-pad"
                                onChangeText={
                                    (value) => {
                                        setInp1(value)
                                        if (value.length === 1) {
                                            ref2.current.focus();
                                        }
                                    }
                                }
                            />
                            <TextInput
                                style={[styles.input, { borderColor: inp2.length < 1 ? '#0E0E241A' : '#3EA57B' }]}
                                maxLength={1}
                                defaultValue={inp2}
                                keyboardType="number-pad"
                                // editable={false} 
                                onChangeText={(value) => {
                                    setInp2(value)
                                    if (value.length === 1) {
                                        ref3.current.focus();
                                    }
                                }
                                }
                                ref={ref2}
                            />
                            <TextInput
                                style={[styles.input, { borderColor: inp3.length < 1 ? '#0E0E241A' : '#3EA57B' }]}
                                maxLength={1}
                                defaultValue={inp3}
                                keyboardType="number-pad"
                                ref={ref3}
                                onChangeText={(value) => {
                                    setInp3(value)
                                    if (value.length === 1) {
                                        ref4.current.focus();
                                    }
                                }
                                }
                            />
                            <TextInput
                                style={[styles.input, { borderColor: inp4.length < 1 ? '#0E0E241A' : '#3EA57B' }]}
                                maxLength={1}
                                defaultValue={inp4}
                                keyboardType="number-pad"
                                ref={ref4}
                                onChangeText={(value) => {
                                    setInp4(value)
                                }
                                }
                            />
                        </View>
                    </View>
                </View>
            </Modal>
            {/* THIS MODAL IS USE TO DISPLAY TRIP SUMMARY */}
            {/* <Modal
                transparent={true}
                animationType='fade'
                visible={summary}
                onRequestClose={() => setSummary(false)}
            >
                <View style={[styles.modal]}>
                    <Pressable style={{ padding: 9, backgroundColor: '#fff', borderRadius: 100, marginBottom: 10 }}>
                        <MaterialIcons name="close" size={19} color='#000' />
                    </Pressable>
                    <View style={[styles.modal_box, { paddingLeft: 20, paddingRight: 20 }]}>
                        <Text style={[{ color: '#000', fontSize: 16, textAlign: 'center' }]}>Enter trip PIN</Text>
                        <Text style={[{ color: '#000', fontSize: 11, textAlign: 'center' }]}>Please ask rider for his secure pin </Text>
                        <View style={[styles.wrapper, { marginBottom: 20 }]}>
                            <TextInput style={styles.input} maxLength={1} />
                            <TextInput style={styles.input} maxLength={1} />
                            <TextInput style={styles.input} maxLength={1} />
                            <TextInput style={styles.input} maxLength={1} />
                        </View>
                    </View>
                </View>
            </Modal> */}
        </View>

    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    map: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    header: {
        justifyContent: 'space-between',
        // alignItems: 'center',
        flexDirection: 'row',
        marginTop: -15,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        padding: 20,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 100,
        borderWidth: 1.5,
    },
    round_btn: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 50,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#fff'
    },
    icons: {
        color: '#000',
        fontSize: 14,
        borderWidth: 1.5,
        // borderColor: '#000',
        borderRadius: 100,
        width: 45,
        height: 45,
        justifyContent: "center",
        alignItems: "center"
    },
    modal: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.534)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal_box: {
        width: '70%',
        padding: 35,
        backgroundColor: '#fff',
        borderRadius: 15,

    },
    modal_btn: {
        // alignSelf: 'flex-start',
        borderRadius: 50,
        padding: 10,
    },
    model_wrapper: {
        flex: 1,
        padding: 30,
        paddingBottom: 40,
    },
    modal_img: {
        marginBottom: 30,
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingBottom: 0,
        paddingTop: 0,
    },
    input: {
        borderWidth: 1.5,
        borderColor: '#0E0E241A',
        borderRadius: 5,
        color: '#211E8A',
        paddingLeft: 9,
        paddingRight: 9,
        fontSize: 11,
        // marginBottom: 15,
        textAlign: "center",
        backgroundColor: '#0E0E240D',

    }
})

export default RideStatus