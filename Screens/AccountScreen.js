import React, {useContext} from 'react'
import { StyleSheet, Button, View } from 'react-native'
import UserContext from '../auth/context'
import authStorage from "../auth/storage"

export default function AccountScreen() {
    const {user, setUser} = useContext(UserContext)
    const handleLogout = () => {
        setUser(null);
        authStorage.removeToken();
    }
    return (
        <View>
            <Button title="logout" onPress={handleLogout} />
        </View>
    )
}

const styles = StyleSheet.create({})
