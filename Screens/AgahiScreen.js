import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Agahi from '../Components/Agahi'
import AppScreen from '../Components/AppScreen'
import { colors } from '../config/colors'
import authStorage from "../auth/storage"
import {getAgahi} from "../services/agahiService"
import ItemSeparator from '../Components/ItemSeparatorComponent'




export default function AgahiScreen() {
    const [items, setItems] = useState([])
    const [token, setToken] = useState('')
    const [userProfile, setUserProfile] = useState()
    const [refreshing , setRefreshing] = useState(false)


    useEffect(() => {
        getToken()
        getItems()
    } , [])
    const getToken = async() => {
        const {access, profile} = await authStorage.getToken()
        setUserProfile(profile)
        setToken(access)   
        console.log(access);
    }

    const getItems = async () => {
        const {data, status} = await getAgahi(token)
        setItems(data)
        console.log(data, status);
    }

    return (
        <AppScreen style={{backgroundColor:colors.darkishWhite, height:"100%"}}>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}

                renderItem={({item})=> {
                    return (
                       <Agahi title={item.title} tag={item.tag}  date={item.created} />
                    )
                }}
                refreshing={refreshing}
                onRefresh={getItems}
            />
        </AppScreen>
    )
}

const styles = StyleSheet.create({})
