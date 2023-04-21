
import React, { useState } from "react";
import { Image, Modal, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import RideStatus from "./RideStatus";
import MapView from 'react-native-maps';

const RideIndex = ({ navigation }) => {

    const [modal, setModal] = useState(false);

    const handleAccept = () => {
        navigation.navigate('RideStatus');
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
            <View style={styles.header}>
                <View>
                    <Text style={[{ color: '#fff', fontSize: 25, marginTop: 5 }]}>3 min - 2.6km</Text>
                    <Text style={[{ color: '#fff', fontSize: 18, marginTop: 5 }]}>Rider Request</Text>

                    <Text style={[{ color: '#fff', fontSize: 12, marginTop: 40 }]}>PRICE ESTIMATE</Text>
                    <Text style={[{ color: '#fff', fontSize: 25, marginTop: 5 }]}>1,200 - 1,700<Text style={{ fontSize: 12 }}>NGN</Text></Text>
                </View>
                <View>
                    <Image source={require('../../assets/profile.png')} style={styles.image} resizeMode='stretch' />
                    <Text style={{ fontSize: 13, color: '#fff', textAlign: "center" }}>Adesewa</Text>
                </View>
            </View>
            <View style={[styles.header, { backgroundColor: '#0B0A26' }]}>
                <View>
                    <Pressable style={styles.round_btn} onPress={handleAccept}>
                        <Text style={{ color: '#000', fontSize: 14, }}>Accept</Text>
                    </Pressable>
                </View>
                <View>
                    <Pressable style={[styles.round_btn, { borderWidth: 1, borderColor: '#29238A', backgroundColor: 'transparent' }]} >
                        <Text style={{ color: '#fff', fontSize: 14, }}>Decline ride</Text>
                    </Pressable>
                </View>
            </View>
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
        backgroundColor: '#29238A',
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
})

export default RideIndex