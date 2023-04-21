
import React, { useState } from "react";
import { Image, Modal, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Btn1, Btn2 } from "../../Componet/Btn";

const WynkPass = ({ navigation }) => {

    const [wynkSub, setWynkSub] = useState(false);

    const handleSubscribe = () => {
        setWynkSub(true)
    }
    
    const handleConfirmaation = () => {
        navigation.navigate('PaymentMethod');
        setWynkSub(false)
    }


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
            </View>
            <View style={{ alignItems: "center", marginBottom: 20 }}>
                <Image source={require('../../assets/gold_berge.png')} style={styles.img} resizeMode='stretch' />
                <Text style={[{ color: '#000', fontSize: 25, marginTop: 5 }]}>Wynk Gold</Text>
                <Text style={[{ color: '#000', fontSize: 13 }]}>Expires in 4 days</Text>
            </View>
            <Text style={[{ color: '#000', fontSize: 15, marginTop: 30, marginBottom: 25, }]}>Select a plan to purchase or renew</Text>
            <ScrollView horizontal={true}>
                <View style={styles.card}>
                    <View style={{ alignItems: "center", }}>
                        <Image source={require('../../assets/purple_berge.png')} style={styles.image} resizeMode='stretch' />
                        <Text style={[{ color: '#000', fontSize: 20, marginTop: 5 }]}>Wynk Purple</Text>
                        <Text style={[{ color: '#000', fontSize: 10, marginBottom: 15 }]}>Valid for 7 days</Text>
                        <Pressable
                            onPress={handleSubscribe}
                            style={({ pressed }) => [
                                { backgroundColor: pressed ? '' : '#211E8A' },
                                styles.bbt_me
                            ]}
                        >
                            <Text style={{ color: '#fff' }}>Subscribe</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={{ alignItems: "center", }}>
                        <Image source={require('../../assets/maverick_berge.png')} style={styles.image} resizeMode='stretch' />
                        <Text style={[{ color: '#000', fontSize: 20, marginTop: 5 }]}>Wynk Maverick</Text>
                        <Text style={[{ color: '#000', fontSize: 10, marginBottom: 15 }]}>Valid for 7 days</Text>
                        <Pressable
                            style={({ pressed }) => [
                                { backgroundColor: pressed ? '' : '#211E8A' },
                                styles.bbt_me
                            ]}
                        >
                            <Text style={{ color: '#fff' }}>Subscribe</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={{ alignItems: "center", }}>
                        <Image source={require('../../assets/gold_berge.png')} style={styles.image} resizeMode='stretch' />
                        <Text style={[{ color: '#000', fontSize: 20, marginTop: 5 }]}>Wynk Gold</Text>
                        <Text style={[{ color: '#000', fontSize: 10, marginBottom: 15 }]}>Valid for 7 days</Text>
                        <Pressable
                            style={({ pressed }) => [
                                { backgroundColor: pressed ? '' : '#211E8A' },
                                styles.bbt_me
                            ]}
                        >
                            <Text style={{ color: '#fff' }}>Subscribe</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
            <View style={{ marginBottom: 60, }}></View>
            {/* THIS IS THE MODEL THAT ASK USER TO CONFIRM THEIR PURCHASE */}
            <Modal
                transparent={true}
                animationType='fade'
                visible={wynkSub}
                onRequestClose={() => setWynkSub(false)}
            >
                <View style={styles.modal}>
                    <View style={styles.modal_box}>
                        <Text style={[{ color: '#000', fontSize: 15, textAlign: 'center' }]}>You are about to subscribe to Wynk purple.</Text>
                        <Text style={[{ color: '#000', fontSize: 15, textAlign: 'center' }]}>Valid 7 days</Text>
                        <Pressable
                            style={({ pressed }) => [
                                { backgroundColor: pressed ? '' : '#211E8A', marginTop: 30 },
                                styles.modal_btn
                            ]}
                            onPress={handleConfirmaation}
                        >
                            <Text style={{ color: '#fff', textAlign: "center" }}>Yes proceed</Text>
                        </Pressable>
                        <Pressable
                            style={({ pressed }) => [

                                styles.modal_btn
                            ]}

                        >
                            <Text style={{ color: '#000', textAlign: "center" }} onPress={() => setWynkSub(false)} >No, cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
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
    bbt_me: {
        backgroundColor: '#211E8A',
        alignSelf: 'flex-start',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        paddingLeft: 20,
        paddingRight: 20,
    },
    img: {
        width: 110,
        height: 110,
        borderRadius: 100,
        borderWidth: 1.5,
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderWidth: 1.5,
        borderColor: '#0000000D',
        borderRadius: 5,
        marginRight: 15,
    },
    flex: {
        flex: 1,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 100,
        borderWidth: 1.5,
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
})

export default WynkPass