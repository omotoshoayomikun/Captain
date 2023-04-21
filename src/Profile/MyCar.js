
import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const MyCar = ({navigation}) => {

    const cars = [
        { image: require('../../assets/car1.png') },
        { image: require('../../assets/car2.png') },
        { image: require('../../assets/car.png') },
    ]

    return (
        <ScrollView style={styles.body}>
            <View style={{ flexDirection: "row", alignItems: "baseline", marginBottom: 35 }}>
                <Pressable
                    style={({ pressed }) => [
                        { backgroundColor: pressed ? '#fff' : '#fff' },
                        styles.bbtn
                    ]}
                    onPress={() => navigation.navigate('ProfileIndex')}
                >
                    <FontAwesome5 name={'angle-left'} color='#fff' size={25} />
                </Pressable>
                <Text style={{ fontSize: 20, color: '#000', marginLeft: 15, fontWeight: '500' }}>My Car</Text>
            </View>
            <View style={{ alignItems: "center", marginBottom: 20 }}>
                <Image source={require('../../assets/car.png')} style={styles.img} resizeMode='stretch' />
                <Text style={[{ color: '#211E8A', fontWeight: 'bold', fontSize: 11, marginTop: 5 }]}>Toyota Camry 2018</Text>
            </View>
            <View style={styles.flex}>
                <View>
                    <TextInput style={[styles.input]} placeholder='IKD-182XY'  placeholderTextColor='rgb(174, 174, 174)' />
                    <Pressable style={({ pressed }) => [
                        { backgroundColor: pressed ? '#211E8A' : '#0f0f0f3b', }, styles.btn
                    ]}><Text style={[styles.white, { fontSize: 11 }]}>Number</Text></Pressable>
                </View>
                <View>
                    <TextInput style={[styles.input]} placeholder='Navy Blue'  placeholderTextColor='rgb(174, 174, 174)' />
                    <Pressable style={({ pressed }) => [
                        { backgroundColor: pressed ? '#211E8A' : '#0f0f0f3b', }, styles.btn
                    ]}><Text style={[styles.white, { fontSize: 11 }]}>Color</Text></Pressable>
                </View>
                <View>
                    <TextInput style={[styles.input]} placeholder='Toyota Camry 2018'  placeholderTextColor='rgb(174, 174, 174)' />
                    <Pressable style={({ pressed }) => [
                        { backgroundColor: pressed ? '#211E8A' : '#0f0f0f3b', }, styles.btn
                    ]}><Text style={[styles.white, { fontSize: 11 }]}>Make</Text></Pressable>
                </View>
            </View>
            <ScrollView style={styles.holder} horizontal={true}>
                {cars.map((car, i) => (
                    <View key={i}>
                        <Image source={car.image} style={styles.image} resizeMode='stretch' />
                    </View>
                ))}
            </ScrollView>
            <View>
                <Pressable style={({ pressed }) => [
                    { backgroundColor: pressed ? '#211E8A' : '#0F0F0F6A' }, styles.btnnnn
                ]}><Text style={[styles.white, { fontSize: 11 }]}>Update Car Details</Text>
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
    bbtn: {
        backgroundColor: '#211E8A',
        width: 45,
        height: 45,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 110,
        height: 110,
        borderRadius: 100,
        borderWidth: 1.5,
    },
    flex: {
        flex: 1,
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
    btnnnn: {
        padding: 9,
        paddingLeft: 17,
        paddingRight: 17,
        borderRadius: 50,
        alignSelf: "center",
        marginTop: 20,
    },
    holder: {
        flexDirection: 'row',
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    white: {
        color: '#fff',
    }
})

export default MyCar