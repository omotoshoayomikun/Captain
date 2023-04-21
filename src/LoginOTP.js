import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { BBtn } from "../Componet/Btn";

const LoginOTP = ({ navigation }) => {

    const [inp1, setInp1] = useState('');
    const [inp2, setInp2] = useState('');
    const [inp3, setInp3] = useState('');
    const [inp4, setInp4] = useState('');

    const ref1 = React.useRef();
    const ref2 = React.useRef();
    const ref3 = React.useRef();
    const ref4 = React.useRef();

    const handleBack = () => {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.body}>
            <BBtn handleBack={handleBack} />
            <Text style={styles.text}>Login via OTP </Text>
            <Text style={styles.texts}>Please enter the 4-digit verification code send to omotoshoayom...@gmail.com </Text>
            <View style={styles.wrapper}>
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
            <Text style={[styles.texts, { textAlign: 'center', fontSize: 12 }]}>Code expire in 2:30 </Text>
            <View style={{ justifyContent: 'flex-end', flex: 1, marginBottom: 20 }}>
                <Text style={{ textAlign: 'center', color: '#000' }}>Did'nt recieve any code? <Text style={{ color: '#211E8A' }}>Resend OTP</Text></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        padding: 30,
    },
    text: {
        fontSize: 30,
        color: '#000',
        lineHeight: 30,
        fontFamily: 'RobotoCondensed-Regular',
    },
    texts: {
        fontSize: 15,
        lineHeight: 25,
        color: '#000',
        marginTop: 5,
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        padding: 20,
        paddingBottom: 0,
        paddingTop: 0,
    },
    input: {
        borderWidth: 1.5,
        borderColor: '#0E0E241A',
        borderRadius: 5,
        color: '#000',
        paddingLeft: 12,
        paddingRight: 12,
        fontSize: 18,
        textAlign: "center",
        backgroundColor: '#0E0E240D',

    }
})

export default LoginOTP