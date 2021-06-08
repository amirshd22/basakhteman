import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppButton from '../Components/AppButton'
import { colors } from '../config/colors'

export default function WelcomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Text style={{fontSize:30}}>Sakhteman Family</Text>
            </View>
            <View style={styles.buttonContainer}> 
                <AppButton textColor={colors.seccondary} color={colors.primary} style={styles.btn} title="ورود" onPress={() => navigation.navigate("Login")} />
                <AppButton textColor={colors.primary} color={colors.seccondary} style={styles.btn} title="ثبت نام" onPress={() => navigation.navigate("Register")} />
            </View>     
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems:'center',
        justifyContent:"space-around"
    },
    buttonContainer : {
        padding:20,
        width: "100%",

    },
    logo: {
        textAlign:'center',
        fontSize:50,
    },
    btn: {
        borderColor:colors.seccondary,
        borderWidth:1,
        borderRadius:3,
    }
})
