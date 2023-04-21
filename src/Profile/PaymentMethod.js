
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View, Modal, Image } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Btn2 } from "../../Componet/Btn";

const PaymentMethod = ({ navigation }) => {

    const [wynkConfirm, setWynkConfirm] = useState(false);

    return (
        <View style={styles.modal}>
            <View style={styles.wrapper}>
                <View style={styles.row}>
                    <Text style={[styles.text, { flex: 1 }]}>Select Payment Method</Text>
                    <View style={{ flex: 1 }}>
                        <Pressable style={[styles.cancel]} onPress={() => { navigation.navigate('WynkPass'); }}>
                            <MaterialIcons name="close" size={19} color='#fff' />
                        </Pressable>
                    </View>
                </View>
                <View>
                    <Pressable style={({ pressed }) => [
                        // {borderColor: pressed? '':''},
                        styles.box
                    ]}>
                        <Text style={styles.text}>Pay Via Wallet</Text>
                    </Pressable>
                    <Pressable style={({ pressed }) => [
                        { flexDirection: "row", },
                        styles.box
                    ]}>
                        <Image source={require('../../assets/mastercard.png')} style={styles.img} resizeMode='cover' />
                        <Text style={styles.text}>Pay with Card</Text>
                    </Pressable>
                    <Pressable style={({ pressed }) => [
                        // {borderColor: pressed? '':''},
                        styles.box
                    ]}>
                        <Text style={styles.text}>Pay Via Bank Transfer</Text>
                    </Pressable>
                </View>
                <View>
                    <Btn2 title='Pay Now' handleBtn2={() => {
                        setWynkConfirm(true);
                    }} />
                </View>
            </View>


            {/* THIS MODAL IS FOR THE COMFIRM MODEL 2 */}
            <Modal
                visible={wynkConfirm}
                onRequestClose={() => {
                    setWynkConfirm(false)
                    navigation.navigate('WynkPass')
                }
                }
            >
                <View style={styles.model_wrapper}>
                    <View style={[styles.flex, { justifyContent: "center", alignItems: 'center' }]}>
                        <Image source={require('../../assets/check_icon.png')} style={styles.modal_img} />
                        <Text style={styles.succText}>Your payment for</Text>
                        <Text style={styles.succText}>Wynk Gold was successful</Text>
                    </View>
                    <View style={{ marginTop: 70 }}>
                        <Btn2 title='View Wynk pass' handleBtn2={() => {
                            navigation.navigate('ProfileIndex')
                        }} />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.10)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 50,
    },
    wrapper: {
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingVertical: 15,
        paddingHorizontal: 25,
        width: 270,
    },
    text: {
        fontSize: 15,
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        marginBottom: 20,
    },
    cancel: {
        padding: 12,
        borderRadius: 100,
        backgroundColor: '#555',
        alignSelf: "flex-end",
    },
    box: {
        borderWidth: 1.5,
        borderColor: '#0E0E241A',
        padding: 17,
        marginVertical: 5,
        borderRadius: 6,
    },
    succText: {
        fontSize: 25,
        fontWeight: '500',
        color: '#000',
        textAlign: 'center',
        fontFamily: 'RobotoCondensed-Regular',
    },
    modal_img: {
        marginBottom: 30,
    },
    flex: {
        flex: 1,
    },
    model_wrapper: {
        flex: 1,
        padding: 30,
    },
    img: {
        width: 25,
        height: 20,
        marginRight: 10,
    }
})

export default PaymentMethod