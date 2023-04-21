
import React from "react";
import { Image, Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Btn2 } from "../../Componet/Btn";

const Call = ({navigation}) => {
    return (
        <Modal
            transparent={true}
            onRequestClose={() => navigation.navigate('RideStatus')}
            >
            <View style={styles.model}>
                <View style={[styles.header, {}]}>
                    <Pressable style={styles.move}></Pressable>
                    <View style={{ alignItems: "center", justifyContent: 'center', marginBottom: 30, marginTop: 18}}>
                        <Image source={require('../../assets/rider.png')} style={styles.image} resizeMode='stretch' />
                        <Text style={[{ color: '#000', fontSize: 18, marginTop: 10 }]}>Adesewa</Text>
                        <Text style={[{ color: '#555', fontSize: 13, marginTop: 5 }]}>Ringing....</Text>
                    </View>
                    <Pressable style={{ marginBottom: 20, justifyContent: "center", alignItems: 'center' , marginTop: 30,}} onPress={() => navigation.navigate('RideStatus')}>
                        <Image source={require('../../assets/endcall.png')} style={styles.endimage} resizeMode='stretch' />
                    </Pressable>
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
        padding: 20,
        paddingTop: 10,
        backgroundColor: '#fff',
    },
    move: {
        paddingVertical: 3,
        paddingHorizontal: 25,
        backgroundColor: '#E6E6E6',
        alignSelf: "center",
        borderRadius: 40,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 100,
    },
    endimage: {
        borderRadius: 100,
        width: 50,
        height: 50,
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

export default Call