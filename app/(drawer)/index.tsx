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
        <Button title="Go to screen1" onPress={() => navigation.navigate('(screens)')} />
    </View>
  )
}

export default index