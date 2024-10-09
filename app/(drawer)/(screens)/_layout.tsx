import React from 'react'
import { Drawer } from "expo-router/drawer";
import { Stack, useNavigation } from 'expo-router';
import { Button } from 'react-native';

const RootLayout = () => {
  const navigation = useNavigation()
  
  return (
    <Stack
      screenOptions={{
        animation: 'slide_from_right',
        headerRight: () => {
          return (
            <Button title="Go to screen3" onPress={() => navigation.navigate('screen3')} />
          )
        }
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="screen1" options={{  headerLeft: () => {
        return (
          <Button title="Go to screen2" onPress={() => navigation.goBack()} />
        )
      } }} />
      <Stack.Screen name="screen2" options={{ headerShown: false }} />
      <Stack.Screen name="screen3" options={{ headerShown: false }} />
      <Stack.Screen name="screen4" options={{ headerShown: false }} />
    </Stack>
  )
}

export default RootLayout