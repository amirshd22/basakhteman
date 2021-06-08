import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppScreen from '../AppScreen'
import * as Yup from 'yup'
import authStorage from "../../auth/storage"
import FormContainer from './FormContainer'
import SubmitButton from './SubmitButton'
import FormField from './FormField'
import PickerField from "./PickerField";
import { colors } from '../../config/colors'
import {postAgahi} from '../../services/agahiService'
import { useNavigation } from "@react-navigation/native";

const validationSchema = Yup.object().shape({
    description: Yup.string().label("Description"),
    title: Yup.string().required("You need to set the title").min(1).label("Title"),
    phoneNumber: Yup.string().required("You need to set the phone number").min(1).label("Phone number"),
    tag: Yup.string().required().nullable().label("Tag")
})

const Tags = [
    { label: "آگهی فروش مصالح و انجام خدمات", id: 1 },
    { label: "آگهی نیازمندی به مصالح و انجام خدمات", id: 2 },


]

export default function AppAgahiForm() {
    const [token , setToken] = useState('')
    const navigation = useNavigation()

    const getToken = async() => {
        const {access} = await authStorage.getToken()
        setToken(access)
        console.log(token);    
    }  
    useEffect(()=> {
        getToken()
    }, [])

    const handleSubmit = async(values, {resetForm}) => {
        const {data, status}  = await postAgahi(values, token)
        console.log(data, status);
        navigation.navigate("agahi")
        resetForm()
    }

    return (
        <AppScreen>
            <FormContainer validationSchema={validationSchema} initialValues={{description:"", title:"", tag:null , phoneNumber: ""}} onSubmit={handleSubmit}>
                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <FormField
                            name="title"
                            autoCapitalize="none"
                            autoCorrect={false}
                            clearButtonMode="always"
                            iconType="format-title"
                            keyboardType="default"
                            placeholder="Title"
                        />
                        <FormField
                            name="description"
                            autoCapitalize="none"
                            autoCorrect={false}
                            clearButtonMode="always"
                            iconType="subtitles"
                            keyboardType="default"
                            placeholder="Description"
                            multiline
                            numberOfLines={5}
                        />
                        <PickerField
                            name="tag"
                            placeholder="Tags"
                            items={Tags}
                            width="100%"
                        />
                        <FormField
                            name="phoneNumber"
                            autoCapitalize="none"
                            autoCorrect={false}
                            clearButtonMode="always"
                            iconType="subtitles"
                            keyboardType="number-pad"
                            placeholder="Phone number"
                        />
                    </View>
                    <View style={{width:"100%", padding:20}}>
                        <SubmitButton title="ثبت آگهی" textColor={colors.primary} color={colors.seccondary} />
                    </View>
                </View>
            </FormContainer>
        </AppScreen>
    )
}

const styles = StyleSheet.create({
    icon: {
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 40,
      },
    inputContainer:{
        padding:10
    },
    container: {
        justifyContent: "space-between"
    }
})
