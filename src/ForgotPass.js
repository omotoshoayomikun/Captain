
import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Modal } from "react-native";
import { BBtn, Btn2 } from "../Componet/Btn";

const ForgotPass = ({ navigation }) => {

    const [checkModel, setCheckModel] = useState(false)
    const [focus, setFocus] = useState(false)

    const handleBack = () => {
        navigation.navigate('Login');
    }

    const handleBtn2 = () => {
        setCheckModel(true);
    }

    const handleBackModel = () => {
        setCheckModel(false)
    }

    return (
        <View style={styles.body}>
            <BBtn handleBack={handleBack} />
            <Text style={styles.text}>Reset your </Text>
            <Text style={[{ marginBottom: 25}, styles.text]}>password </Text>
            <TextInput
                style={[styles.input, {borderColor: focus? '#211E8A':'#0E0E241A' }]}
                placeholder='Email address or phone number'
                onFocus={() => {
                    setFocus(true)
                }}
                placeholderTextColor='rgb(174, 174, 174)'
            />
            <Btn2 title='Reset password' handleBtn2={handleBtn2} />
            {/* THIS IS THE MODEL THAT DISPLAY AFTER THE RESET PASSWORD IS CLICK */}

            <Modal
                visible={checkModel}
                onRequestClose={() => setCheckModel(false)}
            >
                <View style={styles.model_wrapper}>
                    <BBtn handleBack={() => setCheckModel(false)} />
                    <View style={styles.flex}>
                        <Text style={styles.text}>Reset your </Text>
                        <Text style={styles.text}>password </Text>
                        <Text style={styles.texts}>A password reset link has been sent to omotosho**@gmail.com, follow the instruction to reset password.</Text>
                    </View>
                    <View>
                        <Btn2 title='Resend Email' />
                        <Text style={{ textAlign: 'center', marginTop: 30, color: '#000' }}>Incorrect details?
                            <Text style={{ color: '#211E8A' }} onPress={() => setCheckModel(false)}> Change email address</Text>
                        </Text>
                    </View>
                </View>
            </Modal>


            {/* /////////////////////////////////////////////////////////////// */}
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
    model_wrapper: {
        flex: 1,
        padding: 30,
        paddingBottom: 40
    },
    texts: {
        fontSize: 15,
        lineHeight: 25,
        color: '#000',
        marginTop: 12,
    },
    flex: {
        flex: 1,
    }
})

export default ForgotPass