
import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Modal } from "react-native";
import MapView from 'react-native-maps';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { RoundButton } from "../Componet/Btn";
import RideIndex from "./RideRequest/RideIndex";

const UserHome = ({ navigation }) => {

    const [goOnline, setGoOnline] = useState(false);
    const [modal, setModal] = useState(false);

    const handleGoOnline = () => {
        setGoOnline(true);
        setTimeout(() => {
            navigation.navigate('RideIndex');
            setGoOnline(false);
        }, 2000)
    }
    const handleGoOffline = () => {
        setGoOnline(false);
    }

    return (
        <View style={styles.body}>
            <MapView
                style={{ flex: 1, height: '60%' }}
                initialRegion={{
                    latitude: 27.2046,
                    longitude: 77.4977,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
            <View>
                <Pressable style={[styles.header, { backgroundColor: goOnline ? '#29238A' : '#0B0A26' }]} onPress={handleGoOnline}>
                    <Text style={styles.header_text}>{goOnline ? 'LOOKING FOR RIDER' : 'GO ONLINE'}  <FontAwesome5 name={'angle-right'} color='#fff' size={18} /> </Text>
                </Pressable>
                <View style={styles.hearder_wrapper}>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 12, color: '#555' }}>TODAY'S EARNING</Text>
                        <Text style={{ fontSize: 22, color: '#3EA57B' }}>43,000 <Text style={{ fontSize: 11 }}>NGN</Text></Text>
                    </View>
                    <View style={{ marginLeft: 'auto' }}>
                        <RoundButton title='Earnings' handleRound={() => navigation.navigate('Dashboard')} />
                    </View>
                </View>
                <View style={styles.hearder_wrapper}>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 12, color: '#555' }}>TODAY'S TRIPS</Text>
                        <Text style={{ fontSize: 22, color: '#29238A' }}>43</Text>
                    </View>
                    <View style={{ marginLeft: 'auto' }}>
                        <RoundButton title='History' handleRound={() => navigation.navigate('Jobs')} />
                    </View>
                </View>
                <View style={styles.hearder_wrapper}>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 12, color: '#555' }}>AVERAGE RATING</Text>
                        <Text style={{ fontSize: 22, color: '#E8913A' }}>4.87</Text>
                    </View>
                    <View style={{ marginLeft: 'auto' }}>
                        <RoundButton title='Ratings' handleRound={() => navigation.navigate('Dashboard')} />
                    </View>
                </View>
                {goOnline && (
                    <View style={styles.hearder_wrapper}>
                        <RoundButton title={'GO OFFLINE'} handleRound={handleGoOffline} />
                    </View>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -15,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        padding: 13,
    },
    header_text: {
        textAlign: 'center',
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15,
    },
    hearder_wrapper: {
        padding: 20,
        paddingTop: 13,
        paddingBottom: 13,
        borderBottomWidth: 1,
        borderBottomColor: '#5555',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

})

export default UserHome