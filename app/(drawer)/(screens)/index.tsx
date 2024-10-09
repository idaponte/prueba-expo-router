import { useNavigation } from 'expo-router'
import { Button, View } from 'react-native'

const index = () => {
    const navigation = useNavigation()
    
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
    }}>
        <Button title="Go to screen1" onPress={() => navigation.navigate('screen1')} />
        <Button title="Go to screen2" onPress={() => navigation.navigate('screen2')} />
        <Button title="Go to screen3" onPress={() => navigation.navigate('screen3')} />
        <Button title="Go to screen4" onPress={() => navigation.navigate('screen3')} />
    </View>
  )
}

export default index