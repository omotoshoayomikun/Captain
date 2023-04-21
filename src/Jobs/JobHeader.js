
import React, { useRef, useState } from "react";
import { Animated, Pressable, StyleSheet, Text, View } from "react-native";
import CompletedJobs from "./CompletedJobs";
import UpcomingJobs from "./UpcomingJobs";

const JobHeader = ({ navigation }) => {

    const [slide, setSlide] = useState(false)

    const [display, setDisplay] = useState(true);

    const HandleSlide1 = () => {
        setDisplay(true)
    }

    const HandleSlide2 = () => {
        setDisplay(false)
    }



    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <View style={styles.wrapper}>
                <Text style={[styles.white, { fontSize: 20, flex: 1 }]}>My Jobs</Text>
                <View style={styles.toggle}>
                    <View style={[styles.sliding, { right: display ? undefined : 0 }]}></View>
                    <Pressable style={[styles.slide]} onPress={HandleSlide1}>
                        <Text style={styles.text}>Completed<Text style={{fontSize: 9, color: 'teal'}}> 602</Text></Text>
                        {/*  */}
                    </Pressable>
                    <Pressable style={[styles.slide]} onPress={HandleSlide2}>
                        <Text style={styles.text}>Upcoming</Text>
                    </Pressable>
                </View>
            </View>
            {display ?
                <CompletedJobs navigation={navigation} />
                : <UpcomingJobs navigation={navigation}  />
                }
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#0B0A26',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 20,
        paddingTop: 50,
        position: 'absolute',
        flexDirection: "row",
        justifyContent: "center",
        flex: 1,
    },
    white: {
        color: '#ffff'
    },
    text: {
        // textAlign:
        fontSize: 12,
    },
    toggle: {
        width: 160,
        height: 40,
        backgroundColor: '#555',
        borderRadius: 50,
        flexDirection: "row",
        position: "relative",
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        zIndex: 10,
    },
    sliding: {
        position: "absolute",
        backgroundColor: '#fff',
        height: '100%',
        width: 85,
        borderRadius: 50,
        //right: 0,
    }
})

export default JobHeader