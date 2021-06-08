import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Yup from "yup";
import UserContext from '../../auth/context';
import jwt_decode from "jwt-decode"
import AppScreen from '../AppScreen'
import FormContainer from './FormContainer';
import FormField from './FormField'
import FormErrorMessage from './FormErrorMessage'
import SubmitButton from "./SubmitButton"
import userApi from '../../services/authService'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {colors} from '../../config/colors'
import authStorage from "../../auth/storage"

const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email("Enter valid email")
      .required("Username is required")
      .label("Username"),
    password: Yup.string()
      .required("Password is required")
      .min(3)
      .label("Password"),
  });

export default function AppLoginComponent() {
    const userContext = useContext(UserContext)
    const [loginFailed, setLoginFailed] = useState(false);
    const [error, setError] = useState("");
    const handleSubmit = async(values) => {
        const {data, status} = await userApi.login(values)
        if(status === 401) {
            setError("Verify your account.");
            return setLoginFailed(true);
        }
        console.log(data);
        setLoginFailed(false);
        const user = jwt_decode(data.access);
        userContext.setUser(user);
        authStorage.storeToken(data);
    }
    return (
        <AppScreen>
            <MaterialCommunityIcons name="login" style={styles.icon} size={50} color="black" />
            <FormContainer 
                initialValues={{ username: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}>
                <>  
                    <View>
                        <FormErrorMessage visible={loginFailed} error={error} />
                        <View style={styles.inputContainer}>
                            <FormField
                            name="username"
                            autoCapitalize="none"
                            autoCorrect={false}
                            clearButtonMode="always"
                            iconType="email"
                            keyboardType="email-address"
                            placeholder="Email"
                            textContentType="emailAddress"
                            />
                            <FormField
                            name="password"
                            secureTextEntry={true}
                            autoCapitalize="none"
                            autoCorrect={false}
                            clearButtonMode="always"
                            iconType="lock"
                            placeholder="Password"
                            textContentType="password"
                            />
                        </View>
                        <View style={{width:"100%", padding:20}}>
                            <SubmitButton title="ورود" textColor={colors.primary} color={colors.seccondary} />
                        </View>
                    </View>
                </>
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
    }
})
