import React, { useState } from "react";
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from "@react-navigation/native";
import jwdDecode from "jwt-decode";
import UserContext from "./auth/context";
import authStorage from "./auth/storage";
import Authnavigator from "./navigation/Authnavigator";
import AppNavigator from "./navigation/Appnavigator";

import navigationTheme from "./navigation/navigationTheme";



export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const getUserFromStorage = async () => {
    const token = await authStorage.getToken();
    if (!token) return;

    setUser(jwdDecode(token));
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={getUserFromStorage}
        onFinish={() => setIsReady(true)}
        onError={(error) => console.log(error)}
      />
    );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <Authnavigator />}
      </NavigationContainer>
    </UserContext.Provider>
  );
}
