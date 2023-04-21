
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import { BBtn, Btn1 } from "../../Componet/Btn";

const RideDetail = ({ navigation }) => {

    const handleBack = () => {
        navigation.navigate('JobHeader')
    }

    return (
        <ScrollView style={styles.body} contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between', flexDirection: "column"}}>
            <View style={{ padding: 30, }}>
                <BBtn handleBack={handleBack} />
                <Text style={[styles.black, { fontSize: 25, marginTop: -10 }]}>Ride Details</Text>

                <View style={{ marginTop: 20 }}>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('../../assets/Ellipse1.png')} style={styles.img} />
                        <Text style={[styles.black, { fontSize: 15, marginLeft: 10 }]}>26 Admirality Way, Lekki</Text>
                    </View>
                    <View style={styles.line}></View>
                    <View style={[styles.line, { marginTop: 5, marginBottom: 5 }]}></View>
                    <View style={styles.line}></View>


                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('../../assets/Ellipse2.png')} style={styles.img} />
                        <Text style={[styles.black, { fontSize: 15, marginLeft: 10 }]}>Foodies, Lekki</Text>
                    </View>
                </View>
            </View>
            <MapView
                style={{ height: 160 }}
                initialRegion={{
                    latitude: 27.2046,
                    longitude: 77.4977,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
            <View style={{ flexDirection: "row", alignItems: "center", padding: 30, }}>
                <Image source={require('../../assets/profile.png')} style={styles.image} resizeMode='stretch' />
                <View style={{ marginLeft: 15, }}>
                    <Text style={[styles.black, { fontSize: 20 }]}>Adesewa</Text>
                    <Text style={[{ fontSize: 12, color: '#555' }]}>April 6, 2021 11:48AM</Text>
                </View>
            </View>
            <View style={{ padding: 30, }}>
                <Text style={[{ fontSize: 14, color: '#555' }]}>RIDE PRICE</Text>
                <Text style={[{ fontSize: 28, color: '#E8913A' }]}>3,500<Text style={{ fontSize: 10, }}>NGN</Text></Text>

            </View>

            <View style={{ padding: 30, }}>
                <Btn1 title='Get Help with ride' />
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#FAFAFA',

    },
    black: {
        color: '#000'
    },
    img: {
        width: 20,
        height: 20,
    },
    white: {
        color: '#fff'
    },
    line: {
        backgroundColor: '#555',
        height: 5,
        width: 2,
        marginLeft: 9,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 100,
        borderWidth: 1.5,
    },
})

export default RideDetail