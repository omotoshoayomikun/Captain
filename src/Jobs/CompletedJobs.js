
import React from "react";
import { Text, View, StyleSheet, ScrollView, Image, Pressable } from "react-native";

const CompletedJobs = ({ navigation }) => {

    const JobsCompleted = [
        {
            location: 'Kusenla Road, Ikate Lekki',
            name: 'Adesewa Yusuf',
            amount: ' 24,00.00',
            date: 'Apr 3, 2021 11:33 AM'
        },
        {
            location: 'Kusenla Road, Ikate Lekki',
            name: 'Adesewa Yusuf',
            amount: ' 24,00.00',
            date: 'Apr 3, 2021 11:33 AM'
        },
        {
            location: 'Kusenla Road, Ikate Lekki',
            name: 'Adesewa Yusuf',
            amount: ' 24,00.00',
            date: 'Apr 3, 2021 11:33 AM'
        },
        {
            location: 'Kusenla Road, Ikate Lekki',
            name: 'Adesewa Yusuf',
            amount: ' 24,00.00',
            date: 'Apr 3, 2021 11:33 AM'
        },
        {
            location: 'Kusenla Road, Ikate Lekki',
            name: 'Adesewa Yusuf',
            amount: ' 24,00.00',
            date: 'Apr 3, 2021 11:33 AM'
        },
        {
            location: 'Kusenla Road, Ikate Lekki',
            name: 'Adesewa Yusuf',
            amount: ' 24,00.00',
            date: 'Apr 3, 2021 11:33 AM'
        },
        {
            location: 'Kusenla Road, Ikate Lekki',
            name: 'Adesewa Yusuf',
            amount: ' 24,00.00',
            date: 'Apr 3, 2021 11:33 AM'
        },
    ]

    const handleClick = () => {
        navigation.navigate('RideDetail')
    }

    return (
        <ScrollView style={styles.body}>
            <View style={styles.content_body}>
                <Text style={styles.header}>April 2021</Text>
                {JobsCompleted.map((job, i) => (
                    <Pressable style={styles.sub} onPress={handleClick} key={i}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, }}>
                                <Text style={{ fontSize: 14, color: '#000', marginBottom: 5, }}>{job.location}</Text>
                                <Text style={{ fontSize: 13, color: '#555' }}>{job.name}</Text>
                            </View>
                            <View style={{}}><Text style={{ fontSize: 12, color: '#000' }}> {'\u20A6'} {job.amount} </Text></View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 15, }}>
                            <View style={{ flex: 1, }}>
                                <Text style={{ fontSize: 12, color: '#555' }}> {job.date} </Text>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                <Image source={require('../../assets/star2.png')} style={styles.img} />
                                <Image source={require('../../assets/star2.png')} style={styles.img} />
                                <Image source={require('../../assets/star2.png')} style={styles.img} />
                                <Image source={require('../../assets/star.png')} style={styles.img} />
                                <Image source={require('../../assets/star.png')} style={styles.img} />
                            </View>

                        </View>
                    </Pressable>
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#fff',
        marginTop: 111,
    },
    content_body: {
        padding: 30,
    },
    sub: {
        // flexDirection: 'row',
        padding: 15,
        paddingLeft: 0,
        paddingRight: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#5555'
    },
    header: {
        fontSize: 20,
        color: '#000',
        // marginBottom: 10,
    },
    img: {
        width: 10,
        height: 10,
    }
})

export default CompletedJobs